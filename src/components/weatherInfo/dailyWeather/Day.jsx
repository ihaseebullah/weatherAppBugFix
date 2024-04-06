
export const Day = ({ day, weatherIcon, temperature }) => {
    return (
        <div className="flex flex-col items-center gap-5 border flex-grow border-white/15 rounded-lg py-4 w-32">
            <p className="text-2xl font-medium">{day}</p>
            {weatherIcon}
            <p className="text-2xl">{temperature}&deg;C</p>
        </div>
    );
};