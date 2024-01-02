import { faArrowRight, faBorderAll, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Categories from "../components/product-list/Categories";
import Products from "../components/product-list/Products";
import * as fetchTypes from '../store/actions/fetchStatesTypes';
import { faAws, faHooli, faLyft, faPiedPiperHat, faRedditAlien, faStripe } from "@fortawesome/free-brands-svg-icons";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import useQueryParams from "../hooks/useQueryParams";
import { fetchProducts } from "../store/actions/productAction/productAction";
import { ClimbingBoxLoader } from "react-spinners";
export default function ProductList() {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const categories = useSelector((store) => store.global.categories);
    const [queryParams, setQueryParams] = useQueryParams({
        filter: "",
        sort: "",
    });
    const onSubmit = data => {
        setQueryParams(data)
    };

    const { gender, category } = useParams();
    let categoryId;
    let genderCode;
    if (gender, category) {
        genderCode = gender[0]
        categoryId = categories.find((c) => c.code == `${genderCode}:${category}`)?.id
    }

    const products = useSelector((store) => store.products);
    const { totalProductCount, productList, fetchState } = products;

    useEffect(() => {
        dispatch(
            fetchProducts({
                ...queryParams,
                limit: 24,
                offset: 0,
                category: categoryId,
            })
        )
    }, [queryParams, category])

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
            <div className="flex justify-between items-center py-6 px-3 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-6">
                <p className="text-neutral-500 text-sm font-semibold leading-normal tracking-tight">{`Showing ${productList.length} of all ${totalProductCount} results`}</p>
                <div className="flex items-center gap-3">
                    <p className="text-neutral-500 text-sm font-bold leading-normal tracking-tight">Views:</p>
                    <FontAwesomeIcon icon={faBorderAll} className="p-2 border rounded cursor-pointer" />
                    <FontAwesomeIcon icon={faListCheck} className="p-2 border rounded cursor-pointer" />
                </div>
                <div className="flex items-center gap-3">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-3">
                        <input type="search" placeholder="Search" {...register("filter", {})} className="bg-white input input-bordered w-full max-w-xs text-neutral-500 text-sm font-semibold leading-normal tracking-tight" />
                        <select {...register("sort")} className="select w-full max-w-xs bg-white text-neutral-500 text-sm font-semibold leading-normal tracking-tight">
                            <option className="text-neutral-500 text-sm font-semibold leading-normal tracking-tight" value="">Sort By</option>
                            <option className="text-neutral-500 text-sm font-semibold leading-normal tracking-tight" value="price:desc">Highest Price</option>
                            <option className="text-neutral-500 text-sm font-semibold leading-normal tracking-tight" value="price:asc">Lowest Price</option>
                            <option className="text-neutral-500 text-sm font-semibold leading-normal tracking-tight" value="rating:asc">Lowest Rating</option>
                            <option className="text-neutral-500 text-sm font-semibold leading-normal tracking-tight" value="rating:desc">Highest Rating</option>
                        </select>
                        <button type="submit" className="bg-[#23A6F0] px-4 py-2 text-white text-sm font-bold leading-normal tracking-tight rounded"> Filter</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col items-center mx-auto">
                <Products />
                {productList.length || <p className="text-neutral-500 text-lg font-semibold leading-normal tracking-tight">There are no more products in this category</p>}
                {fetchState === fetchTypes.FETCHING && <ClimbingBoxLoader color="#23a6f0" />}
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