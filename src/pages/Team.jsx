import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Employees from "../components/about/Employees";
import { data } from "../data/data";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
export default function Team() {
    const { hero } = data.team;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="flex flex-col gap-12 justify-center py-12">
            <div className="flex flex-col items-center justify-center gap-4 max-sm:text-center ">
                <h5 className="text-base font-bold text-[#737373] tracking-widest">WHAT WE DO</h5>
                <h2 className="font-bold tracking-wider text-[58px]">Innovation tailored for you</h2>
                <div className="flex justify-center items-center gap-2">
                    <Link to="/home" className="text-slate-800 text-sm font-bold leading-normal tracking-tight">Home</Link>
                    <FontAwesomeIcon icon={faArrowRight} size="lg" className="p-1 text-gray-500" />
                    <h6 className="text-stone-300 text-sm font-bold leading-normal tracking-tight">Team</h6>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-2 justify-center max-sm:grid-cols-1 max-sm:gap-x-0 max-sm:gap-y-2 ">
                <div className="max-sm:w-full">
                    <img src={hero.headline} className="w-full h-[570px] object-cover" />
                </div>
                <div className="flex flex-wrap gap-[0.1rem] max-sm:w-full" >
                    {hero.others.map((item, index) => {
                        return (
                            <img key={index} src={item} className="w-[49.6%] h-[285px]  object-cover transform scale-x-[-1]" />
                        )
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-5 py-20">
                <div className="flex flex-col items-center justify-center gap-6 max-sm:w-[80%] max-sm:mx-auto">
                    <h2 className="text-slate-800 text-[40px] max-sm:text-[50px] font-bold leading-[50px] tracking-tight"> Meet Our Team</h2>
                </div>
                <Employees />
            </div>
            <div className="flex flex-col items-center justify-center gap-8 py-20 max-sm:text-center">
                <h2 className="text-4xl font-bold leading-tight tracking-wide">Start your 14 days free trial</h2>
                <p className="text-base font-normal text-[#737373] w-[25%] max-sm:w-full text-center">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.</p>
                <button className="bg-[#23A6F0] py-3 px-10 text-white font-bold text-base rounded-sm">Try it free now</button>
                <div className="flex gap-4 text-[#395185]">
                    <FontAwesomeIcon icon={faTwitter} size="2xl"/>
                    <FontAwesomeIcon icon={faFacebook} size="2xl"/>
                    <FontAwesomeIcon icon={faInstagram} size="2xl"/>
                    <FontAwesomeIcon icon={faLinkedin} size="2xl"/>
                </div>
            </div>
        </div>
    )
}