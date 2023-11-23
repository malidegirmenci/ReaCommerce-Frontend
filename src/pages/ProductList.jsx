import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Categories from "../components/product-list/Categories";

export default function ProductList() {
    
    return (
        <div className="w-[85%] mx-auto">
            <div className="flex justify-between gap-7 items-center py-6">
                <h2 className="text-slate-800 text-2xl font-bold leading-loose tracking-tight">Shop</h2>
                <div className="flex items-center justify-center gap-2 py-3">
                    <Link to="/home" className="text-slate-800 text-sm font-bold leading-normal tracking-tight">Home</Link>
                    <FontAwesomeIcon icon={faArrowRight} size="lg" className="p-1 text-gray-500" />
                    <h6 className="text-stone-300 text-sm font-bold leading-normal tracking-tight">Shop</h6>
                </div>
            </div> 
            <div>
                <Categories/>
            </div>
        </div>
    )
}