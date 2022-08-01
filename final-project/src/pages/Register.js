import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

const Register = () => {

  const { state, handleFunction } = useContext(GlobalContext);
  const { input } = state;
  const { handleInput,handleSubmitRegis } =
    handleFunction;

  return (
    <>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <div className="mt-5 md:mt-10 md:col-span-2">
              <form onSubmit={handleSubmitRegis}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                        <label className="block text-lg font-bold text-gray-700">
                          Fill your Data
                        </label>
                      </div>

                      <div className="col-span-6">
                        <label className="block text-sm font-medium text-gray-700">
                          Name
                       </label>
                        <input
                          required
                          onChange={handleInput}
                          value={input.name}
                          type="text"
                          name="name"
                          className="mt-1 focus:ring-yellow-300 focus:border-yellow-300 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6">
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          required
                          type="text"
                          onChange={handleInput}
                          value={input.email}
                          name="email"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6">
                        <label className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          required
                          minlength="8"
                          onChange={handleInput}
                          value={input.password}
                          type={'password'}
                          name="password"
                          className="mt-1 focus:ring-yellow-300 focus:border-yellow-300 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6">
                        <label className="block text-sm font-medium text-gray-700">
                          Profil Picture
                        </label>
                        <input
                          required
                          type='text'
                          onChange={handleInput}
                          value={input.image_url}
                          name="image_url"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type={"submit"}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

    </>
  )
}

export default Register