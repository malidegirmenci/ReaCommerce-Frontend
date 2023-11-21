import Slider from '../components/Slider';
import { data } from '../data/data';
import RecomendedProducts from '../components/home/RecomendedProducts';

export default function Home() {
    return (
        <>
            <Slider data={data.home.hero}/>
            <RecomendedProducts />
        </>
    )
}