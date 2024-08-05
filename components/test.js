import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { PuffLoader } from "react-spinners";

export const ContactForm = (props) => {
    const [submitting, setSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log(data)
        await setSubmitting(true)
        const url = 'https://theroguepixxel.com/waapi/contact_submission'
        const requestOptions = {
            method: 'POST',
            mode: "no-cors",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: Object.entries(data).map(([k, v]) => { return k + '=' + v }).join('&')
        };
        await fetch(url, requestOptions)
            .then(async response => {
                await setSubmitting(false)
                await setFormSubmitted(true)
            })
            .catch(async error => {
                await setSubmitting(false)
            })
    }

    console.log(errors);
    return (
        <div className="relative">
            {
                submitting && <div className="absolute w-full h-full bg-white bg-opacity-50 inset-0 flex items-center justify-center" style={{ zIndex: 999 }}>
                    <PuffLoader color="#29ce79" />
                </div>
            }
            <h3 className="font-primary text-xl text-left  text-grey inline-block pb-2 border-b-2 mb-5 border-light">
                Leave us your message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("uid", { required: true })}
                    className="w-full relative border border-secondary rounded-sm transition-colors focus-within:text-dark focus-within:border-accent items-center mt-1 group px-4 py-2 text-base lg:text-lg"
                    name="uid" type="text" required="" hidden={true} value="test" />
                <div className="w-full flex flex-wrap">
                    <div className="w-full relative input_group">
                        <input
                            className="w-full relative border border-light transition-colors focus-within:text-accent focus-within:border-accent items-center mt-1 group px-4 pt-3 pb-2.5 rounded"
                            placeholder=" "
                            disabled={formSubmitted || submitting}
                            name="name" type="text" {...register("name", { required: true })} />
                        <label htmlFor="name"
                            className="floating bg-white font-primary text-sm mt-1 px-1 pl-2 text-left block">Name:</label>
                    </div>
                    <span className="text-xs text-red-500">&nbsp; {errors.name && <span>Please enter your Name.</span>}</span>
                    <div className="w-full relative input_group mt-1.5">
                        <input
                            className="w-full relative border border-light transition-colors focus-within:text-accent focus-within:border-accent items-center mt-1 group px-4 pt-3 pb-2.5 rounded"
                            placeholder=" "
                            disabled={formSubmitted || submitting}
                            name="email" type="text" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        <label htmlFor="email"
                            className="floating bg-white font-primary text-sm mt-1 px-1 pl-2 text-left block">Email:</label>
                    </div>
                    <span className="text-xs text-red-500">&nbsp; {errors.email && <span className="text-xs text-red-500">Please enter your valid Email.</span>}</span>
                    <div className="w-full relative md:space-x-4 flex flex-col md:flex-row">
                        <div className="w-full md:flex-1 relative input_group mt-1.5">
                            <div className="relative w-full">
                                <input
                                    className="w-full relative border border-light transition-colors focus-within:text-accent focus-within:border-accent items-center mt-1 group px-4 pt-3 pb-2.5 rounded"
                                    placeholder=" "
                                    disabled={formSubmitted || submitting}
                                    name="phone" type="tel" {...register("phone", { required: true, minLength: 10, maxLength: 10 })} />
                                <label htmlFor="phone"
                                    className="floating bg-white font-primary text-sm mt-1 px-1 pl-2 text-left block">Phone:</label>
                            </div>
                            <span className="text-xs text-red-500">&nbsp; {errors.phone && <span className="text-xs text-red-500">Please enter your Phone Number.</span>}</span>
                        </div>
                        <div className="w-full md:flex-1 relative input_group mt-1.5">
                            <div className="w-full relative">
                                <select
                                    className="w-full relative bg-white focus:ring-0 border border-light transition-colors focus-visible:outline-none focus-within:text-accent focus-within:border-accent items-center mt-1 group px-4 pt-3 pb-3.5 rounded"
                                    placeholder=" "
                                    disabled={formSubmitted || submitting}
                                    name="purpose" type="text" {...register("purpose", { required: true })}>
                                    <option value="General">General Inquiry</option>
                                    <option value="Business Proposition">Business Proposition</option>
                                    <option value="Service Related">Service Related</option>
                                </select>
                                <label htmlFor="purpose"
                                    className="floating bg-white font-primary text-sm mt-1 px-1 pl-2 text-left block">Purpose:</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full relative input_group mt-1.5">
                        <input
                            className="w-full relative border border-light transition-colors focus-within:text-accent focus-within:border-accent items-center mt-1 group px-4 pt-3 pb-2.5 rounded"
                            placeholder=" "
                            disabled={formSubmitted || submitting}
                            name="city" type="text" {...register("city", { required: false })} />
                        <label htmlFor="city"
                            className="floating bg-white font-primary text-sm mt-1 px-1 pl-2 text-left block">City / Town:</label>
                    </div>
                    <span className="text-xs text-red-500">&nbsp; </span>
                    <div className="w-full relative input_group mt-1.5">
                        <input
                            className="w-full relative border border-light transition-colors focus-within:text-accent focus-within:border-accent items-center mt-1 group px-4 pt-3 pb-2.5 rounded"
                            placeholder=" "
                            disabled={formSubmitted || submitting}
                            name="state" type="text" {...register("state", { required: true })} />
                        <label htmlFor="state"
                            className="floating bg-white font-primary text-sm mt-1 px-1 pl-2 text-left block">State:</label>
                    </div>
                    <span className="text-xs text-red-500">&nbsp; {errors.state && <span className="text-xs text-red-500">Please enter your State.</span>}</span>
                    <div className="w-full relative input_group mt-1.5">
                        <textarea
                            className="w-full relative border border-light transition-colors focus-within:text-accent focus-within:border-accent items-center mt-1 group px-4 pt-3 pb-2.5 rounded"
                            placeholder=" "
                            disabled={formSubmitted || submitting}
                            name="message" {...register("message", { required: true })} />
                        <label
                            className="floating bg-white font-primary text-sm mt-1 px-1 pl-2 text-left block">Message:</label>

                    </div>
                    <span className="text-xs text-red-500">&nbsp; {errors.message && <span className="text-xs text-red-500">Please enter your message.</span>}</span>
                    <div className="w-full mt-3 flex items-center">
                        <button type="submit" disabled={formSubmitted || submitting} className="rounded font-primary text-base px-5 py-2.5 text-white bg-grey border border-grey hover:bg-transparent hover:text-grey transition-colors">Send</button>
                        {
                            formSubmitted && <p className="flex-1 text-base text-center text-primary px-4">We have received your message, We will get back to you soon.</p>
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}