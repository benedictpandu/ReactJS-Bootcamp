import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import { GlobalContext } from "../context/GlobalContext";
import {useParams} from 'react-router-dom'
import axios from "axios";


const DashboardForm = () => {
  let {idData} = useParams()
  const { state, handleFunction } = useContext(GlobalContext);
  const {
    input,
    setInput,
  } = state;

  const { handleInput, handleSubmit } = handleFunction;

  useEffect(() => {
    if (idData !== undefined) {
      axios
        .get(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`
        )
        .then((res) => {
          let data = res.data;

          setInput({
            title: data.title,
            job_type: data.job_type,
            job_qualification: data.job_qualification,
            job_description: data.job_description,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
          });
        });
    }
  }, []);

  return (
    <>
      <div className="flex flex-col w-full">
        <Header />
        <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
          <div className="mt-10 sm:mt-0">
            <div className="mt-5 md:mt-10 md:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-6">
                        <label className="block text-lg font-bold text-gray-700">
                          Job Information
                        </label>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Title
                        </label>
                        <input
                        required
                          onChange={handleInput}
                          value={input.title}
                          type="text"
                          name="title"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Job Type
                        </label>
                        <input
                        required
                          onChange={handleInput}
                          value={input.job_type}
                          name="job_type"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Job Description
                        </label>
                        <input
                        required
                          onChange={handleInput}
                          value={input.job_description}
                          type="text"
                          name="job_description"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Job Tenure
                        </label>
                        <input
                        required
                          onChange={handleInput}
                          value={input.job_tenure}
                          name="job_tenure"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Job Qualification
                        </label>
                        <input
                        required
                          onChange={handleInput}
                          value={input.job_qualification}
                          type="text"
                          name="job_qualification"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Job Status
                        </label>
                        <select
                          required
                          onChange={handleInput}
                          value={input.job_status}
                          name="job_status"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                        >
                          <option value="" disabled hidden>Select Here</option>
                          <option value="1">Open</option>
                          <option value="0">Close</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-6">
                        <label className="block text-lg font-bold text-gray-700">
                          Company Information
                        </label>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Company Name
                        </label>
                        <input
                        required
                          onChange={handleInput}
                          value={input.company_name}
                          type="text"
                          name="company_name"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Company Image
                        </label>
                        <input
                        required
                          onChange={handleInput}
                          value={input.company_image_url}
                          type="text"
                          name="company_image_url"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Company City
                        </label>
                        <input
                        required
                          onChange={handleInput}
                          value={input.company_city}
                          type="text"
                          name="company_city"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Minimum Salary
                        </label>
                        <input
                        required
                          onChange={handleInput}
                          value={input.salary_min}
                          type="number"
                          name="salary_min"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-300 focus:border-yellow-300 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Maximum Salary
                        </label>
                        <input
                        required
                          onChange={handleInput}
                          value={input.salary_max}
                          type="number"
                          name="salary_max"
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
      </div>
    </>
  );
};

export default DashboardForm;
