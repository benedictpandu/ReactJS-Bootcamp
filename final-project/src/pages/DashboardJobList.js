import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { GlobalContext } from "../context/GlobalContext";

const DashboardJoblist = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const {
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
    input,
    setInput,
  } = state;

  const {
    handleDelete,
    handleUpdate,
    handleDescTable,
    handlePrice,
    fetchData,
  } = handleFunction;

  useEffect(() => {
    if (fetchStatus === true) {
      fetchData();
    }
  }, [fetchStatus, setFetchStatus, fetchData]);

  return (
    <>
      <div className="flex flex-col w-full">
        <Header/>
        <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
          <div className="container mx-auto px-4 sm:px-8 w-full">
            <div className="py-8">
              <div className="flex flex-row mb-1 sm:mb-0 justify-end w-full">
                <div className="text-end">
                  <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                    <div className=" relative ">
                      <input
                        type="text"
                        id='"form-subscribe-Filter'
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="name"
                      />
                    </div>
                    <button
                      className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="max-w-screen-xl leading-normal">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white w-1/4 text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-bold"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white w-1/12 text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-bold"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white w-1/12 text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-bold"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white w-1/12 text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-bold"
                        >
                          Qualification
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white w-1/12 text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-bold"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white w-1/12 text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-bold"
                        >
                          Tenure
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white w-1/12 text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-bold"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white w-1/12 text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-bold"
                        >
                          Company Name
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white w-1/12 text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-bold"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white w-1/12 text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-bold"
                        >
                          City
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white w-1/12 text-center border-b border-gray-200 text-gray-800 text-sm uppercase font-bold"
                        >
                          Salary
                        </th>
                        <th
                          scope="col"
                          className=" px-5 py-3 bg-white w-1/12 text-center  border-b border-gray-200 text-gray-800 text-sm uppercase font-bold"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <>
                        {data !== null &&
                          data.map((res, index) => {
                            return (
                              <tr>
                                <td className="px-3 py-5 border-b border-gray-200 text-center bg-white text-sm">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {index + 1}
                                  </p>
                                </td>
                                <td className="px-3 py-5 border-b border-gray-200 text-center bg-white text-sm">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {res.title === null ? " " : res.title}
                                  </p>
                                </td>
                                <td className="px-3 py-5 border-b border-gray-200 text-center  bg-white text-sm">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {handleDescTable(res.job_description === null ? " " : res.job_description)}
                                  </p>
                                </td>
                                <td className="px-3 py-5 border-b border-gray-200 text-center  bg-white text-sm">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {handleDescTable(res.job_qualification === null ? " " : res.job_qualification)}
                                  </p>
                                </td>
                                <td className="px-3 py-5 border-b border-gray-200 text-center  bg-white text-sm">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {res.job_type === null ? " " : res.job_type}
                                  </p>
                                </td>
                                <td className="px-3 py-5 border-b border-gray-200 text-center  bg-white text-sm">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {res.job_tenure === null ? " " :res.job_tenure}
                                  </p>
                                </td>
                                <td className="px-3 py-5 border-b border-gray-200 text-center  bg-white text-sm">
                                  <span
                                    className={
                                      res.job_status === 1
                                        ? "relative inline-block px-3 py-1  font-semibold text-green-900 leading-tight"
                                        : "relative inline-block px-3 py-1  font-semibold text-red-900 leading-tight"
                                    }
                                  >
                                    <span
                                      aria-hidden="true"
                                      className={
                                        res.job_status == 1
                                          ? "absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                          : "absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                      }
                                    ></span>
                                    <span className="relative">
                                      {res.job_status == 1 ? "Open" : "Closed"}
                                    </span>
                                  </span>
                                </td>
                                <td className="px-3 py-5 border-b border-gray-200 text-center  bg-white text-sm">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {res.company_name === null ? " " :res.company_name}
                                  </p>
                                </td>
                                <td className="px-3 py-5 border-b border-gray-200 text-center  bg-white text-sm">
                                  <img src={res.company_image_url === null ? " " : res.company_image_url} />
                                </td>
                                <td className="px-3 py-5 border-b border-gray-200 text-center bg-white text-sm">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {res.company_city === null ? " " : res.company_city}
                                  </p>
                                </td>
                                <td className="px-3 py-5 border-b border-gray-200 text-center  bg-white text-sm">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {handlePrice(res.salary_min === null ? " " : res.salary_min) +
                                      "-" +
                                      handlePrice(res.salary_max === null ? " " : res.salary_max)}
                                  </p>
                                </td>
                                <td className="px-3 py-5 border-b border-gray-200 text-center  bg-white text-sm">
                                  <button
                                    onClick={handleUpdate} 
                                    value={res.id}
                                    className="text-gray-900 hover:text-gray-900 text-sm bg-yellow-300 rounded-md py-1 px-2 mb-2"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={handleDelete}
                                    value={res.id}
                                    className="text-gray-900 hover:text-gray-900 text-sm bg-red-500 rounded-md py-1 px-2"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                      </>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardJoblist;
