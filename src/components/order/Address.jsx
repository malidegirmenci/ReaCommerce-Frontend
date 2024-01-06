import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axiosWithAuth from "../../api/axiosWithAuth";
import AddressCard from "./AddressCard";
import AddressForm from "./AddresForm";

export default function Address() {
    const history = useHistory();
    const [toggleAddresForm, setToggleAdressForm] = useState(false); 
    const [addresses, setAddresses] = useState([]);
    useEffect(() => {
        axiosWithAuth()
            .get("/user/address")
            .then((response) => {
                console.log("Addresses", response)
                setAddresses(response.data);
            })
            .catch((error) => {
                history.push("/login");
            });
    }, []);
    return (
        <div className="flex flex-col gap-10">
            <div className="flex gap-[1%]">
                {
                    addresses.map((address, idx) => {
                        return (
                            <AddressCard address={address} key={idx} />
                        )
                    })
                }
            </div>
            <button className="w-full font-bold ring-1 ring-slate-200 rounded shadow-md h-16 text-slate-700 hover:text-white hover:bg-blue-500 ease-in-out hover:ease-in-out hover:duration-200 duration-200" onClick={() => setToggleAdressForm(!toggleAddresForm)}>Add Address</button>
            <AddressForm toggleAddresForm = {toggleAddresForm}/>
        </div>
    )
}