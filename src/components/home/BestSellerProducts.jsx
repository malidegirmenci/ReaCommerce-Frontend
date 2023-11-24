import { data } from "../../data/data"
import ProductCard from "../general/ProductCard";

export default function BestSellerProducts() {
    const { bestSellerProducts } = data.home;
    const productCards = bestSellerProducts.map((item, index) => {
        return <ProductCard data={item} key={index} className="w-[25%]"/>
    })
    return (
        <div className="w-5/6 gap-12 flex-col inline-flex">
            <div className='text-center flex flex-col gap-2'>
                <h2 className="text-neutral-500 text-xl font-normal leading-7 tracking-tight">Featured Products</h2>
                <h2 className="text-slate-800 text-2xl font-bold leading-loose tracking-tight">BESTSELLER PRODUCTS</h2>
                <p className="text-neutral-500 text-sm font-normal leading-tight tracking-tight">Problems trying to resolve the conflict between </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-7">
                {productCards}
            </div>
        </div>
    )
}