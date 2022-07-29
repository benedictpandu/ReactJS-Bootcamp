import React, { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


export const GlobalContext = createContext();



export const GlobalProvider = (props) => {
let navigate  = useNavigate()
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);
  const [input, setInput] = useState({
    title: "",
    job_type: "",
    job_qualification: "",
    job_description: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "title") {
      setInput({ ...input, title: value });
    } else if (name === "job_type") {
      setInput({ ...input, job_type: value });
    } else if (name === "job_qualification") {
      setInput({ ...input, job_qualification: value });
    } else if (name === "job_description") {
      setInput({ ...input, job_description: value });
    } else if (name === "job_tenure") {
      setInput({ ...input, job_tenure: value });
    } else if (name === "job_status") {
      setInput({ ...input, job_status: value });
    } else if (name === "company_name") {
      setInput({ ...input, company_name: value });
    } else if (name === "company_image_url") {
      setInput({ ...input, company_image_url: value });
    } else if (name === "company_city") {
      setInput({ ...input, company_city: value });
    } else if (name === "salary_min") {
      setInput({ ...input, salary_min: value });
    } else if (name === "salary_max") {
      setInput({ ...input, salary_max: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let {
      title,
      job_type,
      job_qualification,
      job_description,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
    } = input;

    if (currentId === -1) {
      //create data
      axios
        .post(
          "https://dev-example.sanbercloud.com/api/job-vacancy",
          {
            title,
            job_type,
            job_qualification,
            job_description,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
          navigate('/dashboard/joblist')
        });
    } else {
      // update data
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          {
            title,
            job_type,
            job_qualification,
            job_description,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          setFetchStatus(true);
          navigate('/dashboard/joblist')
        });
    }

    setCurrentId(-1);

    setInput({
      title: "",
      job_type: "",
      job_qualification: "",
      job_description: "",
      job_tenure: "",
      job_status: "",
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: "",
      salary_max: "",
    });
  };

  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((res) => {
        console.log(res);
        setFetchStatus(true);
      });
  };

  const handleUpdate = (event) => {
    let idData = parseInt(event.target.value)

    setCurrentId(idData)
    navigate(`/dashboard/edit/${idData}`)
    
  }

  let fetchData = () => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData([...res.data.data]);
      })
      .catch((error) => {});
    setFetchStatus(false);
  };


  const handleDesc = (Desc) => {
    if (Desc.length > 15) {
      const desc = Desc.slice(0, 150).concat("...");
      return desc;
    } else {
      return Desc;
    }
  };
  const handleDescTable = (Desc) => {
    if (Desc.length > 15) {
      const desc = Desc.slice(0, 13).concat("...");
      return desc;
    } else {
      return Desc;
    }
  };

  const handlePrice = (price) => {
    if (price == 0) {
      return "FREE";
    } else {
      var reverse = price.toString().split("").reverse().join("");
      var ribuan = reverse.match(/\d{1,3}/g);
      return "Rp " + ribuan.join(".").split("").reverse().join("");
    }
  };

  const handleSize = (Size) => {
    if (Size >= 1000) {
      return parseFloat((Size / 1000).toFixed(1)) + " GB";
    } else {
      return Size + "MB";
    }
  };

  let state = {
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
    input,
    setInput,
  };

  let handleFunction = {
    handleInput,
    handleSubmit,
    handleDelete,
    handleUpdate,
    handleDesc,
    handleDescTable,
    handlePrice,
    handleSize,
    fetchData,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
