import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm(props) {
    const {setShowForm} = props;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-1/2 items-start max-sm:w-full max-sm:items-center'>
            <FontAwesomeIcon className='text-white cursor-pointer' icon={faArrowLeft} size="lg" onClick={()=>setShowForm(false)} />
            <input className='contact-form-input-tb' type="text" placeholder="Full Name" {...register("Full Name", { required: true, maxLength: 18 })} />
            <input className='contact-form-input-tb' type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            <input className='contact-form-input-tb' type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
            <input className='contact-form-input-tb' type="text" placeholder="Subject" {...register("Subject", { max: 20, min: 3, maxLength: 19})} />
            <textarea className='p-2 bg-gradient-to-r from-[#002229] to-[#01586b] ring-2 ring-slate-300 rounded placeholder:text-white w-[75%] h-36' {...register("Message", { max: 200, min: 3, maxLength: 198})} placeholder='Maximum 200 character.' />
            <input  className='p-2  shadow-xl rounded text-white w-[25%] ring-2 ring-slate-300' type="submit" />
        </form>
    );
}