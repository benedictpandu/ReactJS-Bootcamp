import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
const Card = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const {
    data,
    fetchStatus,
    setFetchStatus,
  } = state;

  const {handleDesc,fetchData } =
    handleFunction;

  useEffect(() => {
    if (fetchStatus === true) {
      fetchData();
    }
  }, [fetchStatus, setFetchStatus, fetchData]);

  return (
    <>
      {data !== null &&
        data.map((res, index) => {
          return (
            
            <div className="flex justify-center lg:w-115 h-72 lg:h-52">
              <div className="flex  flex-row max-w-xl rounded-lg bg-white shadow-lg">
                <div className="h-full flex align-middle w-1/4">
                  <img
                    className=" w-full p-4 my-auto rounded-l-lg"
                    key={res.id}
                    src={res.company_image_url === null ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" : res.company_image_url}
                    alt=""
                  />
                </div>

                <div className="p-4 lg:p-3 w-3/4 flex flex-col justify-between ">
                  <div>
                  <h5  key={res.title} className="text-gray-900 text-md md:text-xl font-medium">
                    {res.title === null ? " " :res.title}
                  </h5>
                  <p className="text-gray-600 text-xs">{res.company_city === null ? " " :res.company_city} | {res.job_tenure=== null ? " " :res.job_tenure} | {res.job_type=== null ? " " :res.job_type}</p>
                  </div>
                  <p className="text-gray-700 text-xs md:text-md mt-3 mb-4">
                    {handleDesc(res.job_description === null ? " " : res.job_description)}
                  </p>
                  <div className="flex flex-col lg:flex-row justify-between">
                  <span className={res.job_status == 1 ? "p-2 bg-green-200 w-14 text-center opacity-50 rounded-md text-xs  font-semibold text-green-900" : "p-2 bg-red-200 w-14 text-center opacity-50  rounded-md text-xs font-semibold text-red-900"}>
                        {res.job_status == 1 ? "Open" : "Closed"}
                      </span>
                    <Link
                      to={`/list-job-vacancy/${res.id}`}
                      className="bg-yellow-300 text-white hover:bg-yellow-400 mt-2 w-18 text-center lg:mt-0 p-2 md:p-2 text-xs rounded-md"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Card;
