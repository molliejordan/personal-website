import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import headerImage from "../assets/images/header-background.png";
import logo from "../assets/logos/hexagon.svg";

const TopAppBar = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 0) {
        header.classList.add("shadow-md");
      } else {
        header.classList.remove("shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className="font-jetbrains transition-shadow bg-white text-black p-4 flex justify-between items-start w-full fixed top-0 left-0"
    >
      <div onClick={() => handleClick("/")}>
        <h1 className="flex pl-4 pt-4 pb-4 text-lg">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 mr-3"
            onClick={() => handleClick("/")}
          />
          <span className="text-2xl block">Mollie Jordan</span>
        </h1>
      </div>

      <div className="flex space-x-6 text-base pt-2 pr-4 tracking-wide focus:outline-none">
        <button
          className="bg-white text-black rounded-full border-2 border-black top-0 hover:border-amber-500 hover:bg-amber-500 hover:text-white "
          onClick={() => handleClick("/projects")}
        >
          PROJECTS
        </button>
        <button
          className="bg-white text-black rounded-full border-2 border-black top-0 hover:bg-rose-600 hover:text-white hover:border-white"
          onClick={() => handleClick("/research")}
        >
          RESEARCH
        </button>
        <button
          className="bg-white text-black rounded-full border-2 border-black top-0 hover:bg-emerald-600 hover:text-white hover:border-white"
          onClick={() => handleClick("/interests")}
        >
          INTERESTS
        </button>
        <button
          className="bg-white text-black rounded-full border-2 border-black top-0 hover:bg-blue-600 hover:text-white hover:border-white"
          onClick={() => handleClick("/resume")}
        >
          RESUME
        </button>
      </div>
    </header>
  );
};

export default TopAppBar;
