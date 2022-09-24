import React, { useState } from "react";
import TeamNav from "../../components/teams/TeamNav";
import logo from "../../assets/images/logo.png";
import SingleTeam from "../../components/teams/SingleTeam";
import ModalTeam from "../../components/teams/ModalTeam";

function Teams() {


  // state for modal 
  const [onpend, setOpend] = useState(false);
  const modalToggled = () => {
    setOpend(prv => !prv)
  }
  return (
    <div>
      <>
        {/* Component Start */}
        <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
          {/* teams nav components */}
          <TeamNav />
          <div className="px-10 mt-6 flex justify-between">
            <h1 className="text-2xl font-bold">Teams</h1>
            <button className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
              <svg
                onClick={modalToggled}
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
            <ModalTeam open={onpend} control={modalToggled}/>
          </div>
          {/* single temas components */}
          <SingleTeam />
        </div>
        {/* Component End */}
        <a
          className="fixed bottom-0 right-0 flex items-center justify-center h-8 pl-1 pr-2 mb-6 mr-4 text-blue-100 bg-indigo-600 rounded-full shadow-lg hover:bg-blue-600"
          href="https://learnwithsumit.com"
          target="_top"
        >
          <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full">
            <img src="./images/logo.png" alt="LWS Logo" />
          </div>
          <span className="ml-1 text-sm leading-none">Learn with Sumit</span>
        </a>
      </>
    </div>
  );
}

export default Teams;
