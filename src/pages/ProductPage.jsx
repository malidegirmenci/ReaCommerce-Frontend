import { data } from '../data/data';
import BestSellerProducts from '../components/general/BestSellerProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEye, faCartShopping, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { Images } from '../assets/Images';
import { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import { faAws, faHooli, faLyft, faPiedPiperHat, faRedditAlien, faStripe } from '@fortawesome/free-brands-svg-icons';
export default function ProductPage() {
    const { name, rate, reviews, price, availability, descriptionShort, color, slides, descriptionSrc } = data.productPage;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const newSlides = slides.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <div className='h-[500px] rounded-lg'>
                    <img src={item} alt={name} className='rounded-t-lg' />
                </div>
            </CarouselItem>
        );
    });
    return (
        <div className='w-4/5 mx-auto flex flex-col gap-10'>
            <nav className='flex items-center gap-2'>
                    <div className="text-slate-800 text-sm font-bold leading-normal tracking-tight">Home</div>
                    <FontAwesomeIcon icon={faArrowRight} size="sm" className='text-slate-400' />
                    <div className="text-slate-400 text-sm font-bold leading-normal tracking-tight">Shop</div>
                </nav>
            <div className='flex gap-8'>
                <div className='w-1/2'>
                    <div className='flex flex-col gap-2'>
                        <Carousel
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
                        </Carousel>
                        <div className='flex gap-3 '>
                            <img src={slides[1]} className='w-28 h-24 object-cover object-bottom hover:scale-105 hover:ease-out hover:duration-300 ease-out duration-300 rounded-b-md' />
                            <img src={slides[0]} className='opacity-50 w-28 h-24 object-cover object-bottom hover:scale-105 hover:ease-out hover:duration-300 ease-out duration-300 rounded-b-md' />
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-start gap-4'>
                    <h4 className='text-slate-800 text-xl font-normal leading-[30px] tracking-tight'>{name}</h4>
                    <div className='flex items-center gap-2'>
                        <div className='flex gap-1'>
                            <FontAwesomeIcon icon={faStar} className='text-yellow-300' size="lg" />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-300' size="lg" />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-300' size="lg" />
                            <FontAwesomeIcon icon={faStar} className='text-yellow-300' size="lg" />
                            <img src={Images.icons.starRegular} />
                        </div>
                        <h6 className='text-neutral-500 text-sm font-bold leading-normal tracking-tight'>{reviews} Reviews</h6>
                    </div>
                    <div className='flex flex-col items-start'>
                        <h5 className='text-slate-800 text-2xl font-bold leading-loose tracking-tight'>${price}</h5>
                        <h6 className='text-neutral-500 text-sm font-bold leading-normal tracking-tight'>Availability : <span className='text-sky-500 text-sm font-bold leading-normal tracking-tight'>{availability}</span></h6>
                    </div>
                    <p className='text-zinc-500 text-sm font-normal leading-tight tracking-tight'>{descriptionShort}</p>
                    <div className="w-[445px] h-[0px] border border-stone-300"></div>
                    <div className='flex gap-2'>
                        <div className="w-[30px] h-[30px] bg-sky-500 rounded-full shadow-sm" />
                        <div className="w-[30px] h-[30px] bg-green-500 rounded-full shadow-sm" />
                        <div className="w-[30px] h-[30px] bg-orange-400 rounded-full shadow-sm" />
                        <div className="w-[30px] h-[30px] bg-slate-800 rounded-full shadow-sm" />
                    </div>
                    <div className='flex gap-2'>
                        <button className='text-white text-sm font-bold leading-normal tracking-tight rounded-md bg-sky-500 px-3 py-2.5'> Select Options</button>
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
                <nav className='flex justify-center'>
                    <a className="p-6 text-neutral-500 text-sm font-bold leading-normal tracking-tight">Description</a>
                    <a className="p-6 text-neutral-500 text-sm font-bold leading-normal tracking-tight">Additional Information</a>
                    <a className="p-6 text-neutral-500 text-sm font-bold leading-normal tracking-tight">Reviews<span className='text-green-900 font-bold pl-1'>(0)</span></a>
                </nav>
                <hr className='border border-gray-200' />
            </div>
            <div className='flex justify-start gap-14 '>
                <div className='w-[28%]'>
                    <img className='w-full h-96 object-cover object-center rounded-md border-[30px] border-sky-500' src={descriptionSrc} />
                </div>
                <div className='w-[27%] flex flex-col gap-6 '>
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
                <h3 className='text-slate-800 text-2xl font-bold leading-loose tracking-tight'>BESTSELLER PRODUCTS</h3>
                <hr className='py-4 border border-gray-200' />
                <BestSellerProducts />
            </div>
            <div className="flex justify-between w-[90%] mx-auto py-10">
                <FontAwesomeIcon icon={faHooli} size="xl" className="p-1 text-gray-500 scale-[4]" />
                <FontAwesomeIcon icon={faLyft} size="xl" className="p-1 text-gray-500 scale-[4]" />
                <FontAwesomeIcon icon={faPiedPiperHat} size="xl" className="p-1 text-gray-500 scale-[4]" />
                <FontAwesomeIcon icon={faStripe} size="xl" className="p-1 text-gray-500 scale-[4]" />
                <FontAwesomeIcon icon={faAws} size="xl" className="p-1 text-gray-500 scale-[4]" />
                <FontAwesomeIcon icon={faRedditAlien} size="xl" className="p-1 text-gray-500 scale-[4]" />
            </div>
        </div>
    )
}