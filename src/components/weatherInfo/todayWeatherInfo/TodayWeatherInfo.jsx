

export const TodayWeatherInfo = ({ children }) => {
    return (
        <div>
            <p className="text-2xl font-medium ml-2 mb-5 relative before:bg-slate-400 before:w-1 before:h-[74%] before:absolute before:-left-2 before:bottom-1 before:rounded-full">Details</p>
            <div className="grid grid-cols-2 gap-x-14 gap-y-10 py-7 pr-10 pl-9 border border-white/15 rounded-lg">
                {children}
            </div>
        </div>
    );
};














//  {/* <div className="wind flex items-center gap-3">
//                     <MdOutlineWindPower className="text-3xl" />
//                     <div>
//                         <p className="font-medium">Wind</p>
//                         <p className="text-sm">9kph</p>
//                     </div>
//                 </div> */}

//                 {/* <div className="wind flex items-center gap-3">
//                     <PiThermometer className="text-3xl" />
//                     <div>
//                         <p className=" font-medium">Feels Like</p>
//                         <p className="text-sm">22&deg;C</p>
//                     </div>
//                 </div> */}

//                 {/* <div className="humidity flex items-center gap-3">
//                     <SiRainmeter className="text-3xl" />
//                     <div>
//                         <p className=" font-medium">Humidity</p>
//                         <p className="text-sm">43%</p>
//                     </div>
//                 </div> */}

//                 {/* <div className="pressure flex items-center gap-3">
//                     <IoSpeedometerOutline className="text-3xl" />
//                     <div>
//                         <p className=" font-medium">Pressure</p>
//                         <p className="text-sm">1013hPa</p>
//                     </div>
//                 </div> */}