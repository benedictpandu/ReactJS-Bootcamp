import React from 'react'
import Sidebar from '../components/Sidebar'

const DashboardLayout = (props) => {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
            <Sidebar/>
            {props.children}
        </div>
    </main>

  )
}

export default DashboardLayout