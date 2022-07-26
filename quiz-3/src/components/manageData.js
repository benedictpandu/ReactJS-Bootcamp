import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'


const ManageData = () =>{
    
    const{state, handleFunction} = useContext(GlobalContext);
    const {
      data, setData,
      fetchStatus, setFetchStatus,
      currentId, setCurrentId,
      input, setInput} = state
  
    const {
      handleDelete,
      handleSubmit,
      handleUpdate,
      handleDescription,
      handleInput,
      handleDescriptionTable,
      handlePrice,
      handleSize,
      fetchData
    } = handleFunction
  
    useEffect(() => {
      if (fetchStatus === true) {
        fetchData()
      }
  
    }, [fetchStatus, setFetchStatus, fetchData])


    return(
       <>
       <div className="w-10/12 mt-10 mb-5 mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-violet-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-3">
                    No
                    </th>
                    <th scope="col" className="py-3 px-3">
                    Name
                    </th>
                    <th scope="col" className="py-3 px-3">
                    Category
                    </th>
                    <th scope="col" className="py-3 px-3">
                    Description
                    </th>
                    <th scope="col" className="py-3 px-3">
                    Price
                    </th>
                    <th scope="col" className="py-3 px-3">
                    Rating
                    </th>
                    <th scope="col" className="py-3 px-3">
                    Release Year
                    </th>
                    <th scope="col" className="py-3 px-3">
                    Size
                    </th>
                    <th scope="col" className="py-3 px-3">
                    Android
                    </th>
                    <th scope="col" className="py-3 px-3">
                    IOS
                    </th>
                    <th scope="col" className="py-3 px-3">
                    Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {data !== null && data.map((res,index)=>{
                    return(
                    <> 
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td scope="row" className="py-4 px-3">
                        {index + 1}
                    </td>
                    <td className="py-4 px-3">
                        {res.name}
                    </td>
                    <td className="py-4 px-3">
                        {res.category}
                    </td>
                    <td className="py-4 px-3">
                        {handleDescriptionTable(res.description)}
                    </td>
                    <td className="py-4 px-3">
                        {handlePrice(res.price)}
                    </td>
                    <td className="py-4 px-3">
                        {res.rating}
                    </td>
                    <td className="py-4 px-3">
                        {res.release_year}
                    </td>
                    <td className="py-4 px-3">
                        {handleSize(res.size)}
                    </td>
                    <td className="py-4 px-3">
                        {res.is_android_app}
                    </td>
                    <td className="py-4 px-3">
                        {res.is_ios_app}
                    </td>
                    <td>
                    <button onClick={handleUpdate} value={res.id} className="font-medium text-black bg-white border-2 px-2 py-1 mx-2  rounded-md border-slate-300">Edit</button>
                    <button onClick={handleDelete} value={res.id} className="font-medium text-black bg-red-500 border-2  px-2 py-1 rounded-md border-slate-300">Delete</button>
                    </td>
                </tr>
                    </>
                        )
                    })}
                </tbody>
            </table>
            </div>
            <div className='w-10/12 mx-auto rounded-md mt-44 mb-36 p-10 shadow-lg'>
                <h2 className='mb-5 font-semibold text-2xl'>Create Data</h2>
            <form className='flex flex-col'  onSubmit={handleSubmit} >
               
                <h6 className='mt-3'>Gambar Data Game</h6><hr className='mb-3'/>
                <label>Image URL : </label>
                <input className='border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5' onChange={handleInput} value={input.image_url} name='image_url' />
                <h6 className='mt-3'>Data Game</h6><hr className='mb-3'/>
                <label>Name : </label>
                <input className='border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5' onChange={handleInput} value={input.name}  name='name' />
                <label>Category : </label>
                <input className='border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5' onChange={handleInput} value={input.category}  name='category' />
                <label>Description : </label>
                <input className='border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5' onChange={handleInput} value={input.description}  name='description' />
                <label>Price : </label>
                <input type={'number'} className='border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5' onChange={handleInput} value={input.price}  name='price' />
                <label>Rating : </label>
                <input type={'number'} className='border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5' onChange={handleInput} value={input.rating}  name='rating' />
                <label>Release : </label>
                <input type={'number'} min="2007" max="2022" className='border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5' onChange={handleInput} value={input.release_year} name='release_year' />
                <label>Size : </label>
                <input type={'number'} className='border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5' onChange={handleInput} value={input.size} name='size' />
                <h6 className='mt-3'>Compatible Device</h6><hr className='mb-3'/>
                <label>android : </label>
                <input type={"number"} className='border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5' onChange={handleInput} value={input.is_android_app} name='is_android_app' />
                <label>IOS : </label>
                <input type={"number"} className='border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5' onChange={handleInput} value={input.is_ios_app} name='is_ios_app' />
                
                <button className='border mt-5 bg-blue-700 border-blue-700 rounded-lg w-1/6 text-white p-2'><input type={'submit'} /></button>
            </form>   
            </div>
       </>
    )
}

export default ManageData