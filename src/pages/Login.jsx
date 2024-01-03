import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useForm } from 'react-hook-form';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Images } from '../assets/Images';
import { loginUser } from '../store/actions/userAction/userAction';
import useLocalStorage from '../hooks/useLocalStorage';
import { useEffect } from 'react';

export default function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useLocalStorage("Token", "");
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onBlur" });
    
    const onSubmit = (userData) => {
        dispatch(loginUser(userData,history,setToken));
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <input type="hidden" name="remember" defaultValue="false" />
                            <div >
                                <label htmlFor='email' className="ml-3 text-sm font-bold text-gray-700 tracking-wide">Email</label>
                                <input autoComplete='true' id='email' className=" bg-white w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500" type="email" placeholder="Enter your mail" {...register("email", { required: { value: true, message: "Email is required" }, minLength: { value: 15, message: "Email must be at least 15 characters long." }, maxLength: { value: 100, message: "Email can not be longer than 100 characters." }, pattern: { value: /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "Invalid email" } })} />
                                {errors["email"] && <p role="alert" className='ml-3 text-sm font-bold  text-red-600 tracking-wide'>{errors["email"]?.message}</p>}
                            </div>
                            <div >
                                <label htmlFor='password' className=" ml-3 text-sm font-bold text-gray-700 tracking-wide">
                                    Password
                                </label>
                                <input id='password' className="bg-white w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Enter your password" {...register("password", { required: { value: true, message: "Password is required" }})} />
                                {errors["password"] && <p role="alert" className='ml-3 text-sm font-bold text-red-600 tracking-wide'>{errors["password"]?.message}</p>}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input id="remember_me" name="remember_me" type="checkbox" className=" h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
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
                            <button type="submit" disabled={!isValid} className="w-full flex justify-center text-2xl bg-gradient-to-r disabled:opacity-50 from-indigo-500 to-blue-600  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                                    Login
                                </button>
                            </div>
                            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                                <span>Don't have an account?</span>
                                <Link to="/signup" className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300">
                                    Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}