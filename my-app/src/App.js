import React from 'react';
import MainPage from './page/MainPage';//처음 페이지
import LoginPage from './page/LoginPage';//Login페이지
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
