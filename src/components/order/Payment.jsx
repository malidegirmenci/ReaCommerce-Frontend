import { useDispatch, useSelector } from "react-redux";
import PaymentCard from "./PaymentCard";
import PaymentForm from "./PaymentForm";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getUserPaymentsFromDB } from "../../store/actions/userAction/userAction";

export default function Payment() {
    const history = useHistory();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.response.token);
    const isNewRequest = useSelector((state) => state.user.isNewRequest)
    const creditCards = useSelector((state) => state.user.userData.payments);
    const [toggleCardForm, setToggleCardForm] = useState(false);

    useEffect(() => {
        getUserPaymentsFromDB(token, history, dispatch)
    }, [isNewRequest]);
    return (
        <div className="flex flex-col gap-5 ring-1 ring-slate-200 py-3 px-2 rounded">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold text-slate-700 pl-4">Payments</h2>
                <hr className="ring-1 text-slate-400 w-full"></hr>
            </div>
            <div className="flex flex-wrap justify-between gap-5 mx-16">
                {creditCards && creditCards.map((creditCard, idx) => {
                    return (
                        <div className="flex " key={idx}>
                            <PaymentCard creditCard={creditCard} />
                        </div>
                    )
                })}
            </div>
            <button className="w-full font-bold ring-1 ring-slate-200 rounded shadow-md h-16 text-slate-700 hover:text-white hover:bg-blue-500 ease-in-out hover:ease-in-out hover:duration-200 duration-200" onClick={() => setToggleCardForm(!toggleCardForm)}>Add Credit Card</button>
            <PaymentForm toggleCardForm={toggleCardForm} setToggleCardForm={setToggleCardForm} />
        </div>
    )
}