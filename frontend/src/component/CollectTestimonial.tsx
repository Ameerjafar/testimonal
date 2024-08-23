const CollectTestimonial = () => {
    return (
        <div className = 'bg-purple-50 mt-20 h-50 p-20'>
            <p className = 'flex justify-center text-5xl opacity-90 font-bold pt-10'>Ready to collect testimonials?</p>
            <p className = 'flex justify-center text-gray-500 text-lg pt-7 font-md'>We are loved by Fortune 500 companies, early-stage startups, marketing</p>
            <p className = 'flex justify-center text-gray-500 text-lg pt-1 font-md'>agencies, real estate agents, freelancers, and many more. Your customers'</p>
            <p className = 'flex justify-center text-gray-500 text-lg pt-1 font-md pb-4'>testimonials are the best social proof you can get! Get started now 👇</p>
            <div className = 'flex justify-center space-x-10'>
                <div className = 'flex space-x-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-green-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                    <p>No coding skill required.</p>
                </div>
                <div className = 'flex space-x-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-green-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>Start in under 2 minutes</div>
                </div>
            </div>
            <div className = 'flex justify-center space-x-7 pt-4'>
                <button className = 'w-60 text-sm h-10 bg-blue-700 text-white font-semibold rounded-lg hover:scale-110'>Get started with Free credits</button>
                <button className = 'border-blue-400 border-2 w-40 rounded-lg font-semibolg hover:scale-110'>Talk to us</button>
            </div>
        </div>
    )
}
export default CollectTestimonial;