import Cookies from 'js-cookie';
import React, { useContext } from 'react'
import Header from '../components/Header'
import { GlobalContext } from '../context/GlobalContext';

const DashboardPage = () => {

    const {state} = useContext(GlobalContext);
    const {
      data,
    } = state;
  
    function greet() {
        const today = new Date();
        let h = today.getHours();
        if (h >= 4 && h < 11) {
            return "Good Morning"
        } else if (h >=11  && h < 17) {
            return "Good Afternoon"
        }else {
                return "Good Evening"
        }
    }

  return (
    <>
    
    <div className="flex flex-col w-full md:space-y-4">
            <Header/>
            <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
                <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
                {greet()}, {Cookies.get("userName")}
                </h1>
                <h2 className="text-md text-gray-400">
                Here's what's happening with your platform today.
                </h2>
                <div className="flex my-6 items-center w-full space-y-4  flex-col gap-3">
                <div className="w-full">
                    <div className="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
                    <a href="#" className="w-full h-full block">
                        <div className="flex items-center justify-between px-4 py-6 space-x-4">
                        <div className="flex items-center">
                            <p className="text-xl text-gray-700 dark:text-white ml-2 font-semibold border-b border-gray-200">
                            Vacancy Posted
                            </p>
                        </div>
                        <div className="border-b border-gray-200 mt-6 md:mt-0 text-black dark:text-white font-bold text-3xl">
                        {data !== null && data.length}
                        </div>
                        </div>
                        <div className="w-full h-3 bg-gray-100">
                        <div className="w-2/5 h-full text-center text-xs text-white bg-green-400">
                        </div>
                        </div>
                    </a>
                    </div>
                </div>
                <div className="flex w-full gap-6">
                    <div className="w-1/2">
                    <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                        <p className="text-2xl text-black dark:text-white font-bold">
                        {data !== null && data.filter(x => x.job_status == 1).length}
                        </p>
                        <p className="text-gray-400 text-sm">
                        Vacancy Open
                        </p>
                        <span className="rounded-full absolute p-4 bg-green-500 top-2 right-4">
                        </span>
                    </div>
                    </div>
                    <div className="w-1/2">
                    <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                        <p className="text-2xl text-black dark:text-white font-bold">
                        {data !== null && data.filter(x => x.job_status !== 1).length}
                        </p>
                        <p className="text-gray-400 text-sm">
                        Vacancy Closed
                        </p>
                        <span className="rounded-full absolute p-4 bg-red-600 top-2 right-4">
                        </span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    </div>
    </>
  )
}

export default DashboardPage