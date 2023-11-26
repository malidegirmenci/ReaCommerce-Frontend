import { data } from "../data/data"
export default function About() {
    const { aboutUsBg } = data.about
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-center gap-10 ">
                <div className="basis-1/3 flex flex-col gap-9 items-end justify-center">
                    <h5 className="text-slate-800 text-base font-bold leading-normal tracking-tight">ABOUT COMPANY</h5>
                    <h1 className=" text-slate-800 text-[58px] font-bold leading-[80px] tracking-tight">ABOUT US</h1>
                    <h4 className=" w-[60%] text-neutral-500 text-xl font-normal leading-[30px] tracking-tight">We know how large objects will act, but things on a small scale</h4>
                    <button className="px-10 py-[15px] bg-sky-500 rounded-[5px] text-white text-sm font-bold leading-snug tracking-tight">Get Quote Now</button>
                </div>
                <div className="basis-1/2">
                    <div className="relative flex-col justify-center items-center inline-flex">
                        <img className="w-full h-full z-1" src={aboutUsBg} />
                        <div className="w-[50%] h-[75%] absolute bg-rose-100 rounded-full" />
                        <div className="w-[2%] h-[3%] absolute left-[20%] bottom-[20%]  bg-violet-400 rounded-full" />
                        <div className="w-[10%] h-[15%] absolute left-[15%] top-[10%] bg-rose-100 rounded-full" />
                        <div className="w-[2%] h-[3%] absolute right-[20%] top-[20%]  bg-violet-400 rounded-full" />
                        <div className="w-[5%] h-[7.5%] absolute right-[15%] top-[50%] bg-rose-100 rounded-full" />
                    </div>
                </div>
            </div>
            <div className="flex items-center w-[60%] mx-auto gap-9">
                <div className="flex flex-col w-[50%] gap-6">
                    <p className="text-red-500 text-sm font-normal leading-tight tracking-tight">Problems trying</p>
                    <h2 className="text-slate-800 text-2xl font-bold  tracking-tight">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h2>
                </div>
                <div>
                    <p className="text-neutral-500 w-[80%] text-sm font-normal leading-tight tracking-tight">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>
        </div>
    )

}