import axios from 'axios'
import React, { useState } from 'react'
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom'

const Login = () => {

  let navigate  = useNavigate()

    const [input,setInput] = useState({
        email:"",
        password:""
    })

    const handleInput = (event) =>{
        let value= event.target.value
        let name = event.target.name
            setInput({...input, [name] : value })
    }

    const handleLogin = (event) =>{
        event.preventDefault()

        let {email, password} = input
        // console.log(input)
        axios.post('https://dev-example.sanbercloud.com/api/login',{email,password})
        .then((res)=>{
            console.log(res)
            let data = res.data
            Cookies.set('token', data.token, {expires : 1})
            navigate('/')
        })
        .catch((error)=>{
            alert(error.message)
        })
    }


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
                  value={input.email}
                  onChange={handleInput}
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
                value={input.password}
                onChange={handleInput}
                  name="password"
                  type={'password'}
                  required
                  className=" rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-yellow-300 focus:ring-yellow-400 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-yellow-300 hover:text-yellow-400">
                  Forgot your password?
                </a>
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