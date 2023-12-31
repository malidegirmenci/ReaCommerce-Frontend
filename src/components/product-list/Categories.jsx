import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";
export default function Categories() {
    const categories = useSelector((store) => store.global.categories)
    const categoriesField = categories.sort((a, b) => b.rating - a.rating).slice(0, 5).map(item => {
        return <CategoryCard data={item} key={item.key} />
    })
    return (
        <div className="flex w-full object-center max-sm:flex-col max-sm:gap-4">
            {categoriesField}
        </div>
    );
}