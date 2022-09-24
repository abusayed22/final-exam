import React from "react";
import ProjectBoards from "../../components/projects/ProjectBoards";
import ProjectNav from "../../components/projects/ProjectNav";

function Projects() {
  return (
    <div>
      <>
        {/* Component Start */}
        <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
          {/* project nav components */}
          <ProjectNav />
          <div className="px-10 mt-6">
            <h1 className="text-2xl font-bold">Project Board</h1>
          </div>
          {/* project boards */}
          <ProjectBoards />
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

export default Projects;
