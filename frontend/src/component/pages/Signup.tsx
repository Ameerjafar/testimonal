import { AppBar } from "../AppBar"


export const Signup = () => {

    return (
        <div>
            <div className = 'bg-slate-100 h-screen'>
                <AppBar />
                <div className = 'p-32'>
                    <div className = 'flex justify-center text-4xl font-bold pb-2'>Sign up for free 🤗</div>
                    <div className = 'flex justify-center text-xl text-gray-600'>You will get 2 video and 10 text testimonial credits for FREE!</div>
                    <div className = 'flex justify-center p-10'>
                        <div className = 'bg-white h-58 rounded-lg p-10'>
                            <p className = 'text-gray-600'>Register with your Email</p>
                            <input type = 'checkbox'></input>
                            <p>I agree to the Testimonial Terms of Service and I'm aware my personal data is processed in accordance with our Privacy Policy. Please read it carefully.</p>
                            <div>
                                <div className = 'flex'>
                                    <p>First name</p>
                                    <p className = 'text-red-500'>*</p>
                                </div>
                                <input type = 'text' placeholder="Your first name" className = 'border border-black w-58'></input>
                            </div>
                            <div>
                                <div className = 'flex'>
                                    <p>Email</p>
                                    <p className = 'text-red-500'>*</p>
                                </div>
                                <input type = 'text' placeholder="you@gmail.com" className = 'border border-black'></input>
                            </div>
                            <div className = 'pb-2'>
                                <div className = 'flex'>
                                    <p>password</p>
                                    <p className = 'text-red-500'>*</p>
                                </div>
                                <input type = 'text' placeholder="Password" className = 'border border-black'></input>
                            </div>
                            <button className = 'text-white bg-blue-600 hover:bg-blue-700 rounded-lg p-2'>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}