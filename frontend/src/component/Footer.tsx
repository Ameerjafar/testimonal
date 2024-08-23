import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className = 'bg-gray-50 pt-10 pr-32 pl-10'>
            <div className = 'flex justify-center space-x-32 pt-3 pr-36'>
                <button className = 'flex space-x-2' onClick = {() => {navigate('/')}}>
                        <img loading="lazy" className = 'h-10' src="https://testimonial.to/static/media/logo-dark.8447f219.svg" alt="Logo"></img>
                </button>

                <p className = 'font-semibold pl-24'>Products</p>
                <p className = 'font-semibold'>Company</p>
                <p className = 'font-semibold'>Customers</p>
                <p className = 'font-semibold'>Latest video</p>
            </div>
            <div className = 'flex pr-24'>
                <div>
                    <div className = 'pt-3 pl-20 text-gray-500'>The easiest solution to getting text</div>
                    <div className = 'pl-20 text-gray-500'> and video testimonials from your customers</div>
                </div>
                <div className = 'pl-4'>
                    <p className = 'pl-12 text-gray-500'>Our Wall of Love</p>
                    <p className = 'pl-12 text-gray-500'>Chrome extension</p>
                    <p className = 'pl-12 text-gray-500'>Slack app</p>
                    <p className = 'pl-12 text-gray-500'>Hopin app</p>
                    <p className = 'pl-12 text-gray-500'>Pricing</p>
                    <p className = 'pl-12 text-gray-500'>Features</p>
                    <p className = 'pl-12 text-gray-500'>Integrations</p>
                    <p className = 'pl-12 text-gray-500'>Help center</p>
                </div>
                <div className = 'pl-5'>
                    <p className = 'pl-12 text-gray-500'>Our resources</p>
                    <p className = 'pl-12 text-gray-500'>Tutorials</p>
                    <p className = 'pl-12 text-gray-500'>Customer stories</p>
                    <p className = 'pl-12 text-gray-500'>Join affiliate program</p>
                    <p className = 'pl-12 text-gray-500'>Privacy policy</p>
                    <p className = 'pl-12 text-gray-500'>Terms of Service</p>
                    <p className = 'pl-12 text-gray-500'>Cookie policy</p>
                    <p className = 'pl-12 text-gray-500'>DPA (GDPR)</p>
                </div>
                <div className = 'pl-1'>
                    <p className = 'pl-12 text-gray-500'>Agencies</p>
                    <p className = 'pl-12 text-gray-500'>B2B companies</p>
                    <p className = 'pl-12 text-gray-500'>Course creators</p>
                    <p className = 'pl-12 text-gray-500'>eCommerce</p>
                    <p className = 'pl-12 text-gray-500'>Consumer apps</p>
                </div>
                <a className = 'pl-24' href = "https://www.youtube.com/watch?v=28FX7u51v2U&feature=youtu.be">
                    <img className = 'rounded-lg w-52' src = "https://imagedelivery.net/pcavElAZUUevXK53Dl4vWA/27ef1a67-9a88-4276-cc9d-21270c344100/public"></img>
                </a>
            </div>
        </div>
    )
}
export default Footer;