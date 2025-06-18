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
import EntryPage from "./main components/EntryPage";
import MainLayout from "./MainLayout";
export const siteKey = "6Lc0UvoqAAAAABIRkR2atTzdiUIPRuG_VN4Byub8" 
// export const siteKey = "6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz" 
function App() {
  // axios.defaults.baseURL = "https://sumagowebbackend.sumagodemo.com/"
  axios.defaults.baseURL = "https://nodebackend.sumagoinfotech.com/";

  const { blogs, solutions } = useBlog();
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        {/* Routes using the MainLayout */}
        <Route element={<MainLayout />}>
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

          <Route path="/home" element={<Home />} />
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
        </Route>
          <Route path="/" element={<EntryPage />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
