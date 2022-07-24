import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <>
            <div className='w-full py-3 px-10 flex justify-between top-0 left-0 sticky shadow-sm'>
                <h1>Kelas React JS</h1>
                <ul className='flex justify-between gap-8'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tugas15">Tugas15</Link>
                    </li>
                </ul>
            </div>
        
        </>
    )
}

export default Navbar