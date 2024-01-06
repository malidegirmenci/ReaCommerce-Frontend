import { useState } from "react";
import Address from "../components/order/Address";
import PaymentForm from "../components/order/PaymentForm";
import Summary from "../components/cart/Summary";

export default function Order() {
    const [tab, setTab] = useState("address");
    const [showBillAddress, setShowBillAdress] = useState(true);
    const handleCheckboxChange = (e) => {
        setShowBillAdress(e.target.checked);
    };
    return (
        <div className="flex gap-4 w-4/5 mx-auto py-6">
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
                ) : (<PaymentForm></PaymentForm>)
                }
            </div>
            <div className="w-1/3">
                <Summary/>
            </div>
        </div>
    )
}