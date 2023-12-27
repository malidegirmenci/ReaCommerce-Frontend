import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Images } from '../assets/Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { updateRoles } from '../store/actions/globalAction/globalAction';
import { instanceAxios } from '../store/store';

export default function SignUp() {
    const { register, handleSubmit, watch, reset, formState: { errors, isValid } } = useForm({ mode: "onBlur" });
    const history = useHistory();
    const dispatch = useDispatch();
    const roles = useSelector(state => state.global.roles);
    const [dataForm, setDataForm] = useState({})

    useEffect(()=> {
        dispatch(updateRoles());
    },[]);

    const onSubmit = (data) => {
        console.log("Soft Data:",data)
        if(data.role == "customer" || data.role == "admin"){
            setDataForm({
                name:data.name,
                email:data.email,
                password:data.password,
                role_id:data.role === "admin" ? 0 : 2
            });
        }else{
            setDataForm({
                name:data.name,
                email:data.email,
                password:data.password,
                role_id:1,
                store:{
                    name:data.storeName,
                    phone:data.storePhone,
                    tax_no:data.storeTaxNumber,
                    bank_account:data.storeIBAN
                }
            });
        }
        
    };
    useEffect(() => {
        console.log("Sending data", dataForm);
        if (Object.keys(dataForm).length > 0) {
            instanceAxios.post("/signup", dataForm)
                .then((response) => {
                    console.log("Data sent successfully:", response.data);
                    history.goBack()
                })
                .catch((error) => {
                    console.error("Error sending data:", error);
                });
        }
    }, [dataForm]);
    return (
        <div className="relative flex my-8">
            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                <img src={Images.signup.formBanner} className="max-md:hidden max-w-[70%]  absolute  object-cover left-0 bottom-0 z-1" />
                <div className="basis-[50%] sm:w-1/2 xl:w-[45%] h-full hidden md:flex items-center justify-start p-10 overflow-hidden bg-[#395185] text-white bg-no-repeat bg-cover relative" >
                    <div className="absolute bg-gradient-to-b from-blue-600 to-white opacity-60 inset-0 z-0"></div>
                    <div className="absolute triangle right-0 w-16 z-0"></div>
                    <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className=" z-10  md:flex md:items-center md:justify-center  sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
                    <div className="max-w-md w-full flex flex-col gap-3">
                        <div className="text-center">
                            <h2 className=" text-3xl font-bold text-gray-900"> Welcome Back!</h2>
                            <p className="text-sm text-gray-500">Please sign in to your account</p>
                        </div>
                        <div className="flex gap-2 justify-center items-center ">
                            <Link to="#" className="hover:cursor-wait"><FontAwesomeIcon icon={faFacebook} size='2xl' className="hover:cursor-pointer" /></Link>
                            <Link to="#" className="hover:cursor-wait"><FontAwesomeIcon icon={faTwitter} size='2xl' className="hover:cursor-pointer" /></Link>
                            <Link to="#" className="hover:cursor-wait"><FontAwesomeIcon icon={faGoogle} size='2xl' className="hover:cursor-pointer" /></Link>
                        </div>
                        <div className="flex items-center justify-center ">
                            <span className="h-px w-16 bg-gray-200"></span>
                            <span className="text-gray-300 font-normal">or continue with</span>
                            <span className="h-px w-16 bg-gray-200"></span>
                        </div>
                        <form className=" flex flex-col gap-2 " onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor='name' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Full Name</label>
                                <input id="name" className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="text" placeholder="Enter your full name" {...register("name", { required: { value: true, message: "Full name is required" }, minLength: { value: 3, message: "You must enter at least 3 characters" }, maxLength: { value: 35, message: "You can enter up to 35 characters." } })} />
                                {errors["name"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["name"]?.message}</p>}
                            </div>
                            <div >
                                <label htmlFor='email' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                                <input autoComplete='true' id='email' className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="email" placeholder="Enter your mail" {...register("email", { required: { value: true, message: "Email is required" }, minLength: { value: 15, message: "Email must be at least 15 characters long." }, maxLength: { value: 100, message: "Email can not be longer than 100 characters." }, pattern: { value: /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Invalid email" } })} />
                                {errors["email"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["email"]?.message}</p>}
                            </div>
                            <div >
                                <label htmlFor='password' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                    Password
                                </label>
                                <input id='password' className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Enter your password" {...register("password", { required: { value: true, message: "Password is required" }, minLength: { value: 8, message: "Password must be at least 8 characters long." }, maxLength: { value: 30, message: "Password cannot be longer than 30 characters." }, pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-]).+$/, message: "Password must contain at least one number, one lower case letter, one upper case letter and a special character." } })} />
                                {errors["password"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["password"]?.message}</p>}
                            </div>
                            <div >
                                <label htmlFor='passwordConfirmation' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                    Password Confirmation
                                </label>
                                <input id='passwordConfirmation' className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Enter your password" {...register("passwordConfirmation", { validate: (fieldValue) => { return watch("password") === fieldValue || "Password does not match." } })} />
                                {errors["passwordConfirmation"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["passwordConfirmation"]?.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor='role' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                    Role
                                </label>
                                <select id='role' value={watch("role") || "customer"} {...register("role")} className='w-1/2 content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500'>
                                    <option key={3} value={"customer"} defaultValue={"customer"}>
                                        Customer
                                    </option>
                                    {roles.map(role => (
                                        (role.code !== "customer") && 
                                        <option key={role.id} value={role.code}>
                                            {role.code.charAt(0).toUpperCase() + role.code.slice(1)}
                                        </option>
                                    ))}
                                </select>
                                {
                                    watch("role")?.toLowerCase() === "store" && (
                                        <>
                                            <div>
                                                <label htmlFor='storeName' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Store Name</label>
                                                <input id="storeName" className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="text" placeholder="Enter your store name" {...register("storeName", { required: { value: true, message: "Store name is required" }, minLength: { value: 3, message: "Store Name should be at least 3 characters long" }, maxLength: { value: 35, message: "Store Name cannot be longer than 30 characters." } })} />
                                                {errors["storeName"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["storeName"]?.message}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor='storePhone' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Store Phone</label>
                                                <input id="storePhone" className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="tel" placeholder="Enter your store phone" {...register("storePhone", { required: { value: true, message: "Store phone is required" }, pattern: { value: /^((\+|00)90|0)?\s?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/, message: "Invalid phone number" } })} />
                                                {errors["storePhone"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["storePhone"]?.message}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor='storeTaxNumber' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Store Tax Number</label>
                                                <input id="storeTaxNumber" className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="text" placeholder="Enter your store tax number" {...register("storeTaxNumber", { required: { value: true, message: "Store tax number is required" }, pattern: { value: /^T\d{4}V\d{6}$/, message: "Invalid tax number" } })} />
                                                {errors["storeTaxNumber"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["storeTaxNumber"]?.message}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor='storeIBAN' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Store IBAN:</label>
                                                <input id="storeIBAN" className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="text" placeholder="Enter your store IBAN" {...register("storeIBAN", { required: { value: true, message: "Store IBAN is required" }, pattern: { value: /^TR\d{2}\s?(\d{4}\s?){1}(\d{1})(\d{3}\s?)(\d{4}\s?){3}(\d{2})\s?$/, message: "Invalid IBAN" } })} />
                                                {errors["storeIBAN"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["storeIBAN"]?.message}</p>}
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                            <div>
                                <button type="submit" disabled={!isValid} className="w-1/2 flex justify-center text-2xl bg-gradient-to-r disabled:opacity-50 from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}