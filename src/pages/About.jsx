import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { data } from "../data/data"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { faAws, faFacebook, faHooli, faInstagram, faLyft, faPiedPiperHat, faRedditAlien, faStripe, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useEffect } from "react"

export default function About() {
    const { aboutUsBg, statics, videoBg, workWithUs } = data.about
    const ourTeamFirstThree = data.about.employees.slice(0, 3).map((item, index) => {
        return (
            <div className="flex flex-col items-center w-[33%] ring-1 ring-slate-400 rounded shadow-lg max-sm:w-full" key={index}>
                <img src={item.src} className="w-full h-full rounded-t" />
                <div className="flex flex-col gap-2 text-center py-3">
                    <h5 className="text-slate-800 text-base font-bold leading-normal tracking-tight">{item.fullname}</h5>
                    <h6 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">{item.department}</h6>
                    <div className="flex gap-3 items-center text-[#23A6F0]">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </div>
                </div>
            </div>
        )
    })
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="flex flex-col mx-auto gap-20">
            <div className="flex items-center justify-between gap-10 w-[80%] mx-auto max-sm:flex-col max-sm:w-full">
                <div className=" flex flex-col gap-4 items-start justify-center max-sm:text-center max-sm:items-center">
                    <h5 className="text-slate-800 text-base font-bold leading-normal tracking-tight">ABOUT COMPANY</h5>
                    <h1 className=" text-slate-800 text-[58px] font-bold leading-[80px] tracking-tight">ABOUT US</h1>
                    <h4 className=" w-[60%] text-neutral-500 text-xl font-normal leading-[30px] tracking-tight">We know how large objects will act, but things on a small scale</h4>
                    <button className="px-10 py-[15px] bg-sky-500 rounded-[5px] text-white text-sm font-bold leading-snug tracking-tight">Get Quote Now</button>
                </div>
                <div className=" w-3/5 flex justify-end max-sm:w-full">
                    <div className="relative flex-col justify-center items-center inline-flex">
                        <img className="w-full z-1" src={aboutUsBg} />
                        <div className="w-[50%] h-[75%] absolute bg-rose-100 rounded-full" />
                        <div className="w-[2%] h-[3%] absolute left-[20%] bottom-[20%]  bg-violet-400 rounded-full" />
                        <div className="w-[10%] h-[15%] absolute left-[15%] top-[10%] bg-rose-100 rounded-full" />
                        <div className="w-[2%] h-[3%] absolute right-[20%] top-[20%]  bg-violet-400 rounded-full" />
                        <div className="w-[5%] h-[7.5%] absolute right-[15%] top-[50%] bg-rose-100 rounded-full" />
                    </div>
                </div>
            </div>
            <div className="flex items-center w-[75%] mx-auto gap-20 max-sm:flex-col max-sm:text-center">
                <div className="flex flex-col gap-6">
                    <p className="text-red-500 text-sm max-sm:text-lg font-normal leading-tight tracking-tight">Problems trying</p>
                    <h2 className="text-slate-800 text-2xl max-sm:text-4xl font-bold tracking-tight">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h2>
                </div>
                <p className="text-neutral-500 w-[70%] text-sm  max-sm:text-lg max-sm:text-justify font-normal leading-tight tracking-tight max-sm:w-full">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="flex w-[85%] mx-auto justify-between max-sm:flex-col max-sm:items-center max-sm:gap-12 ">
                <div className="flex flex-col w-1/4 gap-1 items-center max-sm:w-full">
                    <p className=" text-slate-800 text-[58px] font-bold leading-[80px] tracking-tight">{statics.customers}K</p>
                    <p className="text-center text-neutral-500 text-base font-bold leading-normal tracking-tight ">Happy Customers</p>
                </div>
                <div className="flex flex-col w-1/4 gap-1 items-center max-sm:w-full">
                    <p className=" text-slate-800 text-[58px] font-bold leading-[80px] tracking-tight">{statics.visitors}K</p>
                    <p className="text-center text-neutral-500 text-base font-bold leading-normal tracking-tight ">Montly Visitors</p>
                </div>
                <div className="flex flex-col w-1/4 gap-1 items-center max-sm:w-full">
                    <p className=" text-slate-800 text-[58px] font-bold leading-[80px] tracking-tight">{statics.countries}</p>
                    <p className="text-center text-neutral-500 text-base font-bold leading-normal tracking-tight ">Countries Worldwide</p>
                </div>
                <div className="flex flex-col w-1/4 gap-1 items-center max-sm:w-full">
                    <p className=" text-slate-800 text-[58px] font-bold leading-[80px] tracking-tight">{statics.partners}</p>
                    <p className="text-center text-neutral-500 text-base font-bold leading-normal tracking-tight ">Top Partners</p>
                </div>
            </div>
            <div className="w-[75%] relative flex items-center justify-center rounded-lg mx-auto ">
                <img className="w-full h-[550px] mx-auto rounded-lg shadow-xl max-sm:h-[300px]" src={videoBg} />
                <div className="w-full h-full absolute bg-black opacity-50 rounded-lg shadow-xl" />
                <div className="flex items-center justify-center w-16 h-16 bg-sky-500 rounded-full absolute shadow-xl">
                    <FontAwesomeIcon icon={faPlay} size="xl" className="text-white" />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col items-center justify-center gap-6 max-sm:w-[80%] max-sm:mx-auto">
                    <h2 className="text-slate-800 text-[40px] max-sm:text-[50px] font-bold leading-[50px] tracking-tight"> Meet Our Team</h2>
                    <p className="text-center text-neutral-500 text-sm max-sm:text-lg font-normal leading-loose tracking-tight"> Problems trying to resolve the conflict between<br /> the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="flex gap-5 w-[80%] mx-auto max-sm:flex-col">
                    {ourTeamFirstThree}
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col items-center justify-center gap-6">
                    <h2 className="text-slate-800 text-[40px] font-bold leading-[50px] tracking-tight max-sm:text-6xl max-sm:text-center"> Big Companies Are Here</h2>
                    <p className="text-center text-neutral-500  text-sm  font-normal leading-loose tracking-tight max-sm:text-2xl max-sm:text-center"> Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics  </p>
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
            <div className="flex">
                <div className="w-2/3 bg-[#2a7cc7] flex justify-center rounded-l-md max-sm:w-full max-sm:py-12 max-sm:rounded-none ">
                    <div className=" w-1/2 flex flex-col items-start my-auto mx-auto gap-6 max-sm:text-center max-sm:items-center">
                        <h5 className="text-white text-base font-bold leading-normal tracking-tight">WORK WITH US</h5>
                        <h2 className="text-white text-[40px] font-bold leading-[50px] tracking-tight">Now Let's grow Yours</h2>
                        <p className="text-white text-sm font-normal leading-tight tracking-tight">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>
                        <button className="text-neutral-50 ring-1 px-7 py-2.5 ring-slate-200 rounded-md text-sm font-bold leading-snug tracking-tight">Contact Us</button>
                    </div>
                </div>
                <div className="w-1/3 rounded-r-md max-sm:hidden">
                    <img src={workWithUs} className="w-full h-full rounded-r-md max-sm:hidden" />
                </div>
            </div>
        </div>
    )

}