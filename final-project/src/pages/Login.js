import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'

const Login = () => {

  
  const { state, handleFunction } = useContext(GlobalContext);

  const { inputLogin} = state;
  const { handleLogin, handleInputLogin } =
    handleFunction;
  
  return (
    <>
         <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label className="sr-only">
                  Email address
                </label>
                <input
                  value={inputLogin.email}
                  onChange={handleInputLogin}
                  name="email"
                  type={'text'}
                  required
                  className=" rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label className="sr-only">
                  Password
                </label>
                <input
                minlength="8"
                value={inputLogin.password}
                onChange={handleInputLogin}
                  name="password"
                  type={'password'}
                  required
                  className=" rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link to='/register' className="font-medium text-yellow-300 hover:text-yellow-400">
                  Sign Up !
                </Link>
              </div>
            </div>

            <div>
              <button
                type={'submit'}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login