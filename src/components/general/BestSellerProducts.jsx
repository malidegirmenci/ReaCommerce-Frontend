import { data } from "../../data/data"
import ProductCard from "./ProductCard";

export default function BestSellerProducts() {
    const { bestSellerProducts } = data.home;
    const productCards = bestSellerProducts.map((item, index) => {
        return <ProductCard data={item} key={index} className="w-[25%]" />
    })
    return (
        <div className="flex flex-wrap justify-center items-center gap-7 max-sm:flex-col">
            {productCards}
        </div>
    )
}