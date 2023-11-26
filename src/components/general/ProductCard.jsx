export default function ProductCard(props) {
    const { name, category, price, discountedPrice, colors, img } = props.data;
    return (
        <div className="flex flex-col text-center w-[20%] shadow-md rounded-b-md cursor-pointer ease-in duration-300 hover:scale-105 hover:ease-out hover:duration-300">
            <div className="h-4/5 ">
                <img src={img} className="max-w-full h-full object-cover rounded-t-md  " />
            </div>
            <div className="p-6 flex-col gap-2">
                <h5 className="text-slate-800 text-base font-bold leading-normal tracking-tight">{name}</h5>
                <h5 className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">{category}</h5>
                <div className="flex gap-1 justify-center">
                    <h5 className="text-stone-300 text-base font-bold leading-normal tracking-tight">${price}</h5>
                    <h5 className="text-teal-700 text-base font-bold leading-normal tracking-tight">${discountedPrice}</h5>
                </div>
                <div className="w-20 h-4 justify-start items-center gap-1.5 inline-flex">
                    <div className="w-4 h-4 bg-sky-500 rounded-full" />
                    <div className="w-4 h-4 bg-teal-700 rounded-full" />
                    <div className="w-4 h-4 bg-orange-400 rounded-full" />
                    <div className="w-4 h-4 bg-slate-800 rounded-full" />
                </div>
            </div>
        </div>
    )
}