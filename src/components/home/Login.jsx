import React from 'react';
import { useForm } from 'react-hook-form';
import { Images } from '../../assets/Images'
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    /*
  
           
           <form onSubmit={handleSubmit(onSubmit)} '>
           
               <input type="email" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
               <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
               <input type="password" placeholder="Password" {...register("Password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i })} />
               <select {...register("Gender")}>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
               </select>
               <input type="checkbox" placeholder="I have read and accept the terms of the Membership Agreement." {...register("I have read and accept the terms of the Membership Agreement.", { required: true })} />
               <input type="submit" />
           </form>
           
   */

    return (
        <div className="relative min-h-screen flex ">
            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                <img src={Images.signup.formBanner} className="max-md:hidden h-full max-w-[70%] absolute  object-cover left-0 z-1" />
                <div className="sm:w-1/2 xl:w-[45%] lg:w-3/5 h-full hidden md:flex items-center justify-start p-10 overflow-hidden bg-[#395185] text-white bg-no-repeat bg-cover relative" >
                    <div className="absolute bg-gradient-to-b from-blue-600 to-white opacity-60 inset-0 z-0"></div>
                    <div className="absolute triangle  min-h-screen right-0 w-16 z-0"></div>
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
                <div className="md:flex md:items-center md:justify-center  sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
                    <div className="max-w-md w-full space-y-8">
                        <div className="text-center">
                            <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                Welcome Back!
                            </h2>
                            <p className="mt-2 text-sm text-gray-500">Please sign in to your account</p>
                        </div>
                        <div className="flex flex-row justify-center items-center space-x-3">
                            <FontAwesomeIcon icon={faFacebook} size='2xl' className="cursor-pointer" />
                            <FontAwesomeIcon icon={faTwitter} size='2xl' className="cursor-pointer" />
                            <FontAwesomeIcon icon={faGoogle} size='2xl' className="cursor-pointer" />
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <span className="h-px w-16 bg-gray-200"></span>
                            <span className="text-gray-300 font-normal">or continue with</span>
                            <span className="h-px w-16 bg-gray-200"></span>
                        </div>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <input type="hidden" name="remember" defaultValue="false" />
                            <div className="relative">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                                <input className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="email" placeholder="Enter your mail." {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                            </div>
                            <div className="mt-8 content-center">
                                <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                    Password
                                </label>
                                <input className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter your password" defaultValue="*****|" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="text-indigo-400 hover:text-blue-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                    Sign in
                                </button>
                            </div>
                            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                                <span>Don't have an account?</span>
                                <a href="#" className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">Sign
                                    up</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}