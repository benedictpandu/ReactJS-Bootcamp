import Cookies from 'js-cookie'
import React from 'react'

const ProfilPage = () => {
  return (
   
    <>
          <div className="m-10 lg:mt-24 lg:mb-6 lg:mx-28">
            <h3 className="text-4xl leading-6 font-medium text-gray-900">
              Profil
            </h3>
          </div>
          <div className="bg-white shadow-xl border-2 mx-10 lg:mx-24 lg:p-8 overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 flex flex-row-reverse justify-between sm:px-6">
              <img src={Cookies.get("userImage")} className="w-28 md:w-32 rounded-full" />
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl leading-6 font-medium text-gray-900">
                    {Cookies.get("userName")}
                </h3>
                <p className="mt-3 max-w-2xl text-xl text-gray-500">
                    Job Seeker
                </p>
              </div>
            </div>
          </div>
        </>
  )
}

export default ProfilPage