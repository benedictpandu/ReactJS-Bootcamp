import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "tw-elements";

const SearchFilterBar = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { filter } = state;

  const { handleChangeSearch, handleSearch, handleFilter, handleChangeFilter } =
    handleFunction;

  return (
    <>
      <div className="w-full md:w-1/2 h-fit mx-auto shadow p-5 rounded-lg bg-white">
        {/* This is an example component */}
        <div className="pt-2 relative mx-auto text-gray-600">
          <form onChange={handleSearch}>
            <input
              onChange={handleChangeSearch}
              className=" w-full  border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm  focus:ring-yellow-300 focus:border-yellow-300"
              type="search"
              name="search"
              placeholder="Search"
            />
            <div className="absolute right-0 top-0 mt-5 mr-4">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </div>
          </form>
        </div>

        <div className="accordion mt-4" id="accordionExample">
          <div className="accordion-item bg-white border border-gray-300">
            <h2 className="accordion-header mb-0" id="headingOne">
              <button
                className="
                    accordion-button
                    relative
                    flex
                    items-center
                    w-full
                    py-2
                    pl-6
                    px-2
                    text-sm text-gray-500 text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                  "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Filter
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body py-4 px-5">
                <p className="text-xs">*Restricted Filter</p>
                <form onSubmit={handleFilter}>
                  <div>
                    <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3\4 gap-4 mt-4">
                      <input
                        onChange={handleChangeFilter}
                        value={filter.company_name}
                        name="company_name"
                        placeholder="Company Name"
                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                      />
                      <input
                        onChange={handleChangeFilter}
                        value={filter.company_city}
                        name="company_city"
                        placeholder="City"
                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                      />
                      <input
                        onChange={handleChangeFilter}
                        value={filter.job_type}
                        name="job_type"
                        placeholder="Job Type"
                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                      />
                      <input
                        onChange={handleChangeFilter}
                        value={filter.job_tenure}
                        name="job_tenure"
                        placeholder="Job Tenure"
                        className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end mt-4">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilterBar;
