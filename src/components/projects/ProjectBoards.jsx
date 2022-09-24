import React from "react";
import BaclogBoard from "./singleBorads/BaclogBoard";
import BlockedBoard from "./singleBorads/BlockedBoard";
import DoingBoard from "./singleBorads/DoingBoard";
import DoneProject from "./singleBorads/DoneProject";
import ReadyBoard from "./singleBorads/ReadyBoard";
import ReviewBoard from "./singleBorads/ReviewBoard";

function ProjectBoards() {
  return (
    <div>
      <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
        {/* baclog projec board */}
        <BaclogBoard />
        
        {/* Ready project board */}
        <ReadyBoard />
        
        {/* doing project board */}
        <DoingBoard /> 
        
        {/* Review project board */}
        <ReviewBoard />

        {/* blocked project board */}
        <BlockedBoard />

        {/* done project board */}
        <DoneProject />
        <div className="flex-shrink-0 w-6" />
      </div>
    </div>
  );
}

export default ProjectBoards;
