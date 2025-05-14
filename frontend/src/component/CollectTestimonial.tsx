const CollectTestimonial = () => {
    return (
        <div className="bg-purple-50 mt-20 p-6 md:p-20">
            <p className="text-center text-3xl md:text-5xl opacity-90 font-bold pt-10">
                Ready to collect testimonials?
            </p>
            <p className="text-center text-gray-500 text-md md:text-lg pt-7 font-medium">
                We are loved by Fortune 500 companies, early-stage startups, marketing
            </p>
            <p className="text-center text-gray-500 text-md md:text-lg pt-1 font-medium">
                agencies, real estate agents, freelancers, and many more. Your customers'
            </p>
            <p className="text-center text-gray-500 text-md md:text-lg pt-1 font-medium pb-4">
                testimonials are the best social proof you can get! Get started now 👇
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-10 pt-2">
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" className="size-6 text-green-400">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p>No coding skill required.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" className="size-6 text-green-400">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p>Start in under 2 minutes</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-7 pt-6">
                <button className="w-60 text-sm h-10 bg-blue-700 text-white font-semibold rounded-lg hover:scale-110 transition">
                    Get started with Free credits
                </button>
                <button className="border-blue-400 border-2 w-40 h-10 rounded-lg font-semibold hover:scale-110 transition">
                    Talk to us
                </button>
            </div>
        </div>
    );
};

export default CollectTestimonial;
