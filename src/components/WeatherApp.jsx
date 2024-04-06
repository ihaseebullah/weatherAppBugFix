import { BsCloudLightningRainFill } from "react-icons/bs";
import { FaCloudSunRain, FaCloudMoonRain, FaCloudMeatball, FaCloud, FaCloudMoon } from "react-icons/fa6";
import { IoRainySharp, IoSpeedometerOutline } from "react-icons/io5";

import { FiSearch } from "react-icons/fi";

import { GrLocation } from "react-icons/gr";

import { MdOutlineWindPower } from "react-icons/md";

import { SiRainmeter } from "react-icons/si";
import { PiThermometer } from "react-icons/pi";

// import { FiSunrise, FiSunset } from "react-icons/fi";
// import { GiHeavyRain } from "react-icons/gi";
// import { TbUvIndex } from "react-icons/tb";
// import { IoPartlySunnySharp } from "react-icons/io5";
// import { IoMdSunny } from "react-icons/io";


export const WeatherApp = () => {
    return (
        <main className="h-[100svh] text-white relative font-montserrat" id="sampleApp">
            <div className="content flex flex-col justify-between absolute top-0 left-0 w-full h-full backdrop-blur-md">
                <form className="search-bar mt-2 mr-5 ml-auto flex justify-between items-center gap-3 bg-white/75 w-[25%] rounded-md">
                    <input type="text" id="searchBars" className="rounded-md flex-1 bg-transparent placeholder:text-black/45 text-black font-poppins py-3 pl-[0.75rem] outline-none" placeholder="Type city name here..." />
                    <FiSearch className="text-slate-600 text-xl mr-[0.7rem]" role="button" />
                </form>

                <div className="weather flex justify-between pt-12 pb-16 px-8">
                    <div className="space-y-7">
                        <p className="text-7xl flex gap-5 items-center font-medium"><BsCloudLightningRainFill className="text-9xl" /> 16&deg;C</p>
                        <p className="text-3xl font-medium">Lightning Rain</p>
                    </div>


                    <div className="city-date self-end space-y-3">
                        <p className="text-5xl font-medium flex items-center gap-2"><GrLocation className="text-4xl" />Peshawar</p>
                        <p className="text-xl ml-2"> <span className="text-2xl font-medium">Wednesday</span>&nbsp;&nbsp;&nbsp; April 02, 2024</p>
                    </div>
                </div>


                <div className="other-data flex gap-20 px-6 py-5 border-t-2 border-white/5 bg-black/10 backdrop-blur-lg">
                    <div className="weather-data">
                        <p className="text-2xl font-medium ml-2 mb-5 relative before:bg-slate-400 before:w-1 before:h-[74%] before:absolute before:-left-2 before:bottom-1 before:rounded-full">Details</p>
                        <div className="grid grid-cols-2 gap-x-14 gap-y-10 py-7 pr-10 pl-9 border border-white/15 rounded-lg">
                            <div className="wind flex items-center gap-3">
                                <MdOutlineWindPower className="text-3xl" />
                                <div>
                                    <p className="font-medium">Wind</p>
                                    <p className="text-sm">9kph</p>
                                </div>
                            </div>

                            <div className="wind flex items-center gap-3">
                                <PiThermometer className="text-3xl" />
                                <div>
                                    <p className=" font-medium">Feels Like</p>
                                    <p className="text-sm">22&deg;C</p>
                                </div>
                            </div>

                            <div className="humidity flex items-center gap-3">
                                <SiRainmeter className="text-3xl" />
                                <div>
                                    <p className=" font-medium">Humidity</p>
                                    <p className="text-sm">43%</p>
                                </div>
                            </div>

                            <div className="pressure flex items-center gap-3">
                                <IoSpeedometerOutline className="text-3xl" />
                                <div>
                                    <p className=" font-medium">Pressure</p>
                                    <p className="text-sm">1013hPa</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="daily-weather flex-1">
                        <p className="text-2xl font-medium ml-2 mb-5 relative before:bg-slate-400 before:w-1 before:h-[74%] before:absolute before:-left-2 before:bottom-1 before:rounded-full">Daily Weather</p>
                        <div className="flex justify-between gap-4">
                            <div className="flex flex-col items-center gap-5 border flex-grow border-white/15 rounded-lg py-4 w-32">
                                <p className="text-2xl font-medium">MON</p>
                                <FaCloudMoonRain className="text-5xl" />
                                <p className="text-2xl">14&deg;C</p>
                            </div>
                            <div className="flex flex-col items-center gap-5 border flex-grow border-white/15 rounded-lg py-4 w-32">
                                <p className="text-2xl font-medium">TUE</p>
                                <FaCloudSunRain className="text-5xl" />
                                <p className="text-2xl">20&deg;C</p>
                            </div>
                            <div className="flex flex-col items-center gap-5 border flex-grow border-white/15 rounded-lg py-4 w-32">
                                <p className="text-2xl font-medium">WED</p>
                                <FaCloudMeatball className="text-5xl" />
                                <p className="text-2xl">6&deg;C</p>
                            </div>
                            <div className="flex flex-col items-center gap-5 border flex-grow border-white/15 rounded-lg py-4 w-32">
                                <p className="text-2xl font-medium">THU</p>
                                <FaCloudMoon className="text-5xl" />
                                <p className="text-2xl">15&deg;C</p>
                            </div>
                            <div className="flex flex-col items-center gap-5 border flex-grow border-white/15 rounded-lg py-4 w-32">
                                <p className="text-2xl font-medium">FRI</p>
                                <FaCloud className="text-5xl" />
                                <p className="text-2xl">18&deg;C</p>
                            </div>
                            <div className="flex flex-col items-center gap-5 border flex-grow border-white/15 rounded-lg py-4 w-32">
                                <p className="text-2xl font-medium">SAT</p>
                                <IoRainySharp className="text-5xl" />
                                <p className="text-2xl">8&deg;C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};






