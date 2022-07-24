import React, { useContext } from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalContext'
import {useParams} from 'react-router-dom'

const Tugas15form = ()=>{
  let {idData} = useParams()
  const{state, handleFunction} = useContext(GlobalContext);
  const {
    data, setData,
    fetchStatus, setFetchStatus,
    currentId, setCurrentId,
    input, setInput} = state

    const {
        handleInput,
        handleSubmit,
        fetchData
      } = handleFunction

  useEffect(() => {
    if (idData !== undefined) {
      axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
            .then((res) => {
              let data = res.data
      
              setInput(
                {
                  name: data.name,
                  course:data.course,
                  score :data.score
                }
              )
      
            })
    }

  }, [])
    return(
        
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
    )
}

export default Tugas15form;