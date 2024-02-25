import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useDispatch, useSelector } from 'react-redux';
import { savePayment } from '../../store/actions/userAction/userAction';

export default function PaymentForm(props) {
    let toggleCardForm = props.toggleCardForm;
    const setToggleCardForm = props.setToggleCardForm;
    const token = useSelector((state) => state.user.response.token);
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            title: "",
            number: "",
            name: "",
            expiryMonth: "",
            expiryYear: "",
            cvc: "",
        },
        mode: "onBlur",
    });
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const years = ["24", "25", "26", "27", "28", "29"]
    const [state, setState] = useState({
        number: '',
        expiryMonth: "",
        expiryYear: "",
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setState((prev) => ({ ...prev, [name]: value }));
    }
    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }
    const onSubmit = (payment) => {
        setToggleCardForm(false);
        savePayment(payment, token, dispatch);
    };
    return (
        <div className={`flex gap-3 flex-col ${toggleCardForm ? '' : 'hidden'} `}>
            <Cards
                number={state.number}
                expiry={state.expiryMonth + state.expiryYear}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
            />
            <form className={` flex flex-col gap-2 w-4/5 mx-auto`} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='title' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Card Title</label>
                    <input id="title" className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="text" placeholder="Enter your card title" {...register("title", { required: { value: true, message: "Card title is required" }, minLength: { value: 3, message: "You must enter at least 3 characters" }, pattern: { value: /[A-Za-z]/, message: "You must enter only character" }, maxLength: { value: 45, message: "You can enter up to 45 characters." } })} onChange={handleInputChange} onFocus={handleInputFocus} />
                    {errors["title"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["title"]?.message}</p>}
                </div>
                <div>
                    <label htmlFor='number' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Card Number</label>
                    <input id="number" className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="text" placeholder="Enter your card number" {...register("number", { required: { value: true, message: "Card number is required" }, pattern: { value: /^[0-9]+$/gm, message: "You must enter only number" }, minLength: { value: 16, message: "You must enter at least 16 characters" }, maxLength: { value: 16, message: "You must enter at greatest 16 characters" } })} onChange={handleInputChange} onFocus={handleInputFocus} />
                    {errors["number"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["number"]?.message}</p>}
                </div>
                <div>
                    <label htmlFor='name' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Name on Card</label>
                    <input id="name" className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="text" placeholder="Enter your name on card" {...register("name", { required: { value: true, message: "Name on card is required" }, minLength: { value: 3, message: "You must enter at least 3 characters" }, pattern: { value: /[A-Za-z]/, message: "You must enter only character" }, maxLength: { value: 45, message: "You can enter up to 45 characters." } })} onChange={handleInputChange} onFocus={handleInputFocus} />
                    {errors["name"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["name"]?.message}</p>}
                </div>
                <div className='flex items-center gap-[10%]'>
                    <div className='w-1/2 flex flex-col'>
                        <h2 className='ml-3 text-sm font-bold text-gray-700 tracking-wide'>Expiration Date</h2>
                        <div className='flex gap-3'>
                            <div className='flex  items-center gap-2'>
                                <label htmlFor='expiryMonth' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Month</label>
                                <select name="expiryMonth" id='expiryMonth' {...register("expiryMonth")} onChange={handleInputChange} onFocus={handleInputFocus} className='bg-white content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500'>
                                    {months.map((month, idx) => {
                                        return (
                                            <option key={idx} value={month}>{month}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className='flex items-center gap-2'>
                                <label htmlFor='expiryYear' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Year</label>
                                <select name="expiryYear" id="expiryYear" {...register("expiryYear")} onChange={handleInputChange} onFocus={handleInputFocus} className='bg-white content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500'>
                                    {years.map((year, idx) => {
                                        return (
                                            <option key={idx} value={year} >{year}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor='cvc' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">CVC</label>
                        <input id="cvc" className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="text" placeholder="Enter your CVV" {...register("cvc", { required: { value: true, message: "CVC is required" }, maxLength: { value: 3, message: "You must enter at greatest 3 characters" }, minLength: { value: 3, message: "You must enter at least 3 characters" }, pattern: { value: /[0-9*]/, message: "You must enter only number" } })} onChange={handleInputChange} onFocus={handleInputFocus} />
                        {errors["cvc"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["cvc"]?.message}</p>}
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={!isValid} className="w-full flex justify-center text-2xl bg-gradient-to-r disabled:opacity-50 from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
} 