export default function PopularProduct(props) {
    const { h1, h4, h5, src } = props.data;
    return (
        <div className="w-full flex gap-8">
            <div className="w-[60%]">
                <img src={src} alt={h1} />
            </div>
            <div className="w-[40%] flex flex-col gap-8 items-start justify-center">
                <h5 className="text-stone-300 text-base font-bold leading-normal tracking-tight">{h5}</h5>
                <h1 className="text-slate-800 text-[40px] font-bold  leading-[50px] tracking-tight w-[70%]">{h1}</h1>
                <h4 className="text-neutral-500 text-xl font-normal  leading-[30px] tracking-tight w-[50%]">{h4}</h4>
                <div className="w-full flex gap-3">
                    <button className='bg-green-500 py-2 w-[40%] rounded text-white text-2xl font-bold leading-loose tracking-tight'>BUY NOW</button>
                    <button className='py-2 w-[40%] rounded text-green-500 text-2xl font-bold leading-loose tracking-tight border-2 border-green-500'>READ MORE</button>
                </div>
            </div>
        </div>
    )
}