import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
            <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
            <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            <input type="password" placeholder="Password" {...register("Password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i })} />
            <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
            <input type="checkbox" placeholder="Gender" {...register("Gender", {})} />
            <input type="checkbox" placeholder="I have read and accept the terms of the Membership Agreement." {...register("I have read and accept the terms of the Membership Agreement.", { required: true })} />

            <input type="submit" />
        </form>
    );
}