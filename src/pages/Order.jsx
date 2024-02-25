import { useState } from "react";
import Address from "../components/order/Address";
import Summary from "../components/cart/Summary";
import Payment from "../components/order/Payment";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { useDispatch, useSelector } from "react-redux";
import { saveOrderToDB } from "../store/actions/userAction/userAction";
import CouponArea from "../components/cart/CouponArea";
import { clearCart, removeFromCart } from "../store/actions/shoppingCartAction/shoppingCartAction";

export default function Order() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [tab, setTab] = useState("address");
    const [showBillAddress, setShowBillAdress] = useState(true);
    const token = useSelector((state)=>state.user.response.token);
    const order = useSelector((state) => state.order)
    const orderRequest = {
        addressId: order.address.id,
        paymentId: order.payment.id,
        price:parseFloat(order.price),
        cart:order.cart
    }
    const handleCheckboxChange = (e) => {
        setShowBillAdress(e.target.checked);
    };
    const [isAnimate, setIsAnimate] = useState(false);
    const handleClick = () => {
        saveOrderToDB(token, orderRequest, dispatch);
        if (!isAnimate) {
            setIsAnimate(true);
            setTimeout(() => {
                setIsAnimate(false);
                history.push("/checkout")
            }, 8000);
        }
    };
    return (
        <div className="flex gap-4 w-[90%] mx-auto py-6">
            <div className="w-2/3">
                <div className="flex text-center pb-4">
                    <input
                        type="radio"
                        name="order"
                        id="address"
                        className="invisible h-0 w-0"
                        onClick={(e) => {
                            setTab(e.target.id);
                        }}
                    />
                    <label
                        htmlFor="address"
                        className="w-1/2 cursor-pointer p-4 ring-1 ring-slate-200 shadow-md rounded-l-md checked:bg-slate-400"
                        defaultChecked
                    >
                        <h2 className="text-lg font-bold">Address Information</h2>
                        <p className="text-sm"></p>
                    </label>
                    <input
                        type="radio"
                        name="order"
                        id="payment"
                        className="invisible h-0 w-0"
                        onClick={(e) => {
                            setTab(e.target.id);
                        }}
                    />
                    <label
                        htmlFor="payment"
                        className="w-1/2 cursor-pointer p-4 ring-1 ring-slate-200 shadow-md rounded-r-md checked:bg-slate-400"
                    >
                        <h2 className="text-lg font-bold">Payment Options</h2>
                        <p className="text-sm">
                            You can safely pay using your debit or credit card.
                        </p>
                    </label>
                </div>
                {tab === "address" ? (
                    <div className="ring-1 ring-slate-200 shadow-md flex flex-col gap-4 py-3 px-2 rounded-md">
                        <div className="flex justify-between px-3">
                            <h2 className="text-xl font-bold text-slate-700">Delivery Address</h2>
                            <div className="flex items-center gap-2">
                                <input type="checkbox"
                                    onChange={handleCheckboxChange}
                                    checked={showBillAddress} />
                                <label> Send the bill to the same address</label>
                            </div>
                        </div>
                        <Address></Address>
                        {!showBillAddress && (
                            <>
                                <hr className="ring-1 ring-slate-400 shadow-md" />
                                <div className="flex justify-between px-3">
                                    <h2 className="text-xl font-bold text-slate-700">Bill Address</h2>
                                </div>
                                <Address></Address>
                            </>
                        )}
                    </div>
                ) : (<Payment></Payment>)
                }
            </div>
            <div className="w-1/3 flex flex-col gap-4">
                <button
                    className={isAnimate ? 'order animate' : 'order'}
                    onClick={handleClick}
                >
                    <span className='default'>Complete Order</span>
                    <span className='success'>Order Placed
                        <svg viewBox='0 0 12 10'>
                            <polyline points='1.5 6 4.5 9 10.5 1'></polyline>
                        </svg>
                    </span>
                    <div className='box'></div>
                    <div className='truck'>
                        <div className='back'></div>
                        <div className='front'>
                            <div className='window'></div>
                        </div>
                        <div className='light top'></div>
                        <div className='light bottom'></div>
                    </div>
                    <div className='lines'></div>
                </button>
                <Summary cart={order.cart} />
                <CouponArea/>
            </div>
        </div>
    )
}