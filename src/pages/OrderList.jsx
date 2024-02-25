import { useEffect } from "react"
import { getOrderListFromDB } from "../store/actions/userAction/userAction"
import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Summary from "../components/cart/Summary";

export default function OrderList() {
    const token = useSelector((state) => state.user.response.token)
    const orderList = useSelector((state) => state.user.userData.orderList);
    const user = useSelector((state) => state.user.response);
    const dispatch = useDispatch();
    useEffect(() => {
        getOrderListFromDB(token, dispatch);
    }, [])

    const orders = orderList && orderList.map((order, idx) => {
        const summaryOrder = [...order.cart];
        console.log("summaryOrder", summaryOrder);
        const productsInOrder = order.cart.map((cartItem, idx) => {
            return (
                <div key={idx} className="flex gap-3 item-center justify-around ring-1 ring-slate-200 rounded">
                    <div className="w-1/3">
                        <img src={cartItem.product.images[0].url} className="w-full h-32 rounded-l object-cover object-center" />
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
            <div className="w-full ring-1 ring-slate-400 shadow-md rounded flex flex-col gap-1" key={idx}>
                <div className="flex justify-between my-1 mx-3 items-center">
                    <h2 className="text-lg font-bold text-slate-700">Order ID #{order.id}</h2>
                    <h3 className="text-md font-semibold text-slate-700">Order Date: {order.date}</h3>
                </div>
                <hr className="ring-1"></hr>
                <div className="flex m-3 gap-2">
                    <div className="flex w-1/2">
                        <div className="flex flex-col gap-2">
                            <div className="flex ring-1 ring-slate-200  rounded items-center">
                                <h3 className="text-lg font-semibold text-slate-600 p-2">Contact:</h3>
                                <p className="text-md font-normal text-slate-700">{user.email}</p>
                            </div>
                            <div className="flex ring-1 ring-slate-200  rounded items-center">
                                <h3 className="text-lg font-semibold text-slate-600 p-2">Address:</h3>
                                <div>
                                    <p className="text-md font-normal text-slate-700 ">{order.address.name} {order.address.surname}</p>
                                    <p className="text-md font-normal text-slate-700 mr-2">{order.address.addressDetail}</p>
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
                    </div>
                    <div className=" flex flex-col w-1/2">
                        <div className="flex flex-col gap-4">
                            {productsInOrder}
                            <Summary cart={summaryOrder} />
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="w-[85%] mx-auto flex flex-col gap-3" >
            <h2 className="text-lg font-bold text-slate-700">My Orders</h2>
            {orders}
        </div>
    )
}