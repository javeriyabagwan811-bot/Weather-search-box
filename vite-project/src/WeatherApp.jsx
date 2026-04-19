import SearchBox from "./searchbox";
import InfoBox from "./infoBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>

        </div>
    );
}



