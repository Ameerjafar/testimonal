interface props {
    question1: string,
    question2: string,
    question3: string
}
export const DashboardCard: React.FC<props> = ({ question1, question2, question3}) => {
    return (
        <div className = 'flex justify-center p-8'>
            <div className = 'border border-gray-300 border-solid rounded-lg w-96 p-5'>
                <div className = 'flex justify-center p-2'>
                    <div>
                        <img src = "https://testimonial.to/static/media/just-logo.040f4fd2.svg" alt='logo' className = 'flex justify-center h-20 pl-28'></img>
                        <div className = 'text-3xl font-semibold text-slate-700'>Headers goes over here</div>
                    </div>
                </div>
                <div className = 'flex justify-center text-gray-400 pb-2'>Your customer Message goes over here...</div>
                <div className = 'font-semibold text-slate-700'>QUESTIONS</div>
                <div className = 'p-2'>
                    <div className = 'flex space-x-2 text-sm'>
                        <div>*</div>
                        <div>{question1}</div>
                    </div>
                    <div className = 'flex space-x-2 text-sm'>
                        <div>*</div>
                        <div>{question2}</div>
                    </div>
                    <div className = 'flex space-x-2 text-sm'>
                        <div>*</div>
                        <div>{question3}</div>
                    </div>
                </div>
                <div className = 'p-2'>
                    <div className = 'flex space-x-2 justify-center h-12 w-94 text-center bg-blue-500 hover:bg-blue-600 rounded-md p-3 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <button>Record a video</button>
                    </div>
                </div>
                <div className = 'p-2'>
                    <div className = 'flex space-x-2 justify-center pr-6 h-12 w-94 text-center bg-slate-700 hover:bg-slate-800 rounded-md p-3 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>

                        <button>Send in text</button>
                    </div>
                </div>
            </div>
        </div>
    )
}