import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/header";
import VocaList from "./component/voca_list/voca_list";
import VacaWrite from "./component/voca_wirte/vaca_write";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<VocaList />}></Route>
          <Route path="write" element={<VacaWrite />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
