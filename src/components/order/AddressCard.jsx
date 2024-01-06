import { faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddressCard(props) {
    const { title, name, surname, phone, address, city, district } = props.address
    return (
        <div className="flex flex-col gap-2 w-1/2 ring-1 ring-slate-200 shadow-md p-2 rounded text-slate-700">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <input type="radio" name="address" />
                    <label className="font-bold text-slate-700">{title}</label>
                </div>
                <button className="text-blue-500">
                    Edit
                </button>
            </div>
            <div className="flex flex-col justify-between rounded-md">
                <div className="flex justify-between text-slate-700">
                    <div className="flex gap-2 items-center w-2/3">
                        <FontAwesomeIcon icon={faUser} className="text-blue-400" />
                        {name + " " + surname}
                    </div>
                    <div className="flex gap-2 items-center w-1/3 text-slate-700">
                        <FontAwesomeIcon icon={faPhone} className="text-blue-400" />                        {"(" +
                            phone.slice(0, 3) +
                            ") *** ** " +
                            phone.slice(8)}
                    </div>
                </div>
                <p>{address}</p>
                <p>{district + "/" + city}</p>
            </div>
        </div>
    )
}