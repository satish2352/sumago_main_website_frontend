import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./main components/Home";
import AboutUs from "./main components/AboutUs";
import Footer from "./main components/Footer";
import Career from "./main components/Career";
import Contact1 from "./main components/Contact1";
import { data } from "./main components/obnjectsfie";
import Oursolutions2 from "./main components/Oursolutions2";
import NewNavbar from "./components/NewNavbar";
import axios from "axios";
import GoUp from "./components/GoUp";
function App() {
  // useEffect(() => {
  // axios.defaults.baseURL = "https://sumagodemo.com/"
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
  // axios.defaults.baseURL = "https://nodebackend.sumagoinfotech.com/";
  // }, []);
  return (
    <Router>
      <NewNavbar />
      <Header />
      <Routes>
        {/* <Route path="/" element={<StatrterPage />} /> */}
        {data.map((c) => {
          return (
            <Route
              key={c.title}
              path={`/solutions/${c.title}`}
              element={
                <Oursolutions2 titles={c.title} info={c.info} inmg={c.inmg} />
              }
            />
          );
        })}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/solutions" element={<Oursolutions2 />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact1 />} />
      </Routes>
      <GoUp />
      <Footer />
    </Router>
  );
}

export default App;
