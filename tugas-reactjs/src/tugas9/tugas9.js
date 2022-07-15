import React from 'react'
import'../style.css'
import {useState} from 'react' 


const Tugas9 = () => {

    let [angka,setCount] = useState(1)
    const angkaHandle =()=> {
        setCount(angka += 1)
    }



    return(
    <>
        <div className='card'>
            <p style={{textAlign: "center"}}>{angka}</p>
            <button onClick={angkaHandle}>Tambah</button>
            {angka >= 10 ? <span>State count sudah lebih dari 10!!</span> : ""}
        </div>
    </>
    )
}

export default Tugas9