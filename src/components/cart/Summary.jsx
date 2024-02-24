import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../../store/actions/orderAction/orderAction";

export default function Summary(props) {
    const shippingPrice = 4.99
    const freeShippingPriceLimit = 100;
    const hasCouponCode = useSelector((state) => state.shoppingCart.hasCouponCode)
    const dispatch = useDispatch();
    const cart = props.cart
    let productTotal = cart
        .reduce((sum, inCart) => {
            return inCart.isChecked
                ? sum + inCart.quantity * inCart.product.price.toFixed(2)
                : sum;
        }, 0)
        .toFixed(2);
    useEffect(() => {
        dispatch(setPrice(productTotal))
    }, [productTotal])
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="ring-1 ring-slate-200 shadow-md rounded-md p-4 flex flex-col gap-4">
                <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                <div className="flex justify-between gap-2">
                    <p className="text-slate-700 ">Products:</p>
                    <p className="font-bold text-slate-700">${productTotal}</p>
                </div>
                {
                    productTotal >= 1 &&
                    <div className="flex justify-between gap-2">
                        <p className="text-slate-700 ">Shipping: </p>
                        <p className="font-bold text-slate-700">${shippingPrice}</p>
                    </div>
                }
                {
                    productTotal >= freeShippingPriceLimit && (
                        <div className="flex justify-between gap-2">
                            <p className="text-slate-700 ">Free Shipping for orders ${freeShippingPriceLimit} or Above</p>
                            <p className="font-bold text-success">-${shippingPrice}</p>
                        </div>
                    )
                }
                {
                    hasCouponCode &&
                    <div className="flex justify-between ">
                        <p className="text-slate-700 "> 10 percent discount applied</p>
                        <p className="font-bold text-success">-${(productTotal * 0.1).toFixed(2)}</p>
                    </div>
                }
                <hr />
                <div className="flex justify-between gap-2">
                    <p className="text-slate-700 ">Order Total: </p>
                    <p className="font-bold text-success">
                        ${(productTotal - (hasCouponCode ? (productTotal * 0.1).toFixed(2) : 0) + (productTotal >= freeShippingPriceLimit ? 0 : productTotal >= 1 && shippingPrice)).toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    )
}