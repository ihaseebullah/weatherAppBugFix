import { FiSearch } from "react-icons/fi";


export const Form = ({ plhText, value, setter, loadWeatherData }) => {
    return (
        <form onSubmit={loadWeatherData} className="search-bar mt-2 mr-5 ml-auto flex justify-between items-center gap-3 bg-white/75 w-[25%] rounded-md">
            <input
                className="rounded-md flex-1 bg-transparent placeholder:text-black/45 text-black font-poppins py-3 pl-[0.75rem] outline-none"
                type="text"
                id="searchBars"
                value={value}
                placeholder={plhText}
                onChange={(e) => setter(e.target.value)}
            />
            <button
                className="h-full pl-3"
                type="submit"
            >
                <FiSearch className="text-slate-600 text-xl mr-[0.7rem]" />
            </button>
        </form>
    );
};

