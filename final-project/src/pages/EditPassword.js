import React, { useContext } from "react";
import Header from "../components/Header";
import { GlobalContext } from "../context/GlobalContext";

const EditPassword = () => {
    const { state, handleFunction } = useContext(GlobalContext);

    const { input} = state;
    const { handleInput,handleChangePassword } =
      handleFunction

      
      
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
        <div className="mt-10 sm:mt-0">
          <div className="mt-5 md:mt-10 md:col-span-2">
            <form onSubmit={handleChangePassword}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="flex flex-col justify-between gap-6">
                    <div className="col-span-6">
                      <label className="block text-lg font-bold text-gray-700">
                        Change Password
                      </label>
                    </div>

                    <div className="w-full md:w-4/5  self-center">
                      <label className="block text-sm font-medium text-gray-700">
                        Current Password
                      </label>
                      <input
                        required
                        onChange={handleInput}
                        value={input.current_password}
                        type={"password"}
                        name="current_password"
                        minLength={8}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                      />
                    </div>

                    <div className="w-full md:w-4/5  self-center">
                      <label className="block text-sm font-medium text-gray-700">
                        New Password
                      </label>
                      <input
                        required
                        onChange={handleInput}
                        value={input.new_password}
                        name="new_password"
                        type={"password"}
                        minLength={8}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                      />
                    </div>

                    <div className="w-full md:w-4/5  self-center">
                      <label className="block text-sm font-medium text-gray-700">
                      Confirm new password
                      </label>
                      <input
                        required
                        onChange={handleInput}
                        value={input.new_confirm_password}
                        type={"password"}
                        minLength={8}
                        name="new_confirm_password"
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
                    Update Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPassword;
