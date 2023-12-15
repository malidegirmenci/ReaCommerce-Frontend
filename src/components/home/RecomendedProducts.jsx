import { data } from '../../data/data';

import CategoryCard from './CategoryCard';
export default function RecomendedProducts() {
    const { men, women, accessories, kids } = data.home.categories
    return (
        <div className="w-3/4 gap-12 items-center flex-col inline-flex max-sm:w-full">
            <div className='text-center flex flex-col'>
                <h2 className="text-slate-800 text-2xl font-bold leading-loose tracking-tight">EDITOR&#39;S PICK</h2>
                <p className="text-neutral-500 text-sm font-normal leading-tight tracking-tight">Problems trying to resolve the conflict between </p>
            </div>
            <div className="flex gap-8 h-[500px] max-sm:flex-col max-sm:h-full">
                <div className='w-[50%] relative max-sm:w-full'>
                    <CategoryCard data={men}></CategoryCard>
                </div>
                <div className='w-[50%] flex gap-8 max-sm:w-full max-sm:flex-col'>
                    <div className='w-[50%] relative max-sm:w-full'>
                        <CategoryCard data={women}></CategoryCard>
                    </div>
                    <div className='w-[50%] flex flex-col gap-[2%] max-sm:w-full max-sm:gap-4'>
                        <div className='w-full h-[49%] relative max-sm:h-[270px]'>
                            <CategoryCard data={accessories}></CategoryCard>
                        </div>
                        <div className='w-full h-[49%] relative max-sm:h-[270px]'>
                            <CategoryCard data={kids}></CategoryCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}