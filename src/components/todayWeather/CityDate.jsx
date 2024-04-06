import { GrLocation } from "react-icons/gr";


export const CityDate = ({ city, day }) => {
    return (
        <div className="city-date self-end space-y-3 drop-shadow-2xl">
            <p className="text-4xl font-medium flex items-center gap-2"><GrLocation className="text-3xl" />{city}</p>
            <p className="text-lg ml-2"> <span className="text-xl font-medium">{day}</span>&nbsp;&nbsp;&nbsp; April 02, 2024</p>
        </div>
    )
}
