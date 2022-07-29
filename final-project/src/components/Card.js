import React from 'react'
import { Link } from 'react-router-dom'
const Card = () => {
  return (
    <>
    <div className="flex justify-center">
    <div className="flex  flex-row max-w-xl rounded-lg bg-white shadow-lg">
        <div className="h-full w-1/4">
        <img className=" h-full object-cover w-48 rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
        </div>
        <div className="p-3 w-3/4 flex flex-col justify-start">
        <h5 className="text-gray-900 text-md md:text-xl font-medium mb-2">Card title</h5>
        <p className="text-gray-700 text-xs md:text-md mb-4">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </p>
        <div className='flex flex-col lg:flex-row justify-between'>
        <p className="text-gray-600 text-xs md:text-md">Last updated <span className='text-yellow-300'>3 mins ago</span> </p>
        
        <Link to='/' className='bg-yellow-300 text-white hover:bg-yellow-400 mt-2 lg:mt-0 p-1 md:p-2 text-xs rounded-md'>Read More</Link>
        
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Card