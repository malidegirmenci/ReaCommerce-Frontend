import { faArrowRight, faBorderAll, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Categories from "../components/product-list/Categories";
import Dropdown from "../components/micro/Dropdown";
import PaginationCmp from "../components/micro/Pagination";
import Products from "../components/product-list/Products";

import { faAws, faHooli, faLyft, faPiedPiperHat, faRedditAlien, faStripe } from "@fortawesome/free-brands-svg-icons";

import {  useSelector } from "react-redux";

export default function ProductList() {

    const filters = [
        { title: "Highest Price", url: "/#" },
        { title: "Lowest Price", url: "/#" },
        { title: "Highest Rating", url: "/#" },
        { title: "Lowest Rating", url: "/#" },
    ]

    const products = useSelector((store) => store.products);
    const { totalProductCount, productList } = products;

    return (
        <div className="w-[80%] mx-auto">
            <div className="flex justify-between gap-7 items-center py-6 max-sm:flex-col">
                <h2 className="text-slate-800 text-2xl font-bold leading-loose tracking-tight">Shop</h2>
                <div className="flex items-center justify-center gap-2 py-3">
                    <Link to="/home" className="text-slate-800 text-sm font-bold leading-normal tracking-tight">Home</Link>
                    <FontAwesomeIcon icon={faArrowRight} size="lg" className="p-1 text-gray-500" />
                    <h6 className="text-stone-300 text-sm font-bold leading-normal tracking-tight">Shop</h6>
                </div>
            </div>
            <div>
                <Categories />
            </div>
            <div className="flex justify-between py-6 px-3 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-6">
                <p>{`Showing ${productList.length} of all ${totalProductCount} results`}</p>
                <div className="flex items-center gap-3">
                    <p className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">Views:</p>
                    <FontAwesomeIcon icon={faBorderAll} className="p-2 border rounded cursor-pointer" />
                    <FontAwesomeIcon icon={faListCheck} className="p-2 border rounded cursor-pointer" />
                </div>
                <div className="flex items-center gap-3">
                    <div className="border rounded">
                        <Dropdown data={filters} />
                    </div>
                    <button className="bg-[#23A6F0] px-4 py-2 text-white text-sm font-bold leading-normal tracking-tight rounded">Filter</button>
                </div>
            </div>
            <div className="flex flex-col items-center mx-auto">
                <Products />
                <div className="p-12">
                    <PaginationCmp />
                </div>
            </div>
            <hr className="border border-neutral-200" />
            <div className="flex justify-between w-[90%] mx-auto py-10 max-sm:gap-y-4 max-sm:flex-col">
                <FontAwesomeIcon icon={faHooli} size="xl" className="p-1 text-gray-500 text-9xl" />
                <FontAwesomeIcon icon={faLyft} size="xl" className="p-1 text-gray-500  text-9xl" />
                <FontAwesomeIcon icon={faPiedPiperHat} size="xl" className="p-1 text-gray-500  text-9xl" />
                <FontAwesomeIcon icon={faStripe} size="xl" className="p-1 text-gray-500 text-9xl" />
                <FontAwesomeIcon icon={faAws} size="xl" className="p-1 text-gray-500 text-9xl" />
                <FontAwesomeIcon icon={faRedditAlien} size="xl" className="p-1 text-gray-500  text-9xl" />
            </div>
            <hr className="border border-neutral-200" />
        </div>
    )
}