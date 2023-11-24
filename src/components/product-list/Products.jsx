import { data } from "../../data/data"
import ProductCard from "../general/ProductCard";
export default function Products() {
    const { products } = data.productList;
    const productCards = products.map((item, index) => {
        return <ProductCard data={item} key={index} />
    })
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {productCards}
        </div>
    )
}