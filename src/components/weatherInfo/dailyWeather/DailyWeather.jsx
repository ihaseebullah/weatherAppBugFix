
export const DailyWeather = ({children}) => {
    return (
        <div className="daily-weather flex-1">
            <p className="text-2xl font-medium ml-2 mb-5 relative before:bg-slate-400 before:w-1 before:h-[74%] before:absolute before:-left-2 before:bottom-1 before:rounded-full">Daily Weather</p>
            <div className="flex justify-between gap-4">
                {children}
            </div>
        </div>
    );
};
