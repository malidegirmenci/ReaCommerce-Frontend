import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function BestSellerProducts() {
    const bestSellerProducts = useSelector((state) => state.products.productList);
    const productCards = bestSellerProducts.sort((a, b) => b.sell_count - a.sell_count).slice(0, 8).map((item, index) => {
        return <ProductCard data={item} key={index} className="w-[25%]" />
    })
    return (
        <div className="flex flex-wrap justify-center items-center gap-7 max-sm:flex-col">
            {productCards}
        </div>
    )
}