import { faEdit, faPhone, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setAddress } from "../../store/actions/orderAction/orderAction";
import { removeAddressFromDB, removeUserAddress } from "../../store/actions/userAction/userAction";

export default function AddressCard(props) {
    const dispatch = useDispatch();
    const { id, addressTitle, name, surname, phone, addressDetail, city, district } = props.address;
    const token = useSelector((state) => state.user.response.token)
    const selectedAddress = useSelector(state => state.order.address);
    const isSelected = selectedAddress && selectedAddress.id === id;

    const setAddressHandler = () => {
        dispatch(setAddress(props.address));
    };

    const removeAddressHandler = () => {
        removeAddressFromDB(token, id)
        dispatch(removeUserAddress(id));
    }
    return (
        <div className={`flex flex-col gap-2 w-[49%] ring-2 ring-slate-200 shadow-md p-2 rounded text-slate-700 cursor-pointer ${isSelected ? ' ring-slate-400 ' : 'ring-slate-200'}`}
            onClick={() => setAddressHandler()}
        >
            <input
                type="radio"
                name="addressMethod"
                className="invisible h-0 w-0"
                checked={isSelected}
                onChange={() => { }}
            />
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <label className="font-bold text-slate-700">{addressTitle}</label>
                </div>
                <div className='flex gap-2'>
                    <FontAwesomeIcon icon={faEdit} className="text-neutral hover:text-success " />
                    <FontAwesomeIcon icon={faTrash} className="text-neutral hover:text-error "
                        onClick={() => removeAddressHandler()} />
                </div>
            </div>
            <div className="flex flex-col justify-between rounded-md">
                <div className="flex justify-between text-slate-700">
                    <div className="flex gap-2 items-center ">
                        <FontAwesomeIcon icon={faUser} className="text-blue-400" />
                        {`${name} ${surname}`}
                    </div>
                    <div className="flex gap-2 items-center text-slate-700">
                        <FontAwesomeIcon icon={faPhone} className="text-blue-400" />
                        {"(" + phone.slice(0, 3) + ") *** ***" + phone.slice(9)}
                    </div>
                </div>
                <p>{addressDetail}</p>
                <p>{district + "/" + city}</p>
            </div>
        </div>
    );
}
