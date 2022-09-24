import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function TeamNav() {
  return (
    <div>
      <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
        <img src={logo} className="h-10 w-10" />
        <div className="ml-10">
          <Link
            className="mx-2 text-sm font-semibold text-indigo-700"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700"
            to="/teams"
          >
            Team
          </Link>
        </div>
        <buton className="flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer">
          <img
            src="https://assets.codepen.io/5041378/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1600304177&width=512"
            alt=""
          />
        </buton>
      </div>
    </div>
  );
}

export default TeamNav;
