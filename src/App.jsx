import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "../src/Pages/Login/Login";
import Player from "./Pages/Player/Player";


function App() {
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
