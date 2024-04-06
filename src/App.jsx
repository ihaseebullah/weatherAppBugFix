// import axios from "axios";

import { useEffect, useState } from "react";

import apiKey from "./API_KEY";

import { MdOutlineWindPower } from "react-icons/md";
import { IoSpeedometerOutline, IoRainySharp } from "react-icons/io5";
import { SiRainmeter } from "react-icons/si";
import { PiThermometer } from "react-icons/pi";

import {
  FaCloudSunRain,
  FaCloudMoonRain,
  FaCloudMeatball,
  FaCloud,
  FaCloudMoon,
} from "react-icons/fa6";

import { Form } from "./components/Form";

import { TodayWeather } from "./components/todayWeather/TodayWeather";
import { Weather } from "./components/todayWeather/Weather";
import { CityDate } from "./components/todayWeather/CityDate";

import { WeatherInfo } from "./components/weatherInfo/WeatherInfo";
import { TodayWeatherInfo } from "./components/weatherInfo/todayWeatherInfo/TodayWeatherInfo";
import { Info } from "./components/weatherInfo/todayWeatherInfo/Info";

import { DailyWeather } from "./components/weatherInfo/dailyWeather/DailyWeather";
import { Day } from "./components/weatherInfo/dailyWeather/Day";

const App = () => {
  const [city, setCity] = useState("Tarakai");
  const [todayWeather, setTodayWeather] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [render, setRender] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //Initial Run
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
        setTodayWeather(data.list[0]);
        setRender(true);
      })
      .catch((err) => console.error(err));
  }, []);

  const loadWeatherData = (e) => {
    e.preventDefault();
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
        setTodayWeather(data.list[0]);
        setRender(true);
        setErrorMessage("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <main
      className="h-[100svh] text-white relative font-montserrat"
      id="sampleApp"
    >
      <div className="content flex flex-col justify-between absolute top-0 left-0 w-full h-full bg-black/10 backdrop-blur-lg">
        <Form
          setter={setCity}
          value={city}
          plhText={"Type city here..."}
          loadWeatherData={loadWeatherData}
        />
        {weatherData && render ? (
          <>
            <TodayWeather>
              <Weather
                temperature={todayWeather.main.temp}
                weatherDesc={todayWeather.weather[0].description}
              />

              <CityDate
                city={weatherData.city.name}
                day={days[new Date().getDay()]}
              />
            </TodayWeather>

            <WeatherInfo>
              <TodayWeatherInfo>
                <Info
                  infoIcon={<MdOutlineWindPower className="text-3xl" />}
                  infoText={"Wind"}
                  theInfo={`${todayWeather.wind.speed} m/s`}
                />

                <div className="flex items-center gap-3">
                  <PiThermometer className="text-3xl" />
                  <div>
                    <p className=" font-medium">Feels Like</p>
                    <p className="text-sm">
                      {todayWeather.main.feels_like}&deg;C
                    </p>
                  </div>
                </div>

                <Info
                  infoIcon={<SiRainmeter className="text-3xl" />}
                  infoText={"Humidity"}
                  theInfo={`${todayWeather.main.humidity}%`}
                />

                <Info
                  infoIcon={<IoSpeedometerOutline className="text-3xl" />}
                  infoText={"Pressure"}
                  theInfo={`${todayWeather.main.pressure} hPa`}
                />
              </TodayWeatherInfo>

              <DailyWeather>
                <Day
                  day={"MON"}
                  weatherIcon={<FaCloudMoonRain className="text-5xl" />}
                  temperature={"14"}
                />

                <Day
                  day={"TUE"}
                  weatherIcon={<FaCloudSunRain className="text-5xl" />}
                  temperature={"20"}
                />

                <Day
                  day={"WED"}
                  weatherIcon={<FaCloudMeatball className="text-5xl" />}
                  temperature={"6"}
                />

                <Day
                  day={"THU"}
                  weatherIcon={<FaCloudMoon className="text-5xl" />}
                  temperature={"15"}
                />

                <Day
                  day={"FRI"}
                  weatherIcon={<FaCloud className="text-5xl" />}
                  temperature={"18"}
                />

                <Day
                  day={"SAT"}
                  weatherIcon={<IoRainySharp className="text-5xl" />}
                  temperature={"8"}
                />
              </DailyWeather>
            </WeatherInfo>
          </>
        ) : (
          <p>Please Wait...</p>
        )}
      </div>
    </main>
  );
};

export default App;
