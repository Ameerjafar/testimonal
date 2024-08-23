import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const product: string[] = [
        "Our Wall of Love", 
        "Chrome extension", 
        "Slack app", 
        "Hopin app", 
        "Pricing",
        "Features",
        "Integrations",
        "Help center"
    ]
    const company: string[] = [
        "Our resources",
        "Tutorials",
        "Customer stories",
        "Join affiliate program",
        "Privacy policy",
        "Terms of Service",
        "Cookie policy",
        "DPA (GDPR)"
    ]
    const customers: string[] = [
        "Agencies",
        "B2B companies",
        "Course creators",
        "eCommerce",
        "Consumer apps"
    ]
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
                    {
                        product.map((prod, ind) => {
                            return <p key={ind} className = 'pl-12 text-gray-500'>{prod}</p>
                        })
                    }
                </div>
                <div className = 'pl-5'>
                    {
                        company.map((com, ind) => {
                            return <p key={ind} className = 'pl-12 text-gray-500'>{com}</p>
                        })
                    }
                </div>
                <div className = 'pl-1'>
                    {
                        customers.map((cus, ind) => {
                            return <p key = {ind} className = 'pl-12 text-gray-500'>{cus}</p>
                        })
                    }
                </div>
                <a className = 'pl-24' href = "https://www.youtube.com/watch?v=28FX7u51v2U&feature=youtu.be">
                    <img className = 'rounded-lg w-52' src = "https://imagedelivery.net/pcavElAZUUevXK53Dl4vWA/27ef1a67-9a88-4276-cc9d-21270c344100/public"></img>
                </a>
            </div>
        </div>
    )
}
export default Footer;