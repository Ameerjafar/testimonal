import { useNavigate } from "react-router-dom";
import { AppBar } from "../AppBar"
export const Signin = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className = 'bg-slate-100 min-h-screen'>
                <AppBar />
                <div className = 'p-32'>
                    <div className = 'flex justify-center text-4xl font-bold pb-2'>Welcome Back 👋</div>
                    <div className = 'flex justify-center p-10'>
                        <div className = 'bg-white h-58 rounded-lg p-10'>
                            <p className = 'text-gray-600 pl-20 pb-2 font-semibold'>Signin with your Email</p>
                            <div>
                                <div className = 'flex p-2 pl-0'>
                                    <p className = 'text-gray-500'>Email</p>
                                    <p className = 'text-red-500'>*</p>
                                </div>
                                <input type = 'text' placeholder="you@gmail.com" className = 'border border-black hover:border-blue-600 w-80 p-1'></input>
                            </div>
                            <div className = 'pb-4'>
                                <div className = 'flex p-2 pl-0'>
                                    <p className = 'text-gray-500'>password</p>
                                    <p className = 'text-red-500'>*</p>
                                </div>
                                <input type = 'text' placeholder="Password" className = 'border border-black hover:border-blue-600 w-80 p-1'></input>
                            </div>
                            <button className = 'text-white bg-blue-600 hover:bg-blue-700 rounded-lg p-2 w-80'>Sign up</button>
                            <div className = 'flex pl-10 pt-2 space-x-2'>
                                <p>Don't have the account?</p>
                                <button className = 'underline underline-ofset-2 text-blue-500' onClick = {() => {
                                    navigate('/signup');
                                }}>Signup</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}