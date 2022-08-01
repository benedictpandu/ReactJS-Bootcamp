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
  const [search, setSearch] = useState();
  const [open, setOpen] = useState(0);
  const [filter,setFilter] = useState({
    job_type:"",
    job_tenure:"",
    company_city:"",
    company_name:""
  })
  const [inputLogin,setInputLogin] = useState({
    email:"",
    password:""
})
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
    name: "",
    email: "",
    password: "",
    image_url: "",
    password: "",
    current_password: "",
    new_password: "",
    new_confirm_password: ""
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
    }else if (name === "name") {
      setInput({ ...input, name: value });
    }else if (name === "email") {
      setInput({ ...input, email: value });
    }else if (name === "password") {
      setInput({ ...input, password: value });
    }else if (name === "image_url") {
      setInput({ ...input, image_url: value });
    }else if (name === "new_password") {
      setInput({ ...input, new_password: value });
    }else if (name === "new_confirm_password") {
      setInput({ ...input, new_confirm_password: value });
    }else if (name === "current_password") {
      setInput({ ...input, current_password: value });
    }
  };

  const handleSubmitRegis = (event) => {
    event.preventDefault()

    let {
    name,
    email,
    password,
    image_url
    } = input

    //create data
    axios.post('https://dev-example.sanbercloud.com/api/register', { name,email,password,image_url })
      .then((res) => {
        setFetchStatus(true)
        navigate('/')
      })

    //clear input setelah create data
    setInput(
      {
        name:"",
        email:"",
        password:"",
        image_url:""
      }
    )
  }

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



const handleInputLogin = (event) =>{
    let value= event.target.value
    let name = event.target.name
        setInputLogin({...inputLogin, [name] : value })
}

const handleLogin = (event) =>{
    event.preventDefault()

    let {email, password} = inputLogin
    axios.post('https://dev-example.sanbercloud.com/api/login',{email,password})
    .then((res)=>{
        let data = res.data
        Cookies.set('userName',data.user.name,{expires : 1})
        Cookies.set('userImage',data.user.image_url,{expires : 1})
        Cookies.set('token', data.token, {expires : 1})
        navigate('/')

    })
    .catch((error)=>{
        alert(error.message)
    })
}

const handleChangePassword = (event) => {
  event.preventDefault()

  let {
  current_password,
  new_password,
  new_confirm_password
  } = input

  //create data
  axios.post('https://dev-example.sanbercloud.com/api/change-password', { current_password, new_password,new_confirm_password }, {
    headers: { Authorization: "Bearer " + Cookies.get("token") },
  })
    .then((res) => {
      setFetchStatus(true)
      navigate('/')
    })

  //clear input setelah create data
  setInput(
    {
      current_password:"",
      new_password: "",
      new_confirm_password:""
    }
  )
   
}

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


  const handleDesc = (text) => {
    if (text.length > 15) {
      const desc = text.slice(0, 150).concat("...");
      return desc;
    } else {
      return text;
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
      return "Volunteering";
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
    inputLogin,
    setInputLogin,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
    input,
    setInput,
    filter,
    setFilter,
    search, 
    setSearch,
    open,
    setOpen
  };

  let handleFunction = {
    handleInput,
    handleSubmit,
    handleInputLogin,
    handleLogin,
    handleDelete,
    handleUpdate,
    handleDesc,
    handleDescTable,
    handlePrice,
    handleChangePassword,
    handleSize,
    handleSubmitRegis,
    fetchData,
    handleChangeSearch,
    handleSearch,
    handleFilter,
    handleChangeFilter,
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
