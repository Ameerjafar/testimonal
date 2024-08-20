import { useNavigate } from "react-router-dom"

export const AppBar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className = 'flex justify-between pt-4 pr-2'>
                <button className = 'flex space-x-2' onClick = {() => {navigate('/')}}>
                    <img loading="lazy" className = 'h-10' src="https://testimonial.to/static/media/logo-dark.8447f219.svg" alt="Logo"></img>
                </button>
                <div className = 'hidden md:block  flex space-x-10 font-semibold text-slate-700 text-lg'>
                    <button>Customers</button>
                    <button>Features</button>
                    <button>Integration</button>
                    <button>Pricing</button>
                </div>
                <div className = 'flex space-x-10'>
                    <button className = 'font-medium text-slate-700' onClick = {() => {
                        navigate('/signin');
                    }}>Sign in</button>
                    <button className = 'bg-blue-600 hover:bg-blue-700 rounded-lg w-20 h-12 text-white' onClick = {() => {
                        navigate('/signup');
                    }}>Sign up</button>
                </div>
            </div>
        </div>
    )
}