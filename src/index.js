import React from "react";
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import './Axios';
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import UserRecommender from "./UserRecommender";
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/userrecommender" element={<UserRecommender/>} />
          </Routes>
        </BrowserRouter>  
  </React.StrictMode>
);
