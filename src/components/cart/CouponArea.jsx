import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateHasCouponCode } from "../../store/actions/shoppingCartAction/shoppingCartAction";

export default function CouponArea() {
    const dispatch = useDispatch();
    const couponCodeList = ["FREEDAY", "GIVEAWAY", "NOTTODAY"]
    const [toggleCouponTextArea, setToggleCouponTextArea] = useState(false);
    return (
        <div className="flex flex-col gap-2">
            <button className="ring-1 text-slate-700 ring-slate-200 shadow-md rounded-md py-3 w-full flex gap-2 items-center justify-center" onClick={() => setToggleCouponTextArea(!toggleCouponTextArea)}>
                <FontAwesomeIcon icon={faPlus} />
                <span>ENTER COUPON CODE</span>
            </button>
            <input id="coupon-code"
                onBlur={(e) => {
                    couponCodeList.includes(e.target.value) ? dispatch(updateHasCouponCode(true)) : dispatch(updateHasCouponCode(false))
                }}
                type="text" className={`py-3 px-2 ring-1 ring-slate-200 shadow-md text-slate-700 rounded-md focus:outline-none w-full bg-white  ease-in-out duration-100 ${toggleCouponTextArea ? '' : 'invisible'}`} placeholder="Enter your code" />
        </div>
    )
}