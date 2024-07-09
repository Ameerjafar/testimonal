import { useNavigate } from "react-router-dom"
import { AppBar } from "../AppBar"
import axios from "axios";
import { useState } from "react";
export const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler = async () => {
        try {
            if(email !== "" && password !== null) {
                await axios.post('http://localhost:3000/users/signup', {
                    firstName,
                    email,
                    password
                })
                navigate('/signin');
            }
        }catch(error) {
            console.log("You are not in minirequirement");
        }
    }
    return (
        <div>
            <div className = 'bg-slate-100 min-h-screen'>
                <AppBar />
                <div className = 'p-32'>
                    <div className = 'flex justify-center text-4xl font-bold pb-2'>Sign up for free 🤗</div>
                    <div className = 'flex justify-center text-xl text-gray-600 pl-2'>You will get 2 video and 10 text testimonial credits for FREE!</div>
                    <div className = 'flex justify-center p-10'>
                        <div className = 'bg-white h-58 rounded-lg p-10'>
                            <p className = 'text-gray-600 pl-16 pb-2 font-semibold'>Register with your Email</p>
                            <div className = 'flex text-gray-500 space-x-2'>
                                <input type = 'checkbox'></input>
                                <p>Please accept all the terms and conditions</p>
                                <p className = 'text-red-500'>*</p>
                            </div>
                            <div>
                                <div className = 'flex p-2 pl-0'>
                                    <p className = 'text-gray-500'>First name</p>
                                    <p className = 'text-red-500'>*</p>
                                </div>
                                <input type = 'text' placeholder="Your first name" onChange = {(e) => {setFirstName(e.target.value)}} className = 'border border-black hover:border-blue-600 w-80 p-1'></input>
                            </div>
                            <div>
                                <div className = 'flex p-2 pl-0'>
                                    <p className = 'text-gray-500'>Email</p>
                                    <p className = 'text-red-500'>*</p>
                                </div>
                                <input type = 'text' placeholder="you@gmail.com" onChange = {(e) => {setEmail(e.target.value)}} className = 'border border-black hover:border-blue-600 w-80 p-1'></input>
                            </div>
                            <div className = 'pb-4'>
                                <div className = 'flex p-2 pl-0'>
                                    <p className = 'text-gray-500'>password</p>
                                    <p className = 'text-red-500'>*</p>
                                </div>
                                <input type = 'password' placeholder="Password" onChange = {(e) => {setPassword(e.target.value)}} className = 'border border-black hover:border-blue-600 w-80 p-1'></input>
                            </div>
                            <button className = 'text-white bg-blue-600 hover:bg-blue-700 rounded-lg p-2 w-80' onClick = { submitHandler }>Sign up</button>
                            <div className = 'flex pl-10 pt-2 space-x-2'>
                                <p>Already have an account?</p>
                                <button className = 'underline underline-ofset-2 text-blue-500' onClick = {() => {
                                    navigate('/signin');
                                }}>Signin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}