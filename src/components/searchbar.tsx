import { NavLink } from "react-router-dom";

const search = "/search.png";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center bg-white border border-gray-300 rounded-lg ml-20 p-0.5 w-1/5 relative">
      <div
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
        style={{
          backgroundImage: `url(${search})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "30px",
          height: "30px",
        }}
      ></div>
      <form id="form-size-control-filter" className="w-full border-none pl-10">
        <input
          type="text"
          className="flex-1 outline-none border-none text-black p-3 w-4/5"
          placeholder="Search user or category..."
        />
      </form>
    </div>
  );
};

export default SearchBar;
