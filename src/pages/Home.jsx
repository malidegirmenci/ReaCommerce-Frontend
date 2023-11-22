import { data } from '../data/data';

import HeroTop from '../components/home/HeroTop';
import HeroBot from '../components/home/HeroBot';
import RecomendedProducts from '../components/home/RecomendedProducts';
import BestSellerProducts from '../components/home/BestSellerProducts';
import PopularProduct from '../components/home/PopularProduct';

export default function Home() {
    return (
        <>
            <div>
                <HeroTop data={data.home.heroTop} />
            </div>
            <div className='flex flex-col justify-center w-full items-center gap-20'>
                <RecomendedProducts />
                <BestSellerProducts />
            </div>
            <div>
                <HeroBot data={data.home.heroBot}/>
            </div>
            <div>
                <PopularProduct data={data.home.popularProduct}/>
            </div>
        </>
    )
}