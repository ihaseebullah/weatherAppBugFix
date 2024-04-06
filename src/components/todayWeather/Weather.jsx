import { BsCloudLightningRainFill } from "react-icons/bs";


export const Weather = ({ temperature, weatherDesc }) => {
    return (
        <div className="space-y-7 drop-shadow-2xl">
            <p className="text-7xl flex gap-5 items-center font-medium"><BsCloudLightningRainFill className="text-9xl" /> {temperature}&deg;C</p>
            <p className="text-3xl font-medium">{weatherDesc}</p>
        </div>
    );
};

