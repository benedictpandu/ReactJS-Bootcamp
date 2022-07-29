import React from 'react'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'

const MainLayout = (props) => {
  return (
    <>
        <NavigationBar/>
            {props.children}
        <Footer/>
    </>
  )
}

export default MainLayout