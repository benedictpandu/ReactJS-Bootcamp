import React, { createContext } from "react";
import {useState} from 'react';
import axios from 'axios'

export const GlobalContext = createContext()

export const GlobalProvider = (props) =>{
    const [data, setData] = useState(null);
    const [fetchStatus, setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(-1)
    const [input, setInput] = useState(
        {
          name: "",
          course:"",
          score :""
    
        }
      )
      
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
    
        if (currentId === -1) {
    
    
        axios.post('https://backendexample.sanbercloud.com/api/student-scores', { name,course,score })
          .then((res) => {
            console.log(res)
            setFetchStatus(true)
          })
        }else{
    
          // update data
          axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name,course,score})
          .then((res) => {
            setFetchStatus(true)
          })
    
        }setCurrentId(-1)
    
    
        setInput(
          {
            name: "",
            course:"",
            score :""
          }
        )
      }
    
    
      const handleDelete = (event) => {
    
        let idData = parseInt(event.target.value)
        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((res) => {
          setFetchStatus(true)
        })
    
        }
    
        const handleUpdate = (event) => {
          let idData = parseInt(event.target.value)
      
          setCurrentId(idData)
      
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

    let fetchData = () =>{
        axios.get("https://backendexample.sanbercloud.com/api/student-scores")
        .then((res) => {
          setData([...res.data])
        })
        .catch((error) => {
        })
      setFetchStatus(false)
    }

    let state = {
        data, setData,
        fetchStatus, setFetchStatus,
        currentId, setCurrentId,
        input, setInput,
    }

    let handleFunction = {
        handleInput,
        handleSubmit,
        handleDelete,
        handleUpdate,
        handleIndexScore,
        fetchData
    
    }


    return(
        <GlobalContext.Provider value ={
        {
            state,
            handleFunction
        }
        }>
            {props.children}

        </GlobalContext.Provider>
    )
}