import { useSelector } from "react-redux";

import ProductCard from "../general/ProductCard";
export default function Products() {
    const products = useSelector((store) => store.products.productList)
    const productCards = products.map((item, index) => {
        return <ProductCard data={item} key={index} />
    })
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {productCards}
        </div>
    )
}