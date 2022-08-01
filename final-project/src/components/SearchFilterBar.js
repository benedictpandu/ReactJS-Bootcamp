import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const SearchFilterBar = () => {
  const { state } = useContext(GlobalContext);
  const { data,setData, setFetchStatus } = state;
  const [search, setSearch] = useState();




  const handleChangeSearch = (event) => setSearch(event.target.value);

  const handleSearch = (event) => {
    event.preventDefault();
    let fetchData = () => {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
        .then((result) => {
          let data = result.data.data;

          let searchData = data.filter((res) => {
            return Object.values(res)
              .join(" ")
              .toLocaleLowerCase()
              .includes(search.toLocaleLowerCase());

          });

            setData(searchData)
          
          
        })
        .catch((error) => {});
      setFetchStatus(false);
    };

    fetchData();
  };

  const [filter,setFilter] = useState({
    job_type:"",
    job_tenure:"",
    company_city:"",
    company_name:""
  })

  const handleFilter = (event) =>{
    event.preventDefault()
    console.log(filter)
    let fetchData = () => {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
        .then((result) => {
          let data = result.data.data;

          let filterData = data.filter((res) => {
            return res.company_name === filter.company_name && res.company_city === filter.company_city && res.job_type === filter.job_type && res.job_tenure === filter.job_tenure

          });

            setData(filterData)
          
          
        })
        .catch((error) => {});
      setFetchStatus(false);
    };

    fetchData();
  }

  const handleChangeFilter = (event) =>{
    setFilter({...filter, [event.target.name] : event.target.value})

  }

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

        <form onSubmit={handleFilter}>
        <div className="flex items-center justify-between mt-4">
          <p className="font-medium">Filters <br/><span className="text-xs">*Restricted Filter</span></p>
          
        </div>
        <div>
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3\4 gap-4 mt-4">
            <input onChange={handleChangeFilter} value={filter.company_name} name="company_name" placeholder="Company Name" className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"/>
            <input onChange={handleChangeFilter} value={filter.company_city} name="company_city" placeholder="City" className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"/>
            <input onChange={handleChangeFilter} value={filter.job_type} name="job_type" placeholder="Job Type" className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"/>
            <input onChange={handleChangeFilter} value={filter.job_tenure} name="job_tenure" placeholder="Job Tenure" className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"/>
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <button type="submit" className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
            Submit
          </button>
        </div>
        </form>
      </div>
    </>
  );
};

export default SearchFilterBar;
