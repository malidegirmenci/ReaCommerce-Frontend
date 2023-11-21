import Slider from '../components/home/Slider';
import { data } from '../data/data';
import RecomendedProducts from '../components/home/RecomendedProducts';
import BestSellerProducts from '../components/home/BestSellerProducts';

export default function Home() {
    return (
        <>
            <div>
                <Slider data={data.home.hero} />
            </div>
            <div className='flex flex-col justify-center w-full items-center gap-20'>
                <RecomendedProducts />
                <BestSellerProducts />
            </div>
        </>
    )
}