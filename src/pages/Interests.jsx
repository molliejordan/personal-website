import TopAppBar from "../components/TopAppBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InterestsMasonry from "../components/InterestsMasonry";

const Interests = () => {
  
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  }

  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <main className="w-full flex-grow">
          <div className="w-full flex pt-48 items-center justify-center pb-32">
            <div className="w-4/5">
              <h1 className="font-jetbrains text-left text-6xl pb-8">Interests</h1>
              <p className="font-inter text-left pb-10">Hover over each interest to learn more!</p>
              <InterestsMasonry />
              {/* <p className="text-left">This page is in progress, but in the meantime, check out some of the organizations I am a part of!</p>
              <div className="flex w-full justify-around mt-16 font-jetbrains">
                <button className="bg-emerald-600 rounded-full h-16 text-white" onClick={() => window.open("https://www.instagram.com/ncstatebackpackingclub/")}>
                  <p>Backpacking Club at NC State</p>
                </button>
                <button className="bg-rose-600 rounded-full h-16 text-white" onClick={() => window.open("https://honors.dasa.ncsu.edu/")}>
                  <p>University Scholars Program</p>
                </button>
                <button className="bg-blue-600 rounded-full text-white" onClick={() => window.open("https://www.ncsuapo.org/")}>
                  <p>Alpha Phi Omega</p>
                </button>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Interests;
