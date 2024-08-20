import { AppBar } from "./AppBar"
import TrustedPartners from "./pages/TrustedPartners"
export const Hero = () => {
    return (
        <div>
            <AppBar />
            <div className = 'pt-16 text-5xl font-bold'>
                <div className = 'flex justify-center md:container md:mx-auto'>
                    Get testimonials from your
                </div>
                <div className = 'flex justify-center'>
                    Customers with ease
                </div>
            </div>
            <div className = 'pt-5 text-center sm:text-lg md:text-xs md:container md:mx-auto lg:text-xl text-gray-600'>
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
            <div className = 'flex justify-center pt-6'>
                <video className = 'rounded-md w-3/4 h-1/2' src = "https://stream.mux.com/Woifb2gxZArCOh2z1aPMW901UdR9pSeF5Dhx6kaEVZYc/high.mp4"></video>
            </div>
            <TrustedPartners />
        </div>
    )
}