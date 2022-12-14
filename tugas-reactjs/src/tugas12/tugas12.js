import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'

const Tugas12 = () =>{
  const [data, setData] = useState(null)

  const [input, setInput] = useState(
    {
      name: "",
      course:"",
      score :""

    }
  )

  const [fetchStatus, setFetchStatus] = useState(true)

  useEffect(() => {
    if (fetchStatus === true) {
      axios.get("https://backendexample.sanbercloud.com/api/student-scores")
        .then((res) => {
          setData([...res.data])
        })
        .catch((error) => {
        })
      setFetchStatus(false)
    }

  }, [fetchStatus, setFetchStatus])


  const handleInput = (event) => {
    let name = event.target.name
    let value = event.target.value

    if (name === "name") {
      setInput({ ...input, name: value })
    }else if(name === "course"){
        setInput( {...input, course : value} )
    }else if(name === "score"){
        setInput( {...input, score : value} )
        }
    }


  const handleSubmit = (event) => {
    event.preventDefault()

    let {
      name,
      course,
      score,
    } = input


    axios.post('https://backendexample.sanbercloud.com/api/student-scores', { name,course,score })
      .then((res) => {
        console.log(res)
        setFetchStatus(true)
      })


    setInput(
      {
        name: "",
        course:"",
        score :""
      }
    )
  }

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

  return (

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
                    {handleIndexScore(res.score)}
                    </td>
                </tr>
                    </>
                    )
                })}
                
                </tbody>
            </table>

      {/* form data */}
            <div className='p-10'>
            <form className='flex flex-col' onSubmit={handleSubmit}>
                <label>Nama : </label>
                <input className='border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5' onChange={handleInput} value={input.name} name='name' />
                <label>MK : </label>
                <input className='border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5' onChange={handleInput} value={input.course} name='course' />
                <label>Nilai : </label>
                <input className='border-2 border-zinc-200 bg-zinc-100 rounded-md mb-5' onChange={handleInput} value={input.score} name='score' />
                <button className='border mt-5 bg-blue-700 border-blue-700 rounded-lg w-1/6 text-white p-2'><input type={'submit'} /></button>
            </form>   
            </div>
            </div>

      
    </>
  )

    
}












export default Tugas12