import React, { useState } from 'react'
import {useEffect} from 'react'
import axios from 'axios'

const Tugas11 = () => {

    const[data,setData] = useState(null)

    useEffect( () =>{
    
        axios.get('https://backendexample.sanbercloud.com/api/student-scores')
        .then((res) => {
            
            let data = res.data
            console.log(data)

            let resultData = data.map((e) =>{
                let{
                    course,
                    name,
                    score,
                } =e
                return {
                    course,
                    name,
                    score,
                }
            })

            setData([...resultData])
        })
        .catch((err) =>{

        })

    }, [])


    const handleIndexScore = (x) => {
        if (x >= 80) {
            return "A"
        } else if( x >= 70 && x<80) {
            return "B"
        } else if( x >= 60 && x<70) {
            return "C"
        } else if( x >= 50 && x<60) {
            return "D"
        }else{
            return "E"
        }
    }

return(

    <>
        <div className="w-1/2 mt-10 mb-5 mx-auto overflow-x-auto relative shadow-md sm:rounded-lg">
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
                    { handleIndexScore(res.score)  }
                    </td>
                </tr>
                    </>
                    )
                })}
                
                </tbody>
            </table>
            </div>
    </>



    // <div>
    //     <p>List</p>
    //     <ul>
    //         
    //     </ul>
    // </div>
    )
}

export default Tugas11