import Cards from 'react-credit-cards-2';
import { useDispatch, useSelector } from 'react-redux';
import { setPayment } from '../../store/actions/orderAction/orderAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { removePaymentFromDB, removeUserPayment } from '../../store/actions/userAction/userAction';

export default function PaymentCard(props) {
    const { id, title, number, name, expiryMonth, expiryYear, cvc } = props.creditCard;
    const token = useSelector((state) => state.user.response.token);
    const selectedPayment = useSelector(state => state.order.payment);
    const isSelected = selectedPayment && selectedPayment.id === id;
    const dispatch = useDispatch();

    const selectPaymentHandler = () => {
        dispatch(setPayment(props.creditCard));
    };

    const removePaymentHandler = () => {
        removePaymentFromDB(token, id)
        dispatch(removeUserPayment(id))
    }
    const formattedNumber = number.substring(0, 4) + '********' + number.substring(12);

    return (
        <div
            className={`ring-2 rounded-2xl p-1 shadow-md cursor-pointer flex flex-col ${isSelected ? ' ring-slate-400 ' : 'ring-slate-200'}`}
            onClick={selectPaymentHandler}
        >
            <input
                type="radio"
                name="paymentMethod"
                className="invisible h-0 w-0"
                checked={isSelected}
                onChange={() => { }}
            />
            <div>
                <div className='flex justify-between items-center mx-2.5'>
                    <h3 className='p-2 font-bold text-center text-slate-800'>{title}</h3>
                    <div className='flex gap-2'>
                        <FontAwesomeIcon icon={faEdit} className="text-neutral hover:text-success " />
                        <FontAwesomeIcon icon={faTrash} className="text-neutral hover:text-error " onClick={() => removePaymentHandler()} />
                    </div>
                </div>
                <hr className='p-1 shadow-none'></hr>
                <div className='p-1.5'>
                    <Cards
                        number={formattedNumber}
                        expiry={expiryMonth + expiryYear}
                        cvc={cvc}
                        name={name}
                    />
                </div>
            </div>
        </div>
    );
}
