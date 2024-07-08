import { DashboardCard } from "./DashboardCard"


export const Dashboard = () => {
    return (
        <div className = 'bg-gray-200 min-h-screen p-5'>
            <div className = 'flex justify-center items-center'>
                <div className = 'flex bg-white rounded-lg p-3'>
                    <div className = 'h-96 w-1/2'>
                        <DashboardCard />
                    </div>
                    <div className = 'h-4/5 p-32 pr-2 pt-6 pl-0'>
                        <div className = 'flex justify-center text-3xl font-semibold pr-28'>
                            Create a new Space
                        </div>
                        <div className = 'text-gray-500 p-2 pr-24'>
                            <div className = 'flex justify-center'>
                                After the Space is created, it will generate a dedicated page for collecting
                            </div>
                            <div className = 'flex justify-center p-1 pr-16'>testimonials.</div>
                        </div>
                    <div>
                            <div className = 'flex p-2 pl-0'>
                                <p>Space name</p>
                                <p className = 'text-red-500'>*</p>
                            </div>
                            <input type = 'text' className = 'border border-black hover:border-blue-600 w-full p-1 rounded-lg border-gray-300'></input>
                        </div>
                        <div>
                            <div className = 'flex p-2 pl-0'>
                                <p>Header title</p>
                                <p className = 'text-red-500'>*</p>
                            </div>
                            <input type = 'text' placeholder="Would you like to give shoutout for xyz?" className = 'border border-black hover:border-blue-600 w-full p-1 rounded-lg border-gray-300'></input>
                        </div>
                        <div>
                            <div className = 'flex p-2 pl-0'>
                                <p>Your custom message</p>
                                <p className = 'text-red-500'>*</p>
                            </div>
                            <input type = 'textarea' placeholder="Write the warm welcome to the customers and give them simple direction on how to make the best testimonals" className = 'border border-black hover:border-blue-600 w-full rounded-lg border-gray-300 h-32'></input>
                        </div>
                        <div>
                            <div className = 'p-1'>Questions</div>
                            <div className = 'flex pb-2 space-x-1'>
                                <svg className = "h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="19" r="1" />  <circle cx="12" cy="5" r="1" /></svg>
                                <div className = 'border border-gray-300 rounded-lg w-full p-2'>Who are you/ what are you working on?</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-slate-700 hover:text-slate-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                            <div className = 'flex pb-2 space-x-1'>
                                <svg className = "h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="19" r="1" />  <circle cx="12" cy="5" r="1" /></svg>
                                <div className = 'border border-gray-300 rounded-lg w-full p-2'>Who are you/ what are you working on?</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-slate-700 hover:text-slate-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>

                            </div>
                            <div className = 'flex pb-4 space-x-1'>
                                <svg className = "h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="1" />  <circle cx="12" cy="19" r="1" />  <circle cx="12" cy="5" r="1" /></svg>
                                <div className = 'border border-gray-300 rounded-lg w-full p-2'>How has [our product / service] helped you?</div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-slate-700 hover:text-slate-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 w-full rounded-md text-white h-12">Create new Space</button>
                    </div>
                </div>
            </div>
        </div>
    )
}