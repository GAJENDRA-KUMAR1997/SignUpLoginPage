import React, { useState, useEffect } from "react";
import { GetCity, GetCountries, GetState } from "react-country-state-city";
export default function Location() {
  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);
  const [cityId, setCityId] = useState(0);

  useEffect(() => {
    GetCountries().then((result) => {
      setCountriesList(result);
    });
  }, []);
  return (
    <div>
      <div className="form-row d-flex">
        <div className="col m-2">
          <label htmlFor="formGroupExampleInput">Country</label>
          <select
          onChange={(e)=>{
            const country = countriesList[e.target.value]; //here you will get full country object.
            console.log(country)
            setCountryId(country.id);
          GetState(country.id).then((result) => {
            setStateList(result);
          });
        }}
        value={countryId}
          >
            {countriesList.map((country,index) => {
              return <option key={index} value={index}>{country.name}</option>;
            })}
          </select>
        </div>
        <div className="col m-2">
        <label htmlFor="formGroupExampleInput">State</label>
        <select
        onChange={(e)=>{
          let state = stateList[e.target.value];
          setStateId(state.id);
          GetCity(state.id).then((data)=>{
            setCityList(data);
          })
        }}
        value={stateId}
        >
          {
            stateList.map((data,index)=>{
              return <option value={index}>{data.name}</option>
            })
          }
        </select>
        </div>
        <div className="col m-2">
        <label htmlFor="formGroupExampleInput">District</label>
        <select 
        onChange={(e) =>{
          setCityId(e.target.value);
        }}
        value={cityId}
        >
          {
            cityList.map((data,index)=>{
              return <option value={index}>{data.name}</option>
            })
          }
        </select>
        </div>
      </div>
    </div>
  );
}
// ,GetState,GetCity,GetLanguages
