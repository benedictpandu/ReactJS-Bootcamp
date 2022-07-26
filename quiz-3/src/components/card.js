import React, {useEffect,useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'


const Card = () =>{
  const{state, handleFunction} = useContext(GlobalContext);
    const {
      data, setData,
      fetchStatus, setFetchStatus,
      currentId, setCurrentId,
      input, setInput} = state
  
    const {
      handleDescription,
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
      {data !== null && data.map((res,index)=>{
        return(

        <div className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
        <img className='w-1/2' src={res.image_url} />
        <div className="w-1/2 p-4">
          <h1 className="text-gray-900 font-bold text-2xl">
            {res.name}
          </h1>
          <small>{res.release_year}</small>
          <p className="mt-2 text-gray-600 text-sm">
            {handleDescription(res.description)}
          </p>
          <div className=" item-center mt-2 text-gray-500">
            <span>{res.category} </span> 
            <span> {handleSize(res.size)}</span> 
            <span> {res.is_android_app == 0 ? "" : "Android"} &amp; {res.is_ios_app == 0 ? "" : "IOS"}</span>
          </div>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">
              {handlePrice(res.price)}
            </h1>
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              {res.rating}
            </button>
          </div>
        </div>
      </div>
      )
      })}
      </>
    )
}

export default Card