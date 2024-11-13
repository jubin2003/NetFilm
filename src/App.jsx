import Home from "./Pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../src/Pages/Login/Login";
import Player from "./Pages/Player/Player";
import 'react-toastify/dist/ReactToastify.css';
import{auth} from './firebase.js'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

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
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trailer/:id" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
// Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjA0ZWRjZWFhMTk3ZTMxZGFmMTI3YzczYzU3ZDUxMyIsIm5iZiI6MTczMTMwMzE5MC4wOTM2NDI3LCJzdWIiOiI2NzMxOTA4MzcyMjFjNDEyYTZhZjhjZGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uuY-Tzw9eiuiMFcjwtn5nfKDKSylgPaVRgefSjYi7f8
