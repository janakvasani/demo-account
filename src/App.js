import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./Component/Header";
import Home from "./Home/Home";
import Generate from "./Generate";
import MainLogIn from "./MainLogIn/MainLogIn";
import GoogleLogin from "./GoogleLogin/GoogleLogin";
import { useState } from "react";

function App() {
  const [isClose, setIsClose] = useState(true);
  const clickClose = () => {
    setIsClose(!isClose)
  }
  const clickHeaderClose = () => {
    setIsClose(true)
  }
  return (
    <>
      <div className=".container App">
        <BrowserRouter>
          <Header clickHeaderClose={clickHeaderClose}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/generate" element={<Generate/>}/>
            <Route path="/login/" element={<MainLogIn isClose={isClose} clickClose={clickClose}/>} />
            <Route path="/1" element={<GoogleLogin />} />
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
