import Home from "./Pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../src/Pages/Login/Login";
import Player from "./Pages/Player/Player";
import 'react-toastify/dist/ReactToastify.css';
import{auth} from './firebase.js'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const navigate =useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log('Logged In')
        navigate('/')
      }else{
        console.log('Logged Out')
        navigate('/login')
  
      }
    })
  },[])
  return (
    <> <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trailer/:id" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
