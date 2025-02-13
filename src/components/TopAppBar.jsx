import React from "react";
import { useNavigate } from "react-router-dom";

const TopAppBar = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <header className="font-jetbrains bg-teal-600 text-white p-4 flex justify-between items-start w-full fixed top-0 left-0">
      <div onClick={() => handleClick("/")}>
        <h1 className="pl-4 pt-4 pb-4 text-lg">
          <span className="text-7xl block">Mollie</span>
          <span className="text-7xl block">Jordan</span>
        </h1>
      </div>

      <div className="flex space-x-6 text-lg pt-4 pr-8 tracking-wide focus:outline-none">
        <button
          className="bg-teal-600 text-white rounded-full border-2 border-white top-0 hover:bg-white hover:text-teal-600 hover: border-white"
          onClick={() => handleClick("/projects")}
        >
          PROJECTS
        </button>
        <button
          className="bg-teal-600 text-white rounded-full border-2 border-white top-0 hover:bg-white hover:text-teal-600"
          onClick={() => handleClick("/research")}
        >
          RESEARCH
        </button>
        <button
          className="bg-teal-600 text-white rounded-full border-2 border-white top-0 hover:bg-white hover:text-teal-600"
          onClick={() => handleClick("/interests")}
        >
          INTERESTS
        </button>
        <button
          className="bg-teal-600 text-white rounded-full border-2 border-white top-0 hover:bg-white hover:text-teal-600"
          onClick={() => handleClick("/resume")}
        >
          RESUME
        </button>
      </div>
    </header>
  );
};

export default TopAppBar;
