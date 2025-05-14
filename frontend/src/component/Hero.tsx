import AnyPlatform from "./AnyPlatform";
import { AppBar } from "./AppBar";
import CollectTestimonial from "./CollectTestimonial";
import TrustedPartners from "./pages/TrustedPartners";
import WebsiteFeature from "./WebsiteFeature";
import Footer from './Footer';

export const Hero = () => {
    return (
        <div className = ''>
            <AppBar />
            <div className="pt-20 px-4 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                <div>Get testimonials from your</div>
                <div>Customers with ease</div>
            </div>

            <div className="mx-auto max-w-4xl px-4 pt-5 text-center text-base sm:text-lg md:text-xl text-gray-600">
                Collecting testimonials is hard, we get it! So we built Testimonials in minutes —
                you can collect text and video testimonials from your customers with no need for a developer or website hosting.
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 px-4">
                <button className="h-12 w-44 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">
                    Try FREE now
                </button>
                <button className="h-12 w-56 rounded-lg font-semibold border-2 border-blue-600 hover:border-blue-800 text-gray-600">
                    Talk to us
                </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 pt-4 text-sm px-4 text-center">
                <span className="text-gray-600">Get started with free credits on us.</span>
                <button className="font-semibold underline underline-offset-4">See our pricing</button>
            </div>

            <div className="flex justify-center pt-6 px-4">
                <video
                    className="rounded-md w-full max-w-4xl"
                    src="https://stream.mux.com/Woifb2gxZArCOh2z1aPMW901UdR9pSeF5Dhx6kaEVZYc/high.mp4"
                    controls
                />
            </div>
            <TrustedPartners />
            <WebsiteFeature />
            <AnyPlatform />
            <CollectTestimonial />
            <Footer />
        </div>
    );
};
