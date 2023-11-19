import { Images } from '../assets/Images';
export default function RecomendedProducts() {
    return (
        <div className="py-20 gap-12 items-center w-full flex-col inline-flex ">
            <div className='text-center flex flex-col'>
                <h2 className="text-slate-800 text-2xl font-bold leading-loose tracking-tight">EDITOR&#39;S PICK</h2>
                <p className="text-neutral-500 text-sm font-normal leading-tight tracking-tight">Problems trying to resolve the conflict between </p>
            </div>
            <div className="flex gap-8 ">
                <div className='w-[50%] h-[500px] relative'>
                    <img src={Images.recomendedProducts.men} className='w-full h-full object-cover ' />
                    <button className=' absolute bottom-[5%] left-[5%] w-44 text-slate-800 text-base font-bold leading-normal tracking-tight py-3 bg-white'>MEN</button>
                </div>
                <div className='w-[50%] flex gap-8 h-[500px]'>
                    <div className='w-[50%] relative'>
                        <img src={Images.recomendedProducts.women} className='w-full h-full object-cover' />
                        <button className=' absolute bottom-[5%] left-[5%] w-44 text-slate-800 text-base font-bold leading-normal tracking-tight py-3 bg-white'>WOMEN</button>
                    </div>
                    <div className='w-[50%] flex flex-col gap-[2%]'>
                        <div className='w-full h-[49%] relative'>
                            <img src={Images.recomendedProducts.accessories} className='w-full h-full object-cover' />
                            <button className=' absolute bottom-[5%] left-[5%] w-44 text-slate-800 text-base font-bold leading-normal tracking-tight py-3 bg-white'>ACCESSORIES</button>
                        </div>
                        <div className='w-full h-[49%] relative'>
                            <img src={Images.recomendedProducts.kids} className='w-full h-full object-cover ' />
                            <button className=' absolute bottom-[5%] left-[5%] w-44 text-slate-800 text-base font-bold leading-normal tracking-tight py-3 bg-white'>KIDS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}