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
    ];
    const company: string[] = [
        "Our resources",
        "Tutorials",
        "Customer stories",
        "Join affiliate program",
        "Privacy policy",
        "Terms of Service",
        "Cookie policy",
        "DPA (GDPR)"
    ];
    const customers: string[] = [
        "Agencies",
        "B2B companies",
        "Course creators",
        "eCommerce",
        "Consumer apps"
    ];

    return (
        <div className="bg-gray-50 p-6 md:px-20 md:py-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-6 md:space-y-0">
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <button className="flex items-center" onClick={() => navigate("/")}>
                        <img
                            loading="lazy"
                            className="h-10"
                            src="https://testimonial.to/static/media/logo-dark.8447f219.svg"
                            alt="Logo"
                        />
                    </button>
                    <div className = 'md:w-52'>
                    <p className="text-gray-500 text-center md:text-left ">
                        The easiest solution to getting text and video testimonials from your customers
                    </p>
                    </div>
                </div>
                <div className="text-center md:text-left">
                    <p className="font-semibold mb-2">Products</p>
                    {product.map((prod, ind) => (
                        <p key={ind} className="text-gray-500">{prod}</p>
                    ))}
                </div>

                <div className="text-center md:text-left">
                    <p className="font-semibold mb-2">Company</p>
                    {company.map((com, ind) => (
                        <p key={ind} className="text-gray-500">{com}</p>
                    ))}
                </div>

                <div className="text-center md:text-left">
                    <p className="font-semibold mb-2">Customers</p>
                    {customers.map((cus, ind) => (
                        <p key={ind} className="text-gray-500">{cus}</p>
                    ))}
                </div>

                <div className="flex justify-center md:justify-end">
                    <a href="https://www.youtube.com/watch?v=28FX7u51v2U&feature=youtu.be" className="block">
                        <img
                            className="rounded-lg w-64"
                            src="https://imagedelivery.net/pcavElAZUUevXK53Dl4vWA/27ef1a67-9a88-4276-cc9d-21270c344100/public"
                            alt="Latest video"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
