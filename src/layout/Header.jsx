import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faUser, faSearch, faCartShopping, faHeart, faBars, faAngleDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { data } from "../data/data";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import MD5 from "crypto-js/md5";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { logOutUser } from "../store/actions/userAction/userAction";
import { removeFromCart } from "../store/actions/shoppingCartAction/shoppingCartAction";

export default function Header() {
    const { phone, mail, offerMsg, companyName } = data.header;
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((store) => store.user.response);
    const categories = useSelector((store) => store.global.categories);
    const { pathname, search } = useLocation();
    const womanCategories = categories.filter((category) => category.gender === 'k');
    const manCategories = categories.filter((category) => category.gender === 'e');
    const handleLogOut = () => {
        dispatch(logOutUser(history));
        localStorage.removeItem('Token');
    }
    const { cart } = useSelector((store) => store.shoppingCart);
    const productURL = (productName,productId, categoryId,) => {
        const catCode = categories.find(
            (c) => c.id == categoryId
        )?.code;
        const nameSlug = productName.toLowerCase().replaceAll(" ", "-");
        const gender = catCode?.slice(0, 1) == 'k' ? 'kadin' : 'erkek'
        const category = catCode?.slice(2)
        const productURL = `/shopping/${gender}/${category}/${productId}/${nameSlug}`
        return productURL
    }
    let cartProductCount = cart.reduce((sum, product) => {
        return sum + product.count;
    }, 0);
    return (
        <div className="">
            <div className="bg-[#252B42] text-center items-center justify-between flex px-6 max-sm:flex-col max-sm:justify-start">
                <div className="flex max-sm:flex-col max-sm:items-center">
                    <div className="text-white items-center  p-2.5 gap-[5px] flex">
                        <FontAwesomeIcon icon={faPhone} size="sm" />
                        <h6 className="text-sm font-bold leading-normal tracking-tight">{phone}</h6>
                    </div>
                    <div className="text-white items-center  p-2.5 gap-[5px] flex">
                        <FontAwesomeIcon icon={faEnvelope} size="sm" />
                        <h6 className="text-sm font-bold leading-normal tracking-tight">{mail}</h6>
                    </div>
                </div>
                <div className="p-2.5">
                    <h6 className="text-white text-sm font-bold leading-normal tracking-tight">{offerMsg}</h6>
                </div>
                <div className="text-white items-center justify-start p-2.5 gap-2.5 flex">
                    <h6 className="text-sm font-bold leading-normal tracking-tight">Follow Us :</h6>
                    <div className="items-center justify-start gap-1 flex flex-wrap">
                        <FontAwesomeIcon icon={faInstagram} size="sm" className="p-1" />
                        <FontAwesomeIcon icon={faYoutube} size="sm" className="p-1" />
                        <FontAwesomeIcon icon={faFacebook} size="sm" className="p-1" />
                        <FontAwesomeIcon icon={faTwitter} size="sm" className="p-1" />
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto flex justify-between items-center max-sm:flex-col max-sm:gap-4">
                <header className="flex justify-between items-center max-sm:w-full">
                    <Link to="/"><h3 className="text-2xl max-sm:text-2xl text-slate-800 font-bold leading-loose tracking-tight cursor-pointer">{companyName}</h3></Link>
                    <FontAwesomeIcon icon={faBars} size='lg' className="hidden max-sm:block" />
                </header>
                <nav className="justify-start items-start gap-4 flex max-sm:flex-col z-10">
                    {[
                        ['Home', '/'],
                        ['Shop', '/shopping'],
                        ['About', '/about'],
                        ['Contact', '/contact'],
                        ['Team', '/team'],
                    ].map(([title, url], idx) => (
                        <div className="flex items-center justify-center" key={idx}>
                            {title == "Shop" ?
                                <div className="dropdown dropdown-hover">
                                    <label
                                        tabIndex={0}
                                        className="text-neutral-500 font-bold text-sm leading-normal tracking-tigh max-sm:text-3xl max-sm:font-normal hover:text-slate-900">
                                        <Link to="/shopping">Shop</Link>
                                        <FontAwesomeIcon icon={faAngleDown} className="text-neutral-500 font-bold text-sm pl-4" />
                                    </label>
                                    <div tabIndex={0} className="dropdown-content z-[1] menu ">
                                        <div className=" p-2 shadow bg-white flex rounded-box gap-4 divide-x-[12px]">
                                            <ul>
                                                <li className="font-bold text-gray-800"><Link to="/shopping">Women</Link></li>
                                                {womanCategories.map((category, idx) => {
                                                    return (
                                                        <li key={idx}>
                                                            <Link to={`/shopping/kadin/${category.code.slice(2)}${search}`} className="font-semibold text-gray-500">{category.title}</Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                            <ul>
                                                <li className="font-bold text-gray-800"><Link to="/shopping">Men</Link></li>
                                                {manCategories.map((category, idx) => {
                                                    return (
                                                        <li key={idx}>
                                                            <Link to={`/shopping/erkek/${category.code.slice(2)}${search}`} className="font-semibold text-gray-500">{category.title}</Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                :
                                <Link to={url} key={idx} className=" text-neutral-500 font-bold text-sm leading-normal tracking-tigh max-sm:text-3xl max-sm:font-normal hover:text-slate-900">{title}</Link>
                            }
                        </div>
                    ))}
                </nav>
                <div className=" text-sky-500 items-center flex gap-10 max-sm:flex-col max-sm:gap-0">
                    <div className="items-center flex gap-1">
                        <div className=" font-bold leading-normal text-sm tracking-tight max-sm:text-2xl max-sm:font-normal z-10">
                            {Object.keys(user).length > 1 ? (
                                <div className="flex items-center gap-3 cursor-pointer">
                                    <img
                                        src={`https://www.gravatar.com/avatar/${MD5(
                                            user.email
                                        )}?s=24`}
                                        className="border-2 border-solid border-secondary-content rounded-[50%]"
                                    />
                                    <div className="dropdown">
                                        <div tabIndex={0} role="button" className=" m-1 bg-white border-none">{user.name}</div>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-32">
                                            <li><div onClick={() => handleLogOut()}>Log out</div></li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={faUser} size="sm" className="" />
                                    <Link to="/login">Login</Link> / <Link to="/signup">Register</Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="items-center flex max-sm:flex-col max-sm:text-2xl ">
                        <FontAwesomeIcon icon={faSearch} size="sm" className="p-4 " />
                        <div className="dropdown dropdown-hover">
                            <label tabIndex={0} className="flex gap-1 items-center">
                                <Link to="/cart">
                                    <FontAwesomeIcon icon={faCartShopping} size="sm" className="pr-1 " />
                                </Link>
                                <span className="text-sm font-semibold">{cartProductCount}</span>
                            </label>
                            <div
                                tabIndex={0}
                                className="dropdown-content min-w-[20rem] z-[30] right-[1px] menu p-4 shadow-xl bg-white rounded-box "
                            >
                                <ul className="w-fit gap-1 flex flex-col py-2 ">
                                    <h2 className="text-slate-700 font-semibold mb-2">{`My Cart (${cartProductCount} Products)`}</h2>
                                    {cart.map((item, index) => {
                                        const { product, count } = item;

                                        return (
                                            <li key={index} className="border rounded shadow-md " onClick={() => history.push(productURL(product.name,product.id,product.category_id))}>
                                                <div className="flex gap-4 justify-between ">
                                                    <div className="flex gap-4 h-fit my-1" >
                                                        <img
                                                            src={product.images[0].url}
                                                            className="h-16 object-cover "
                                                        />
                                                        <div className="flex flex-col justify-center text-slate-700 ">
                                                            <h3 className=" font-semibold ">{product.name}</h3>
                                                            <p className="font-normal text-xs text-slate-500">Amount: {count}</p>
                                                            <p className="font-semibold ">
                                                                {`$${product.price * count}`}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <FontAwesomeIcon icon={faTrash} className=" text-neutral hover:text-error cursor-pointer"
                                                        onClick={() => {
                                                            dispatch(removeFromCart(product.id));
                                                        }} />
                                                </div>
                                            </li>
                                        );
                                    })}
                                    {cart.length ? (
                                        <div className="flex gap-2 justify-between">
                                            <Link to="/cart">
                                                <button className="ring-1 bg-[#0ea5e9] ring-slate-100 text-white font-semibold rounded-md py-2 px-4">
                                                    Go to Cart
                                                </button>
                                            </Link>
                                            <button
                                                className="ring-1 bg-[#0ea5e9] ring-slate-100 text-white font-semibold rounded-md py-2 px-4"
                                                onClick={() => {
                                                    history.push("/order");
                                                }}
                                            >
                                                Confirm Order
                                            </button>
                                        </div>
                                    ) : (
                                        <p className="pt-3 text-error font-semibold">
                                            Your cart is empty.
                                        </p>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className=" flex items-center p-4">
                            <FontAwesomeIcon icon={faHeart} size="sm" className="pr-1" />
                            <div className="font-normal leading-none text-sm tracking-tight">1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}