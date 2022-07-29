import React from 'react'
import Footer from '../components/Footer'

const LandingLayout = (props) => {
  return (
    <>
        {props.children}
        <Footer/>
    </>
  )
}

export default LandingLayout