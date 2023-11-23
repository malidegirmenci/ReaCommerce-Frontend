import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faUser, faSearch, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { data } from "../data/data";
export default function Header() {
    const {phone,mail,offerMsg, companyName} = data.header;
    return (
        <div>
            <div className="bg-[#252B42] text-center items-center justify-between gap-5 flex-wrap flex px-6">
                <div className="flex flex-wrap">
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
            <div className="flex justify-between items-center flex-wrap px-10">
                <header>
                    <h3 className="text-2xl text-slate-800 font-bold leading-loose tracking-tight">{companyName}</h3>
                </header>
                <nav className="justify-start items-start gap-4 flex ">
                    {[
                        ['Home', '/'],
                        ['Shop', '/shop'],
                        ['About', '/about'],
                        ['Blog', '/blog'],
                        ['Contact', '/contact'],
                        ['Pages', '/pages']
                    ].map(([title, url], idx) => (
                        <a href={url} key={idx} className=" text-neutral-500 font-bold text-sm leading-normal tracking-tigh hover:text-slate-900">{title}</a>
                    ))}
                </nav>
                <div className=" text-sky-500 items-center flex gap-10">
                    <div className="items-center flex ">
                        <FontAwesomeIcon icon={faUser} size="sm" className="" />
                        <div className=" font-bold leading-normal text-sm tracking-tight ">Login / Register</div>
                    </div>
                    <div className="items-center flex">
                        <FontAwesomeIcon icon={faSearch} size="sm" className="p-4" />
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