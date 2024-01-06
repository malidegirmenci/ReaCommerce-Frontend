import { faAngleRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Summary() {
    const history = useHistory();
    const { cart } = useSelector((store) => store.shoppingCart);
    let productTotal = cart
        .reduce((sum, inCart) => {
            return inCart.checked
                ? sum + inCart.count * inCart.product.price.toFixed(2)
                : sum;
        }, 0)
        .toFixed(2);
    
    const shippingPrice = 4.99
    const freeShippingPriceLimit = 100;
    const couponCodeList = ["FREEDAY", "GIVEAWAY", "NOTTODAY"]
    const [toggleCouponTextArea, setToggleCouponTextArea] = useState(false);
    const [couponCode, setCouponCode] = useState('')
    return (
        <div className=" flex flex-col gap-4 ">
            <button
                className="bg-[#0ea5e9] ring-1  items-center rounded-md py-3 w-full flex gap-2 justify-center font-bold text-white"
                onClick={(e) => {
                    history.push("/order");
                }}
            >
                <span>Create Order</span>
                <FontAwesomeIcon icon={faAngleRight} className="text-white" size="lg" />
            </button>
            <div className="ring-1 ring-slate-200 shadow-md rounded-md p-4 flex flex-col gap-4">
                <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                <div className="flex justify-between gap-2">
                    <p className="text-slate-700 ">Products:</p>
                    <p className="font-bold text-slate-700">${productTotal}</p>
                </div>
                <div className="flex justify-between gap-2">
                    <p className="text-slate-700 ">Shipping: </p>
                    <p className="font-bold text-slate-700">${shippingPrice}</p>
                </div>
                {productTotal >= freeShippingPriceLimit && (
                    <div className="flex justify-between gap-2">
                        <p className="text-slate-700 ">Free Shipping for orders ${freeShippingPriceLimit} or Above</p>
                        <p className="font-bold text-success">-${shippingPrice}</p>
                    </div>
                )}
                {couponCode &&
                    <div className="flex justify-between ">
                        <p className="text-slate-700 "> 10 percent discount applied</p>
                        <p className="font-bold text-success">-${(productTotal * 0.1).toFixed(2)}</p>
                    </div>}
                <hr />
                <div className="flex justify-between gap-2">
                    <p className="text-slate-700 ">Order Total: </p>
                    <p className="font-bold text-success">
                        ${productTotal >= freeShippingPriceLimit
                            ? productTotal - (couponCodeList.includes(couponCode) ? (productTotal * 0.1) : 0)
                            : (parseFloat(productTotal) + shippingPrice).toFixed(2)}
                    </p>
                </div>
            </div>
            <button className="ring-1 text-slate-700 ring-slate-200 shadow-md rounded-md py-3 w-full flex gap-2 items-center justify-center" onClick={() => setToggleCouponTextArea(!toggleCouponTextArea)}>
                <FontAwesomeIcon icon={faPlus} />
                <span>ENTER COUPON CODE</span>
            </button>
            <input id="coupon-code"
                onBlur={(e) => setCouponCode(e.target.value)}
                type="text" className={`py-3 px-2 ring-1 ring-slate-200 shadow-md text-slate-700 rounded-md focus:outline-none w-full bg-white  ease-in-out duration-100 ${toggleCouponTextArea ? '' : 'invisible'}`} placeholder="Enter your code" />
            <button
                className="bg-[#0ea5e9] ring-1  rounded-md py-3 w-full items-center flex gap-2 justify-center font-bold text-white"
                onClick={(e) => {
                    history.push("/order");
                }}
            >
                <span>Create Order</span>
                <FontAwesomeIcon icon={faAngleRight} className="text-white" size="lg" />
            </button>
        </div>
    )
}