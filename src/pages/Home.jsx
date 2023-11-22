import HeroTop from '../components/home/HeroTop';
import HeroBot from '../components/home/HeroBot';
import { data } from '../data/data';
import RecomendedProducts from '../components/home/RecomendedProducts';
import BestSellerProducts from '../components/home/BestSellerProducts';

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
        </>
    )
}