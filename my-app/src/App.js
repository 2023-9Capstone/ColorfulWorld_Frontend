import React from 'react';
import MainPage from './page/MainPage';//처음 페이지
import LoginPage from './page/LoginPage';//Login페이지
import JoinPage from './page/JoinPage';//회원가입 페이지
import ChangePage from './page/ChangePage';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/join" element={<JoinPage/>} />
        <Route path="/change" element={<ChangePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
