import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    clearCart,
    removeFromCart,
    setCheckStatus,
    updateCartItemQuantity,
} from "../store/actions/shoppingCartAction/shoppingCartAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import Summary from "../components/cart/Summary";

function Cart() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { cart } = useSelector((store) => store.shoppingCart);
    const categories = useSelector((store) => store.global.categories);
    let productTotal = cart
        .reduce((sum, inCart) => {
            return inCart.checked
                ? sum + inCart.count * inCart.product.price.toFixed(2)
                : sum;
        }, 0)
        .toFixed(2);

    let productCount = cart.reduce((sum, inCart) => {
        return inCart.checked ? sum + inCart.count : sum;
    }, 0);
    const amountLimit = 10;
    const getProductURL = (productName, productId, categoryId,) => {
        const catCode = categories.find(
            (c) => c.id == categoryId
        )?.code;
        const nameSlug = productName.toLowerCase().replaceAll(" ", "-");
        const gender = catCode?.slice(0, 1) == 'k' ? 'kadin' : 'erkek'
        const category = catCode?.slice(2)
        const productURL = `/shopping/${gender}/${category}/${productId}/${nameSlug}`
        return productURL
    }
    return (
        <div className="border rounded">
            <div className=" w-[80%] flex flex-col gap-4 mx-auto py-4">
                <div className="px-4 flex justify-between">
                    <h2 className="text-slate-700 text-lg font-bold">{`My Cart (${productCount} Products)`}</h2>
                    <button
                        className="border flex items-center gap-2 p-2 cursor-pointer rounded hover:ring-1 hover:ring-slate-200 duration-300 hover:duration-300 ease-out  hover:ease-out"
                        onClick={() => {
                            Swal.fire({
                                title: "Are you sure?",
                                text: "The whole cart will be cleaned",
                                showCancelButton: true,
                                confirmButtonColor: "#0ea5e9",
                                cancelButtonColor: "#ff5861",
                                confirmButtonText: "Yes, clear"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    dispatch(clearCart());
                                    Swal.fire({
                                        title: "Empty Cart!",
                                        text: "Your cart has been cleaned.",
                                        icon: "success",
                                        confirmButtonColor: "#0ea5e9",
                                    });
                                }
                            });
                        }}
                    >
                        <FontAwesomeIcon icon={faTrash} className="text-neutral hover:text-error " />
                        <span className="font-semibold text-slate-500 text-sm">Clear Cart</span>
                    </button>
                </div>
                {productCount ? (
                    <div className="flex justify-between gap-4">
                        <div className="flex flex-col gap-2 w-[65%]">
                            {cart.map((item, index) => {
                                const { product, count } = item;
                                return (
                                    <div key={index} className="shadow-sm" >
                                        <div className="h-fit flex gap-4 justify-between items-center px-[5%] py-4 border border-solid border-slate-500 rounded-lg shadow-md">
                                            <input
                                                name={`${product.id}`}
                                                type="checkbox"
                                                defaultChecked={true}
                                                onChange={(e) => {
                                                    dispatch(setCheckStatus(product.id, e.target.checked));
                                                }}
                                            />
                                            <div className="flex items-center gap-4 w-1/2">
                                                <img
                                                    src={product.images[0].url}
                                                    className="h-24 object-cover rounded-sm hover:scale-150 hover:duration-100 duration-100 hover:ease-out ease-out"
                                                />
                                                <h4 className="cursor-pointer" onClick={() => history.push(getProductURL(product.name, product.id, product.category_id))}>{product.name}</h4>
                                            </div>
                                            <div className="flex justify-between w-1/2 items-center">
                                                <div className="flex border border-solid rounded-md border-slate-400 ">
                                                    <button
                                                        className="bg-slate-200 p-2 disabled:text-neutral text-lg font-bold"
                                                        disabled={parseInt(count) === 1}
                                                        onClick={() => {
                                                            dispatch(updateCartItemQuantity(product.id, false));
                                                        }}
                                                    >
                                                        -
                                                    </button>
                                                    <p className="p-2 text-md font-semibold">{count}</p>
                                                    <button
                                                        className="bg-slate-200 p-2 disabled:text-neutral text-lg font-bold"
                                                        disabled={parseInt(count) === amountLimit}
                                                        onClick={() => {
                                                            dispatch(updateCartItemQuantity(product.id, true));
                                                        }}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <p className="text-slate-700 text-center ">
                                                    ${(product.price * count).toFixed(2)}
                                                </p>
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                    className=" text-neutral hover:text-error cursor-pointer"
                                                    onClick={() => {
                                                        dispatch(removeFromCart(product.id));
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <Summary/>
                    </div>
                ) : (
                    <div className="px-4 text-error text-lg font-semibold">Your cart is empty.</div>
                )}
            </div>
        </div>
    );
}

export default Cart;
