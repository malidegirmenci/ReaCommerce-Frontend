import { data } from '../data/data';

import HeroTop from '../components/home/HeroTop';
import HeroBot from '../components/home/HeroBot';
import RecomendedProducts from '../components/home/RecomendedProducts';
import BestSellerProducts from '../components/general/BestSellerProducts';
import PopularProduct from '../components/home/PopularProduct';
import FeaturedPosts from '../components/home/FeaturedPosts';

export default function Home() {
    return (
        <div className='max-sm:mx-auto'>
            <div>
                <HeroTop data={data.home.heroTop} />
            </div>
            <div className='flex flex-col justify-center w-full items-center gap-20 py-5'>
                <RecomendedProducts />
                <div className="w-5/6 gap-12 flex-col inline-flex">
                    <div className='text-center flex flex-col gap-2'>
                        <h2 className="text-neutral-500 text-xl font-normal leading-7 tracking-tight">Featured Products</h2>
                        <h2 className="text-slate-800 text-2xl font-bold leading-loose tracking-tight">BESTSELLER PRODUCTS</h2>
                        <p className="text-neutral-500 text-sm font-normal leading-tight tracking-tight">Problems trying to resolve the conflict between </p>
                    </div>
                    <BestSellerProducts />
                </div>
            </div>
            <div>
                <HeroBot data={data.home.heroBot} />
            </div>
            <div>
                <PopularProduct data={data.home.popularProduct} />
            </div>
            <div>
                <FeaturedPosts />
            </div>
        </div>
    )
}