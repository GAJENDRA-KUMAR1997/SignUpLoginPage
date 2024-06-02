import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [credentials,setCredentials] = useState({
    Email:"",
    DOB:"",
  })
  const onSubmitHandler = async(e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/log",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email:credentials.Email,
        DOB:credentials.DOB,
      })
    })
    let data = response.json();
    if(!data.success){
      alert("This user is not exist");
    }
    else{
      localStorage.setItem("userEmail",credentials.Email);
      localStorage.setItem("authToken",credentials.DOB);
    }
  }
  const onChangeHandler = (e) =>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
   const style1 = {
    display:"flex",
    justifyContent:"center",
    alignItems : "center",
    backgroundImage:"url('https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg?size=626&ext=jpg&ga=GA1.1.272356733.1715856651&semt=ais_user')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height:"100vh"
  }
  const myStyle = {
    backgroundImage:"url('https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
   
  } 
  return (
    <div style={style1}>
      <div style={myStyle}>
      <div className="container d-flex flex-column border border-5 border-success" style={{width:"500px",height:"400px",display:"flex", justifyContent:"center",alignItems:"center"}}>
      <h1 className=" d-flex flex-column justify-center align-items-center">Student Login</h1>
      <form className="container" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label className="m-2" htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control m-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="Email"
            value={credentials.Email}
            onChange={onChangeHandler}
          />
          <small id="emailHelp" className="form-text text-muted m-2">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label className="m-2" htmlFor="exampleInputPassword1">Password</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="DOB"
            value={credentials.DOB}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <p>
            <Link to="/forget">Forget Password</Link>
          </p>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success m-2">
            Submit
          </button>
          <Link to="/signup" className="btn btn-danger m-2">
            New Student
          </Link>
        </div>
      </form>
    </div>
      </div>
    </div>
  );
}
