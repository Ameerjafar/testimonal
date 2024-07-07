export const AppBar = () => {
    return (
        <div>
            <div className = 'flex justify-between pt-4 pr-2'>
                <div className = 'flex space-x-2'>
                    <img loading="lazy" className = 'h-10' src="https://testimonial.to/static/media/logo-dark.8447f219.svg" alt="Logo"></img>
                </div>
                <div className = 'flex space-x-10 font-semibold text-slate-700 text-lg'>
                    <button>Customers</button>
                    <button>Features</button>
                    <button>Integration</button>
                    <button>Pricing</button>
                </div>
                <div className = 'flex space-x-10'>
                    <button className = 'font-medium text-slate-700'>Sign in</button>
                    <button className = 'bg-blue-600 hover:bg-blue-700 rounded-lg w-20 h-12 text-white'>Sign up</button>
                </div>
            </div>
        </div>
    )
}