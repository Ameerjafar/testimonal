import { AppBar } from "./AppBar"
import { useNavigate } from "react-router-dom"
export const CenterContent = () => {
    const navigate = useNavigate();
    return (
        <div>
            <AppBar />
            <div className = 'p-32 pb-0 text-6xl font-medium'>
                <div className = 'flex justify-center'>
                    Get testimonials from your
                </div>
                <div className = 'flex justify-center'>
                    Customers with ease
                </div>
            </div>
            <div className = 'pt-10 text-xl text-gray-600'>
                <div className = 'flex justify-center p-1'>Collecting testimonials is hard, we get it! So we built Testimonials in minutes, you can collect text</div>
                <div className = 'flex justify-center p-1 pb-3'>and video testimonials from your customers with no need for a developer or website hosting.</div>
            </div>
            <div className = 'flex justify-center p-2 space-x-4'>
                <button className = 'h-12 w-36 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold text-center'>Try FREE now</button>
                <button className = 'h-12 w-52 rounded-lg font-semibold text-center border-2 border-blue-600 hover:border-blue-800 text-gray-600'>Talk to us</button>
            </div>
            <div className = 'flex justify-center text-sm'>
                <div className = 'text-gray-600'>
                    Get started with free credits on us.
                </div>
                <button className = 'font-semibold underline underline-offset-5'>See our pricing</button>
            </div>
        </div>
    )
}