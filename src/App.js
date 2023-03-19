import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import React, { useState,useEffect } from 'react'
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import NavBar from "./components/Navbar/NavBar";
import Episodes from "./components/Pages/Episodes";
import Location from "./components/Pages/Location";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CardDetails from "./components/Cards/CardDetails";

function App(){
  return(
    <Router>
      <div className="App">
      <NavBar />
      </div>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/:id" element={<CardDetails />}/>
  <Route path="/episodes" element={<Episodes />}/>
  <Route path="/episodes/:id" element={<CardDetails />}/>
  <Route path="/location" element={<Location />}/>
  <Route path="/location/:id" element={<CardDetails />}/>
</Routes>

    </Router>
  )
}

const Home = () => {

  let [pageNumber,setPageNumber] = useState(1);
  let [fetchedData,updateFetchedData] = useState([]);
  let {info,results} = fetchedData;
  let [search,setSearch] = useState("");

  let api =`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then((res)=>res.json());
      updateFetchedData(data);
    })()
  },[api])

  return (
    <div className="App">
      
      <h1 className="text-center">Rick & Mort Wiki by Francisco Albuquerque</h1>     
      
      <div className="container">      
        <div className="row">
          <div className="col-12">
          <Search setPageNumber={setPageNumber} setSearch={setSearch}/> 
            <div className="row">
              <Cards page="/" results={results}/>
            </div>
          </div>
        </div>
      
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
