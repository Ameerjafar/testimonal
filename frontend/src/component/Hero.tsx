import AnyPlatform from "./AnyPlatform"
import { AppBar } from "./AppBar"
import CollectTestimonial from "./CollectTestimonial"
import TrustedPartners from "./pages/TrustedPartners"
import WebsiteFeature from "./WebsiteFeature"
import Footer from './Footer'
export const Hero = () => {
    return (
        <div>
            <AppBar />
            <div className = 'pt-16 font-bold text-2xl md:text-4xl lg:text-5xl'>
                <div className = 'flex justify-center'>
                    Get testimonials from your
                </div>
                <div className = 'flex justify-center'>
                    Customers with ease
                </div>
            </div>
            <div className = 'mx-auto max-w-4xl pt-5 text-center text-xl text-gray-600'>
                <div className = 'flex justify-center p-1'>
                    Collecting testimonials is hard, we get it! So we built Testimonials in minutes, you can collect text
                    and video testimonials from your customers with no need for a developer or website hosting.
                </div>
            </div>
            <div className = 'flex justify-center p-2 space-x-5'>
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
            <WebsiteFeature />
            <AnyPlatform />
            <CollectTestimonial />
            <Footer />
        </div>
    )
}