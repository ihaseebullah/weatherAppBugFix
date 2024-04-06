
export const WeatherInfo = ({ children }) => {
    return (
        <div className='flex gap-20 px-6 py-5 border-t-2 border-white/10 bg-black/15 backdrop-blur-xl'>
            {children}
        </div>
    );
};
