import Homepage from "./components/Homepage/Homepage"
import Cv from "./components/resume/Cv"

import "./index.css"
import { useEffect } from "react"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const currentUrl = new URL(window.location.href)
  const hash = currentUrl.hash

  useEffect(()=>{
    if(hash){
      const item = document.querySelector(hash)
      if(item){
          item.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }
  }
  }, [window.onload])


  return (
    
    <>
              <Router>
                <Routes>
                      <Route path="/" element={<Homepage />} />
                      <Route path="/cv" element={<Cv />}/>
              
                </Routes>
              </Router>
        <ToastContainer />
    </>
  );
}

export default App;
