import React, { useState } from "react";

export default function Forget() {
  const [credentials, setCredentials] = useState({
    Email: "",
    DOB: "",
    MobileNumber: "",
  });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/forgetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: credentials.Email,
        DOB: credentials.DOB,
        MobileNumber: credentials.MobileNumber,
      }),
    })
    let data = await response.json();
    console.log(data);
    if(!data.success){
      console.log(data.success);
    }
    else{
      console.log(data);
      console.log(data.success)
    }
  };
  const onChangeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="container" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label className="m-2" htmlFor="exampleInputEmail1">
            Email address
          </label>
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
          <label className="m-2" htmlFor="exampleInputPassword1">
            New Password
          </label>
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
          <label className="m-2" htmlFor="exampleInputPassword1">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="MobileNumber"
            value={credentials.MobileNumber}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success m-2">
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
}
