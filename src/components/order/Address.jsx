import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AddressCard from "./AddressCard";
import AddressForm from "./AddresForm";
import { useDispatch, useSelector } from "react-redux";
import { getUserAddressesFromDB} from "../../store/actions/userAction/userAction";

export default function Address() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [toggleAddresForm, setToggleAdressForm] = useState(false);
    const isNewRequest = useSelector((state) => state.user.isNewRequest)
    const token = useSelector((state) => state.user.response.token);
    const addresses = useSelector((state) => state.user.userData.addresses);
    useEffect(() => {
        token && getUserAddressesFromDB(token, history,dispatch);
    }, [isNewRequest]);

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-wrap justify-between gap-y-4">
                {
                    addresses && addresses.map((address, idx) => {
                        return (
                            <AddressCard address={address} key={idx} />
                        )
                    })
                }
            </div>
            <button className="w-full font-bold ring-1 ring-slate-200 rounded shadow-md h-16 text-slate-700 hover:text-white hover:bg-blue-500 ease-in-out hover:ease-in-out hover:duration-200 duration-200" onClick={() => setToggleAdressForm(!toggleAddresForm)}>Add Address</button>
            <AddressForm toggleAddresForm={toggleAddresForm} setToggleAdressForm={setToggleAdressForm} />
        </div>
    )
}