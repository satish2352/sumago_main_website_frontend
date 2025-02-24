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

import Blogs from "./main components/Blogs";
import BlogDetails from "./main components/BlogDetails";
import { useBlog } from './Datacontext';
import Movingicon from './components/Movingicon'
function App() {
  // useEffect(() => {
  // axios.defaults.baseURL = "https://sumagowebbackend.sumagodemo.com/"
  // axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
  // axios.defaults.baseURL = "http://localhost:5000/";

  // axios.defaults.baseURL = "https://nodebackend.sumagoinfotech.com/";
  // }, []);

  const { blogs, solutions } = useBlog();
  return (
    <Router>
      <NewNavbar />
      <Header />
      <Routes>
        {/* <Route path="/" element={<StatrterPage />} /> */}
        {solutions.map((c) => {
          return (
            <Route
              key={c.title}
              path={`/solutions/${c.title.toLowerCase().replace(/\s+/g, '-')}`}
              element={
                <Oursolutions2 titles={c.title} info={c.text} inmg={c.img} />
              }
            />
          );
        })}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/solutions" element={<Oursolutions2 />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact1 />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        {/* <Route path="/blogsdetails" element={<BlogDetails />} /> */}
        {/* <Route path="/" element={<StatrterPage />} /> */}
        {blogs.map((c) => {
          return (
            <Route
              key={c.title}
              path={`/blogdetals/${c.id}`}
              element={
                <BlogDetails text={c.text} img={c.img} subtitle={c.subtitle} />
              }
            />
          );
        })}
      </Routes>

      <Footer />
      <Movingicon />
    </Router>
  );
}

export default App;
