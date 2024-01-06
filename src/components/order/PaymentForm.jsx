import { useForm } from 'react-hook-form';

export default function PaymentForm() {
    const toggleCardForm = true
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            cardNumber: "",
            nameOnCard: "",
            expirationDate: "",
            cvv: "",
        },
        mode: "onBlur",
    });
    const onSubmit = (payment) => {
        console.log("willSendPayment", payment);
    };
    return (
        <form className={` flex flex-col gap-2 w-4/5 mx-auto ${toggleCardForm ? '' : 'hidden'}`} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='cardNumber' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Card Number</label>
                <input id="cardNumber" className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="text" placeholder="Enter your card number" {...register("cardNumber", { required: { value: true, message: "Card number is required" }, minLength: { value: 16, message: "You must enter at least 16 characters" } })} />
                {errors["cardNumber"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["cardNumber"]?.message}</p>}
            </div>
            <div>
                <label htmlFor='nameOnCard' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Name on Card</label>
                <input id="nameOnCard" className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="text" placeholder="Enter your name on card" {...register("nameOnCard", { required: { value: true, message: "Name on card is required" }, minLength: { value: 3, message: "You must enter at least 3 characters" }, maxLength: { value: 45, message: "You can enter up to 45 characters." } })} />
                {errors["nameOnCard"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["nameOnCard"]?.message}</p>}
            </div>
            <div className='flex items-center gap-[10%]'>
                <div className='w-1/2'>
                    <label htmlFor='expirationDate' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Expiration Date</label>
                    <input id="expirationDate" className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="text" placeholder="Enter your expiration date" {...register("expirationDate", { required: { value: true, message: "Expiration date is required" } })} />
                    {errors["expirationDate"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["expirationDate"]?.message}</p>}
                </div>
                <div className='w-1/2'>
                    <label htmlFor='cvv' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">CVV</label>
                    <input id="cvv" className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="text" placeholder="Enter your CVV" {...register("cvv", { required: { value: true, message: "CVV is required" }, minLength: { value: 3, message: "You must enter at least 3 characters" } })} />
                    {errors["cvv"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["cvv"]?.message}</p>}
                </div>
            </div>
            <div>
                <button type="submit" disabled={!isValid} className="w-full flex justify-center text-2xl bg-gradient-to-r disabled:opacity-50 from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                    Add
                </button>
            </div>
        </form>
    )
}