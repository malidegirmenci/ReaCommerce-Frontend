import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faUser, faSearch, faCartShopping, faHeart, faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { data } from "../data/data";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Header() {
    const {phone,mail,offerMsg, companyName} = data.header;
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
                    <FontAwesomeIcon icon={faBars} size='lg' className="hidden max-sm:block"/>
                </header>
                <nav className="justify-start items-start gap-4 flex max-sm:flex-col z-10">
                    {[
                        ['Home', '/'],
                        ['Shop', '/shopping'],
                        ['About', '/about'],
                        ['Contact', '/contact'],
                        ['Team','/team'],
                        ['Pages', '/pages']
                    ].map(([title, url], idx) => (
                        <Link to={url} key={idx} className=" text-neutral-500 font-bold text-sm leading-normal tracking-tigh max-sm:text-3xl max-sm:font-normal hover:text-slate-900">{title}</Link>
                    ))}
                </nav>
                <div className=" text-sky-500 items-center flex gap-10 max-sm:flex-col max-sm:gap-0">
                    <div className="items-center flex gap-1">
                        <FontAwesomeIcon icon={faUser} size="sm" className="" />
                        <div className=" font-bold leading-normal text-sm tracking-tight max-sm:text-2xl max-sm:font-normal z-10">Login / <Link to="/signup">Register</Link></div>
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