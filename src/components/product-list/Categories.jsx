import { data } from "../../data/data"
import CategoryCard from "./CategoryCard";

export default function Categories(){
    const categories = data.productList.categories.map(item => {
        return <CategoryCard data={item} key={item.key} />
    })
    return(
        <div className="flex w-full object-center">
            {categories}
        </div>
    );
}