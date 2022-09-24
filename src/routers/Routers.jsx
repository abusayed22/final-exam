import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAuthCheck from '../hooks/useAuthCheck';
import Login from '../pages/login/Login';
import Projects from '../pages/projects/Projects';
import Teams from '../pages/teams/Teams';




export default function router() {
  return !useAuthCheck? <h1>Authoraization checking...</h1>:
  (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="teams" element={<Teams />} />
        <Route path="projects" element={<Projects />} />
         </Routes>
  </BrowserRouter>
  )
}
