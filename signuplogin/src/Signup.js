import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
export default function Signup() {
  const [countryId, setCountryId] = useState(0);
  const [selectCountry,setSelectCountry] = useState({Country : ""});
  const [selectState,setSelectState] = useState({State : ""});
  const [selectDistrict,setSelectDistrict] = useState({District:""});
  const [selectCity,setSelectCity] = useState({City:""});
  const [stateId, setStateId] = useState(0);
  const [selectDate,setSelectedDate] = useState("");
  const dateHandler = (date) =>{
    setSelectedDate(date);
  }
  const [credentials, setCredentials] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    FatherName: "",
    MotherName: "",
    Gender: "",
    RollNumber: "",
    StudentId: "",
    StreetAddress: "",
    ZipCode: "",
    Landmark: "",
    MobileNumber: "",
    AlternateNumber: "",
    ParentNumber: "",
    Email: "",
    AlternateEmail: "",
    ParentEmail: "",
  });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FirstName: credentials.FirstName,
        MiddleName: credentials.MiddleName,
        LastName: credentials.LastName,
        FatherName: credentials.FatherName,
        MotherName: credentials.MotherName,
        Gender: credentials.Gender,
        DOB: selectDate,
        RollNumber: credentials.RollNumber,
        StudentId: credentials.StudentId,
        StreetAddress: credentials.StreetAddress,
        Country: selectCountry.Country,
        State: selectState.State,
        District: selectDistrict.District,
        City: selectCity.City,
        ZipCode: credentials.ZipCode,
        Landmark: credentials.Landmark,
        MobileNumber: credentials.MobileNumber,
        AlternateNumber: credentials.AlternateNumber,
        ParentNumber: credentials.ParentNumber,
        Email: credentials.Email,
        AlternateEmail: credentials.AlternateEmail,
        ParentEmail: credentials.ParentEmail,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (!data.success) {
      alert("Data is Incorrect");
    }
  };
  const onChangeHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const myStyle = {
    paddingTop:"20px",
    backgroundImage:"url('https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
   
  } 
  return (
      <div>
        <div className="container bg-white border border-5 border-success rounded my-5" style={myStyle}>
          <h1 className="d-flex m-2 justify-content-center align-item-center">
            Registration Form
          </h1>
          <form className="" onSubmit={onSubmitHandler}>
            <h3 className="m-4">Student Information</h3>
            <div className="form-row d-flex">
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">First Name</label>
                <input
                  type="text"
                  name="FirstName"
                  className="form-control"
                  value={credentials.FirstName}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Middle Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="MiddleName"
                  value={credentials.MiddleName}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="LastName"
                  value={credentials.LastName}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="form-row d-flex">
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Father Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="FatherName"
                  value={credentials.FatherName}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Mother Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="MotherName"
                  value={credentials.MotherName}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Gender</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  name="Gender"
                  onChange={onChangeHandler}
                >
                  <option selected>Select Gender</option>
                  <option key="1">Male</option>
                  <option key="2">Female</option>
                  <option key="3">TransGender</option>
                  <option key="4">Other</option>
                </select>
              </div>
            </div>
            <div className="form-row d-flex">
              <div className="col m-2 d-flex flex-column">
                <label htmlFor="formGroupExampleInput">Student DOB</label>
                <DatePicker
                selected={selectDate}
                onChange={dateHandler}
                name="DOB"
                value={selectDate}
                />
              </div>
              <div className="col m-2 d-flex flex-column">
                <label htmlFor="formGroupExampleInput">Roll Number</label>
                <input
                  type="text"
                  className="form-control my-2"
                  name="RollNumber"
                  value={credentials.RollNumber}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col m-2 d-flex flex-column">
                <label htmlFor="formGroupExampleInput">Student ID</label>
                <input
                  type="text"
                  className="form-control my-2"
                  name="StudentId"
                  value={credentials.StudentId}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <h3 className="m-4">Address</h3>
            <div className="form-row d-flex">
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Street Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="StreetAddress"
                  value={credentials.StreetAddress}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="form-row d-flex">
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Country</label>
                {/* <input
                  type="text"
                  className="form-control my-2"
                  name="Country"
                  value={credentials.Country}
                  onChange={onChangeHandler}
                /> */}
                <CountrySelect
                onChange={(e) => {
                  setCountryId(e.id);
                  setSelectCountry(e.name);
                }} 
                name="Country"
                value={selectCountry.Country}
                />
              </div>
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">State</label>
                {/* <select
                  className="form-select"
                  aria-label="Default select example"
                  value={credentials.State}
                  onChange={onChangeHandler}
                  name="State"
                >
                  {states.map((data, index) => {
                    return <option key={index + 1}>{data}</option>;
                  })}
                </select> */}
                <StateSelect
                countryId={countryId}
                onChange={(e) => {
                  setStateId(e.id);
                  setSelectState(e.name);
                }} 
                name="State"
                value={selectState.State}
                />
              </div>
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">District</label>
                {/* <input
                  type="text"
                  className="form-control"
                  name="District"
                  value={credentials.District}
                  onChange={onChangeHandler}
                /> */}
                <CitySelect
                countryId={countryId}
                stateId={stateId} 
                onChange={(e)=>{
                  setSelectDistrict(e.name);
                }}
                name="District"
                value={selectDistrict.District}
                />
              </div>
            </div>
            <div className="form-row d-flex">
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">City</label>
                <CitySelect
                countryId={countryId}
                stateId={stateId} 
                onChange={(e)=>{
                  setSelectCity(e.name);
                }}
                name="City"
                value={selectCity.City}
                />
              </div>
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  name="ZipCode"
                  value={credentials.ZipCode}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Landmark</label>
                <input
                  type="text"
                  className="form-control"
                  name="Landmark"
                  value={credentials.Landmark}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <h3 className="m-4">Contact Information</h3>
            <div className="form-row d-flex">
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="MobileNumber"
                  value={credentials.MobileNumber}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Alternate Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="AlternateNumber"
                  value={credentials.AlternateNumber}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Parent Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="ParentNumber"
                  value={credentials.ParentNumber}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="form-row d-flex">
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="Email"
                  value={credentials.Email}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Alternate Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="AlternateEmail"
                  value={credentials.AlternateEmail}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col m-2">
                <label htmlFor="formGroupExampleInput">Parent Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="ParentEmail"
                  value={credentials.ParentEmail}
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <button type="submit" className="m-3 btn btn-primary">
              Submit
            </button>
            <Link to="/login" className="m-3 btn btn-danger">
              Already User
            </Link>
          </form>
        </div>
      </div>
  );
}
