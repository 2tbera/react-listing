import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import RootProvider from "./contexts/root.contect.handler";

function App() {
  return (
    <BrowserRouter>
      <RootProvider>
        <Header/>
        <Routes>
          <Route path='' element={<Home/>}/>
        </Routes>
      </RootProvider>
    </BrowserRouter>
  );
}

export default App;
