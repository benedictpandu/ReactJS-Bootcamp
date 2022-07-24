import React, { useContext } from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalContext'
import {Link} from 'react-router-dom'

const Tugas15list = ()=>{
    
    const{state, handleFunction} = useContext(GlobalContext);
  const {
    data, setData,
    fetchStatus, setFetchStatus,
    currentId, setCurrentId,
    input, setInput} = state

  const {
    handleDelete,
    handleUpdate,
    handleIndexScore,
    fetchData
  } = handleFunction

  useEffect(() => {
    if (fetchStatus === true) {
      fetchData()
    }

  }, [fetchStatus, setFetchStatus, fetchData])
    return(
        <div className="w-1/2 mt-10 mb-5 mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
            <Link to="/create"><button className="bg-violet-500 my-5 p-2 text-white rounded">Create</button></Link>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-violet-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 px-6">
                    No
                    </th>
                    <th scope="col" className="py-3 px-6">
                    Nama
                    </th>
                    <th scope="col" className="py-3 px-6">
                    Mata Kuliah
                    </th>
                    <th scope="col" className="py-3 px-6">
                    Nilai
                    </th>
                    <th scope="col" className="py-3 px-6">
                    Index Nilai
                    </th>
                    <th scope="col" className="py-3 px-6">
                    Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {data !== null && data.map((res,index)=>{
                    return(
                    <> 
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td scope="row" className="py-4 px-6">
                    {index + 1}
                    </td>
                    <td className="py-4 px-6">
                    {res.name}
                    </td>
                    <td className="py-4 px-6">
                    {res.course}
                    </td>
                    <td className="py-4 px-6">
                    {res.score}
                    </td>
                    <td className="py-4 px-6">
                    {handleIndexScore(res.score)}
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
    )
}

export default Tugas15list