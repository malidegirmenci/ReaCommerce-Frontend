import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faUser, faSearch, faCartShopping, faHeart, faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { data } from "../data/data";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import MD5 from "crypto-js/md5";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
export default function Header() {
    const { phone, mail, offerMsg, companyName } = data.header;
    const user = useSelector((store) => store.user.response);
    const categories = useSelector((store) => store.global.categories);
    const { pathname, search } = useLocation();
    const womanCategories = categories.filter((category) => category.gender === 'k');
    console.log("woman", womanCategories)
    const manCategories = categories.filter((category) => category.gender === 'e');
    console.log("man", manCategories)
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
                        ['Pages', '/pages']
                    ].map(([title, url], idx) => (
                        <>
                            {title == "Shop" ?
                                <div className="dropdown dropdown-hover">
                                    <label
                                        tabIndex={0}
                                        className="text-neutral-500 font-bold text-sm leading-normal tracking-tigh max-sm:text-3xl max-sm:font-normal hover:text-slate-900">
                                        Shop
                                        <FontAwesomeIcon icon={faAngleDown} className="text-neutral-500 font-bold text-sm pl-4" />
                                    </label>
                                    <div tabIndex={0} className="dropdown-content z-[1] menu">
                                        <div className=" p-2 shadow bg-white flex rounded-box  gap-4">
                                            <ul>
                                                <li className="font-bold text-gray-800"><a>Women</a></li>
                                                <hr className="border" />
                                                {womanCategories.map((category, idx) => {
                                                    return (
                                                        <li key={idx}>
                                                            <Link to={`/shopping/kadin/${category.code.slice(2)}${search}`}>{category.title}</Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                            <hr className="my-4 border-t-2 border-gray-300 bg-slate-400" />
                                            <ul>
                                                <li className="font-bold text-gray-800"><a>Men</a></li>
                                                <hr className="border" />
                                                {manCategories.map((category, idx) => {
                                                    return (
                                                        <li key={idx}>
                                                            <Link to={`/shopping/erkek/${category.code.slice(2)}${search}`}>{category.title}</Link>
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
                        </>
                    ))}
                </nav>
                <div className=" text-sky-500 items-center flex gap-10 max-sm:flex-col max-sm:gap-0">
                    <div className="items-center flex gap-1">
                        <div className=" font-bold leading-normal text-sm tracking-tight max-sm:text-2xl max-sm:font-normal z-10">
                            {Object.keys(user).length ? (
                                <div className="flex items-center gap-3">
                                    <img
                                        src={`https://www.gravatar.com/avatar/${MD5(
                                            user.email
                                        )}?s=24`}
                                        className="border-2 border-solid border-secondary-content rounded-[50%]"
                                    />
                                    <p>{user.name}</p>
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
                        <div className=" flex items-center p-4">
                            <FontAwesomeIcon icon={faCartShopping} size="sm" className="pr-1 " />
                            <div className=" font-normal leading-none text-sm tracking-tight ">1</div>
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