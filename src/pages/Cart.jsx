import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import Summary from "../components/cart/Summary";
import { setCart } from "../store/actions/orderAction/orderAction";
import CouponArea from "../components/cart/CouponArea";
import {
    clearCart,
    fetchCart,
    removeCartItemFromDB,
    removeFromCart,
    setCheckStatus,
    updateCartItemIsCheckedToDB,
    updateCartItemQuantity,
    updateCartItemQuantityToDB,
} from "../store/actions/shoppingCartAction/shoppingCartAction";

export default function Cart() {
    const history = useHistory();
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.user.response.token);
    const { cart } = useSelector((store) => store.shoppingCart);
    const categories = useSelector((store) => store.global.categories);
    let productTotal = cart
        .reduce((sum, inCart) => {
            return inCart.isChecked
                ? sum + inCart.quantity * inCart.product.price.toFixed(2)
                : sum;
        }, 0)
        .toFixed(2);
    let productCount = cart.reduce((sum, inCart) => {
        return inCart.isChecked ? sum + inCart.quantity : sum;
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
    useEffect(()=> {
        const orderCart = cart.filter((item)=> item.isChecked);
        dispatch(setCart(orderCart));
    },[cart])
    useEffect(()=>{
        fetchCart(userToken, history, dispatch)
    },[])
    return (
        <div className="border rounded">
            <div className=" w-[90%] flex flex-col gap-4 mx-auto py-4">
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
                {cart.length >= 1 ? (
                    <div className="flex justify-between gap-4">
                        <div className="flex flex-col gap-2 w-2/3">
                            {cart.map((item, index) => {
                                const { id, product, quantity, isChecked } = item;
                                return (
                                    <div key={index} className="shadow-sm" >
                                        <div className="h-fit flex gap-4 justify-between items-center px-[5%] py-4 border border-solid border-slate-500 rounded-lg shadow-md">
                                            <input
                                                name={`${product.id}`}
                                                type="checkbox"
                                                defaultChecked={isChecked}
                                                onChange={(e) => {
                                                    updateCartItemIsCheckedToDB(id, e.target.checked);
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
                                                        disabled={parseInt(quantity) === 1}
                                                        onClick={() => {
                                                            updateCartItemQuantityToDB(id, false);
                                                            dispatch(updateCartItemQuantity(product.id, false));
                                                        }}
                                                    >
                                                        -
                                                    </button>
                                                    <p className="p-2 text-md font-semibold">{quantity}</p>
                                                    <button
                                                        className="bg-slate-200 p-2 disabled:text-neutral text-lg font-bold"
                                                        disabled={parseInt(quantity) === amountLimit}
                                                        onClick={() => {
                                                            updateCartItemQuantityToDB(id, true);
                                                            dispatch(updateCartItemQuantity(product.id, true));
                                                        }}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <p className="text-slate-700 text-center ">
                                                    ${(product.price * quantity).toFixed(2)}
                                                </p>
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                    className=" text-neutral hover:text-error cursor-pointer"
                                                    onClick={() => {
                                                        removeCartItemFromDB(userToken, id);
                                                        dispatch(removeFromCart(product.id));
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="w-1/3 flex flex-col gap-4">
                            <button
                                className={`${productTotal >= 1 ? "bg-[#0ea5e9] ring-1" : "bg-slate-200"}   rounded-md py-3 w-full items-center flex gap-2 justify-center font-bold text-white`}
                                onClick={(e) => {
                                    history.push("/order");
                                }}
                                disabled={productTotal >= 1 ? false : true}
                            >
                                <span>Create Order</span>
                                <FontAwesomeIcon icon={faAngleRight} className="text-white" size="lg" />
                            </button>
                            <Summary cart={cart}/>
                            <CouponArea/>
                            <button
                                className={`${productTotal >= 1 ? "bg-[#0ea5e9] ring-1" : "bg-slate-200"}    rounded-md py-3 w-full items-center flex gap-2 justify-center font-bold text-white`}
                                onClick={(e) => {
                                    history.push("/order");
                                }}
                                disabled={productTotal >= 1 ? false : true}
                            >
                                <span>Create Order</span>
                                <FontAwesomeIcon icon={faAngleRight} className="text-white" size="lg" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="px-4 text-error text-lg font-semibold">Your cart is empty.</div>
                )}
            </div>
        </div>
    );
}
