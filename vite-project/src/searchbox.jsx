import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from "react";


export default function SearchBox({ updateInfo }) {
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="1af9d8d53b5b8b3e5ea95e615b1f1083";

    let getweatherInfo=async ()=>{

        try{
             let response=await fetch(`${ API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jasonResponse=await response.json();
    console.log(jasonResponse);
    let result={
        city:city,
        temp:jasonResponse.main.temp,
        tempMin:jasonResponse.main.temp_min,
        tempMax:jasonResponse.main.temp_max,
        humidity:jasonResponse.main.humidity,
        feels_like:jasonResponse.main.feels_Like,
        weather:jasonResponse.weather[0].description,
    };
    console.log(result);
    return result;

        }catch(err) {
            throw err;
        }
   
    

    };
  


let handleChange=(evt)=>{
    setCity(evt.target.value);
}; 

let handleSubmit= async (evt)=>{
    try{
         evt.preventDefault();
    console.log(city);
    getweatherInfo(city);
    setCity("");
    let newInfo= await getweatherInfo();
    updateInfo(newInfo);

    } catch(err) {
      setError(true);

    }
   

};
     return(
     <div className="SearchBox">
     <form onSubmit={handleSubmit}>
        <TextField 
        id="city" 
        label="City Name" 
        variant="outlined"
         required 
         value={city}
         onChange={handleChange}
         />

        <br></br><br></br>
        <Button variant="contained" type="submit">
        Search
        </Button>
        {error && <P style={{color:"red"}}>No such place exist</P>}
     </form>
     </div>
    );
 }