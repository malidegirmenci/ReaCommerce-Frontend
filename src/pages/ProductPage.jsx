import { data } from '../data/data';
import BestSellerProducts from '../components/general/BestSellerProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEye, faCartShopping, faHeart, faStar, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Images } from '../assets/Images';
import { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
} from 'reactstrap';
import { faAws, faHooli, faLyft, faPiedPiperHat, faRedditAlien, faStripe } from '@fortawesome/free-brands-svg-icons';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axiosInstance from '../api/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCartItemQuantity } from '../store/actions/shoppingCartAction/shoppingCartAction';
import toastMixin from '../utils/sweetAlertToastify';
export default function ProductPage() {
    const { reviews, availability, descriptionSrc } = data.productPage;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const history = useHistory();
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const { cart } = useSelector((store) => store.shoppingCart);
    const [product, setProduct] = useState({ images: [] });
    const requestURL = `/products/${productId}`
    const addingToCartHandler = () => {
        let isAvailable = false;
        cart.map((item) => {
            if (item.product.id == productId) isAvailable = true;
            return item;
        });
        isAvailable
            ? dispatch(updateCartItemQuantity(productId, true))
            : dispatch(addToCart(product));
        toastMixin.fire({
            animation: true,
            title: "Product added to cart"
        });
    };
    useEffect(() => {
        axiosInstance
            .get(requestURL)
            .then((response) => {
                console.log("data", response.data)
                setProduct(response.data);
                setLoading(true);
            })
            .catch((error) => {
                console.log("error", error)
            });
    }, [productId]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === product?.images.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? product?.images.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };


    const newSlides = product?.images.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <div className='h-[500px] rounded-lg max-sm:h-[400px] flex'>
                    <img src={item.url} alt={product?.name} className=' w-full h-full rounded-t-lg object-cover object-center' />
                </div>
            </CarouselItem>
        );
    });
    return (
        <div className='w-4/5 mx-auto flex flex-col gap-10 max-sm:items-center'>
            <nav className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                    <div className="text-slate-800 text-sm font-bold leading-normal tracking-tight cursor-pointer" onClick={() => history.push("/")}>Home</div>
                    <FontAwesomeIcon icon={faArrowRight} size="sm" className='text-slate-400' />
                    <div className="text-slate-400 text-sm font-bold leading-normal tracking-tight">Shop</div>
                </div>
                <div onClick={() => history.goBack()} className='cursor-pointer flex items-center gap-2'>
                    <FontAwesomeIcon icon={faArrowLeft} size="sm" className='text-slate-600' />
                    <div className="text-slate-600 text-sm font-bold leading-normal tracking-tight cursor-pointer" >Go Back</div>
                </div>
            </nav>
            <div className='flex gap-8 max-sm:flex-col'>
                <div className='w-1/2 max-sm:w-full'>
                    <div className='flex flex-col gap-2'>
                        <Carousel
                            className='shadow-md ring-1 ring-slate-200 rounded'
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}>
                            {newSlides}
                            <CarouselControl
                                direction="prev"
                                directionText="Previous"
                                onClickHandler={previous}
                            />
                            <CarouselControl
                                direction="next"
                                directionText="Next"
                                onClickHandler={next}
                            />
                        </Carousel >
                        <div className='flex gap-3 shadow-m'>
                            {/* <img onClick={() => setActiveIndex(1)} src={product.images[1].url} className='w-28 h-24 object-cover object-bottom hover:scale-105 hover:ease-out hover:duration-300 ease-out duration-300 rounded-b-md cursor-pointer' /> */}
                            {product.images.length > 0 && (
                                product.images.map((image, idx) => {
                                    return (
                                        <img key={idx}
                                            onClick={() => setActiveIndex(idx)}
                                            src={image.url}
                                            className='ring-1 ring-slate-200 rounded opacity-50 w-28 h-24 object-cover object-center hover:scale-105 hover:ease-out hover:duration-300 ease-out duration-300 rounded-b-md cursor-pointer'
                                        />
                                    )
                                })
                            )}
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-start gap-4 max-sm:w-full'>
                    <h4 className='text-slate-800 text-xl font-normal leading-[30px] tracking-tight'>{product.name}</h4>
                    <div className='flex items-center gap-2'>
                        <div className='flex gap-1'>
                            <FontAwesomeIcon icon={faStar} className='text-yellow-300' size="lg" />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-300' size="lg" />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-300' size="lg" />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-300' size="lg" />
                            <img src={Images.icons.starRegular} />
                        </div>
                        <h6 className='text-neutral-500 text-sm font-bold leading-normal tracking-tight'>{parseInt(product.sell_count / 15)} Reviews</h6>
                    </div>
                    <h5 className='text-slate-800 text-2xl font-bold leading-loose tracking-tight'>${product.price}</h5>
                    <div className='flex flex-col items-start'>
                        <h6 className='text-neutral-500 text-sm font-bold leading-normal tracking-tight'>Availability : <span className='text-sky-500 text-sm font-bold leading-normal tracking-tight'>{availability}</span></h6>
                        <p className='text-zinc-500 text-sm font-normal leading-tight tracking-tight'>{product.description}</p>
                        <p className='text-zinc-500 text-sm font-normal leading-tight tracking-tight'>{product.sell_count} amount purchased</p>
                    </div>
                    <div className="w-[445px] h-[0px] border border-stone-300"></div>
                    <div className='flex gap-2'>
                        <div className="w-[30px] h-[30px] bg-sky-500 rounded-full shadow-sm" />
                        <div className="w-[30px] h-[30px] bg-green-500 rounded-full shadow-sm" />
                        <div className="w-[30px] h-[30px] bg-orange-400 rounded-full shadow-sm" />
                        <div className="w-[30px] h-[30px] bg-slate-800 rounded-full shadow-sm" />
                    </div>
                    <div className='flex gap-2'>
                        <button onClick={addingToCartHandler} className='text-white text-sm font-bold leading-normal tracking-tight rounded-md bg-sky-500 px-3 py-2.5'> Add to Cart </button>
                        <div className='rounded-full border border-gray-800 w-10 flex justify-center items-center'>
                            <FontAwesomeIcon icon={faHeart} size="sm" className='text-red-600' />
                        </div>
                        <div className='rounded-full border border-gray-800 w-10 flex justify-center items-center'>
                            <FontAwesomeIcon icon={faCartShopping} size="sm" className='text-slate-600' />
                        </div>
                        <div className='rounded-full border border-gray-800 w-10 flex justify-center items-center'>
                            <FontAwesomeIcon icon={faEye} size="sm" className='text-slate-600' />
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <nav className='flex justify-center max-sm:w-full max-sm:text-center'>
                    <a className="p-6 text-neutral-500 text-sm font-bold leading-normal tracking-tight">Description</a>
                    <a className="p-6 text-neutral-500 text-sm font-bold leading-normal tracking-tight">Additional Information</a>
                    <a className="p-6 text-neutral-500 text-sm font-bold leading-normal tracking-tight">Reviews<span className='text-green-900 font-bold pl-1'>(0)</span></a>
                </nav>
                <hr className='border border-gray-200' />
            </div>
            <div className='flex justify-start gap-14 max-sm:flex-col'>
                <div className='w-[28%] max-sm:w-full'>
                    <img className='w-full h-96 object-cover object-center rounded-md border-[30px] border-sky-500' src={descriptionSrc} />
                </div>
                <div className='w-[27%] flex flex-col gap-6 max-sm:w-full '>
                    <h5 className=' text-slate-800 text-2xl font-bold  tracking-tight'>the quick fox jumps over</h5>
                    <h6 className='text-neutral-500 text-sm font-normal leading-tight tracking-tight'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
                    <h6 className='text-neutral-500 text-sm font-normal leading-tight tracking-tight'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
                    <h6 className='text-neutral-500 text-sm font-normal leading-tight tracking-tight'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</h6>
                </div>
                <div className=' flex flex-col gap-6'>
                    <div className='flex flex-col gap-6'>
                        <h5 className=' text-slate-800 text-2xl font-bold  tracking-tight'>the quick fox jumps over</h5>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-start gap-4'>
                                <FontAwesomeIcon icon={faArrowRight} size="lg" className='text-gray-300' />
                                <h6 className='text-neutral-500 text-sm font-bold leading-normal tracking-tight'>the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <FontAwesomeIcon icon={faArrowRight} size="lg" className='text-gray-300' />
                                <h6 className='text-neutral-500 text-sm font-bold leading-normal tracking-tight'>the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <FontAwesomeIcon icon={faArrowRight} size="lg" className='text-gray-300' />
                                <h6 className='text-neutral-500 text-sm font-bold leading-normal tracking-tight'>the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <FontAwesomeIcon icon={faArrowRight} size="lg" className='text-gray-300' />
                                <h6 className='text-neutral-500 text-sm font-bold leading-normal tracking-tight'>the quick fox jumps over the lazy dog</h6>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h5 className=' text-slate-800 text-2xl font-bold  tracking-tight'>the quick fox jumps over</h5>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center justify-start gap-4'>
                                <FontAwesomeIcon icon={faArrowRight} size="lg" className='text-gray-300' />
                                <h6 className='text-neutral-500 text-sm font-bold leading-normal tracking-tight'>the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <FontAwesomeIcon icon={faArrowRight} size="lg" className='text-gray-300' />
                                <h6 className='text-neutral-500 text-sm font-bold leading-normal tracking-tight'>the quick fox jumps over the lazy dog</h6>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <FontAwesomeIcon icon={faArrowRight} size="lg" className='text-gray-300' />
                                <h6 className='text-neutral-500 text-sm font-bold leading-normal tracking-tight'>the quick fox jumps over the lazy dog</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <h3 className='text-slate-800 text-2xl font-bold leading-loose tracking-tight max-sm:text-center'>BESTSELLER PRODUCTS</h3>
                <hr className='py-4 border border-gray-200' />
                <BestSellerProducts />
            </div>
            <div className="flex justify-between w-[90%] mx-auto py-10 max-sm:gap-y-4 max-sm:flex-col">
                <FontAwesomeIcon icon={faHooli} size="xl" className="p-1 text-gray-500 text-9xl" />
                <FontAwesomeIcon icon={faLyft} size="xl" className="p-1 text-gray-500  text-9xl" />
                <FontAwesomeIcon icon={faPiedPiperHat} size="xl" className="p-1 text-gray-500  text-9xl" />
                <FontAwesomeIcon icon={faStripe} size="xl" className="p-1 text-gray-500 text-9xl" />
                <FontAwesomeIcon icon={faAws} size="xl" className="p-1 text-gray-500 text-9xl" />
                <FontAwesomeIcon icon={faRedditAlien} size="xl" className="p-1 text-gray-500  text-9xl" />
            </div>
        </div>
    )
}