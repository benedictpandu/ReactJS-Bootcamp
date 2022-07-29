import React from 'react'
import SearchFilterBar from '../components/SearchFilterBar'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
const JobList = () => {
  return (
    <>
    <div className='w-full px-24 my-10 flex flex-col '>
        <SearchFilterBar/>
        <div className='mt-14 w-full grid md:grid-cols-3 gap-4 flex-wrap'>
            <Card/>
        </div>
    </div>
    </>

  )
}

export default JobList