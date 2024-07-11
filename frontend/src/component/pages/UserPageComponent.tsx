import { useNavigate } from "react-router-dom"
export const UserPageComponent = () => {

    const navigate = useNavigate();
    return (
        <div>
            <div className = 'min-h-screen bg-gray-100'>
                <div>
                    <div className = 'flex justify-between'>
                        <button className = 'flex space-x-2' onClick = {() => {navigate('/')}}>
                            <img loading="lazy" className = 'h-10' src="https://testimonial.to/static/media/logo-dark.8447f219.svg" alt="Logo"></img>
                        </button>
                        <div className="p-2">
                            <div className = 'w-10 h-10 rounded-full bg-gray-400 text-center pt-2 font-bold'>AJ</div>
                        </div>
                    </div> 
                </div>
                <div className = 'flex'>
                    <div className = 'p-10 pb-0'>
                        <div className = 'p-52 pt-36 pr-0'>
                            <div className = 'pb-3'>
                                <div className = 'w-28 text-sm p-2 bg-green-200 text-center rounded-lg font-bold text-slate-700'>8 mins demo</div>
                            </div>
                            <div className = 'flex space-x-24'>
                                <div className = 'text-3xl font-semibold pb-2'>
                                    Here's a quick demo for you 👉
                                </div>
                            </div>
                            <div className = 'text-gray-500 pb-2'>
                                You will find everything you need to get started to collect testimonials
                            </div>
                            <div className = 'text-gray-500 pb-2'>
                                and build a wall of love
                            </div>
                            <button className = 'w-24 h-8 text-white bg-gray-500 hover:bg-gray-600 rounded-md'>Dismiss</button>
                        </div>
                    </div>
                    <div className='pt-32' >
                        <iframe 
                            className='mx-auto rounded-lg'
                            src="https://www.youtube.com/embed/a-qT9pbOHkg?enablejsapi=1&origin=https%3A%2F%2Ftestimonial.to&widgetid=5" 
                            width="532" 
                            height="320"
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"> 
                        </iframe>
                    </div> 
                </div>
                <div className = 'px-40 pl-64'>
                    <hr className = 'text-gray-800'></hr>
                </div>
                <div className = 'pl-64'>
                    <div className = 'text-4xl font-bold pt-5'>Overview</div>
                    <div className = 'flex p-2 pl-0 space-x-10'>
                        <div className = 'w-72 h-24 bg-white h-8 border-4 p-4 border-white rounded-lg'>videos</div>
                        <div className = 'w-72 h-24 bg-white h-8 border-4 p-4 border-white rounded-lg'>video credits</div>
                    </div>
                </div>
                <div className = ''>
                    <div className = 'flex justify-between pr-40 pl-64 pb-40'>
                        <div className = 'text-4xl font-bold pt-2'>Spaces</div>
                        <button className = 'bg-blue-500 hover:bg-blue-600 rounded-md text-white p-2 font-semibold'>+ Create a new space</button>
                    </div>
                </div>
            </div>
        </div>
    )
}