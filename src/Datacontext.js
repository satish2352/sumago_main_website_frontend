import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const useBlog = () => useContext(DataContext);

const Datacontext = ({ children }) => {


    const [blogs, setblogs] = useState([])
    useEffect(() => {
        axios.get("/Blogdetails/getBlogdetails")
            .then((result) => setblogs(result.data))
            .catch((err) => console.log("err", err));


    }, []);
    const [solutions, setsolutions] = useState([])
    useEffect(() => {
        axios.get("/offeredservices/getofferedservices")
            .then((result) => setsolutions(result.data))
            .catch((err) => console.log("err", err));


    }, []);

    return (
        <DataContext.Provider value={{ blogs, solutions }}>
            {children}
        </DataContext.Provider>
    );
};


export default Datacontext