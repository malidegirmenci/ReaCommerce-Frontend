import { faAngleRight, faCheckToSlot, faCircleXmark, faQuestionCircle, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Summary from "../components/cart/Summary";

export default function OrderCheckout() {
    const history = useHistory();
    const user = useSelector((state) => state.user.response);
    const order = useSelector((state) => state.user.userData.order);
    const randomString = Math.random().toString(36).substring(2, 8);
    let productCount = order.cart.reduce((sum, inCart) => {
        return inCart.isChecked ? sum + inCart.quantity : sum;
    }, 0);
    const productsInOrder = order.cart.map((cartItem, idx) => {
        return (
            <div key={idx} className="flex gap-3 item-center justify-around ring-1 ring-slate-200 rounded">
                <div className="w-1/3">
                    <img src={cartItem.product.images[0].url} className="w-full h-32 object-cover object-center" />
                </div>
                <div className="flex flex-col gap-1 justify-center w-2/3">
                    <h5 className="text-md font-semibold text-slate-700 pr-1">{cartItem.product.name}</h5>
                    <h6 className="text-sm font-normal text-slate-700 pr-1">{cartItem.product.description}</h6>
                    <div className="flex ">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <FontAwesomeIcon icon={faCircleXmark} />
                                <h5 className="text-lg font-bold text-slate-700">{cartItem.quantity}</h5>
                            </div>
                            <h5 className="text-lg font-bold text-slate-700">${cartItem.product.price * cartItem.quantity}</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="flex flex-col w-4/5 mx-auto gap-4">
            <h2 className="text-xl font-bold text-slate-700">Checkout</h2>
            <div className="flex justify-between gap-16">
                <div className="flex flex-col w-1/2 gap-4">
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCheckToSlot} size="xl" />
                        <div className="flex flex-col">
                            <h4 className="text-md font-normal text-slate-700">Order #{randomString.toUpperCase()}-{order.id}</h4>
                            <h3 className="text-lg font-semibold text-slate-700">Thank you! {order.address.name}</h3>
                        </div>
                    </div>
                    <div className="flex flex-col ring-1 ring-slate-200 shadow-md rounded">
                        <h3 className="text-lg font-semibold text-slate-700 p-2">Order Updates</h3>
                        <p className="text-md font-normal text-slate-700 p-2">You will receive order and shipping updates via email.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex ring-1 ring-slate-200  rounded items-center">
                            <h3 className="text-lg font-semibold text-slate-600 p-2">Contact:</h3>
                            <p className="text-md font-normal text-slate-700">{user.email}</p>
                        </div>
                        <div className="flex ring-1 ring-slate-200  rounded items-center">
                            <h3 className="text-lg font-semibold text-slate-600 p-2">Address:</h3>
                            <div>
                                <p className="text-md font-normal text-slate-700 ">{order.address.name} {order.address.surname}</p>
                                <p className="text-md font-normal text-slate-700 ">{order.address.addressDetail}</p>
                                <p className="text-md font-normal text-slate-700 ">{order.address.district}/{order.address.city}</p>
                            </div>
                        </div>
                        <div className="flex ring-1 ring-slate-200  rounded items-center">
                            <h3 className="text-lg font-semibold text-slate-600 p-2">Phone:</h3>
                            <p className="text-md font-normal text-slate-700 ">{order.address.phone}</p>
                        </div>
                        <div className="flex ring-1 ring-slate-200 rounded items-center">
                            <h3 className="text-lg font-semibold text-slate-600 p-2">Payment:</h3>
                            <p className="text-md font-normal text-slate-700 ">Check payments</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <FontAwesomeIcon icon={faQuestionCircle} />
                        <span className="text-md font-normal">Need help?</span><span className="text-md font-bold cursor-pointer" onClick={() => history.push("/contact")}>Contact Us</span>
                        
                    </div>
                    <button
                        className={`bg-[#0ea5e9] ring-1 rounded-md py-3 w-full items-center flex gap-2 justify-center font-bold text-white`}
                        onClick={(e) => {
                            history.push("/home");
                        }}
                    >
                        <span>Continue to shopping</span>
                        <FontAwesomeIcon icon={faAngleRight} className="text-white" size="lg" />
                    </button>
                </div>
                <div className="flex flex-col gap-4 w-1/2" >
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faShoppingBag} />
                        <h3 className="text-xl font-bold text-slate-700">Your Order ({productCount})</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        {productsInOrder}
                        <Summary cart={order.cart} />
                    </div>
                </div>
            </div>
        </div>
    )
}