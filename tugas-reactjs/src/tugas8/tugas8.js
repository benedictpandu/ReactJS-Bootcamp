import React from 'react'
import '../style.css'


const Tugas8 = (props) => {
  return(
    <>
        <div className="card">
          <h1>Data diri peserta peserta kelas Reactjs</h1>
          <hr/> 
          <ul>
            <li><strong>Nama Lengkap :</strong> {props.name}</li>
            <li><strong>Email :</strong> {props.email}</li>
            <li><strong>Batch Pelatihan :</strong> {props.batch}</li>
          </ul>
        </div>
    </>
  )
}

export default Tugas8;