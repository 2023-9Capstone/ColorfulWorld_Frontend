import React from "react";
import MainPage from "./page/MainPage"; //처음 페이지
import LoginPage from "./page/LoginPage"; //Login페이지
import JoinPage from "./page/JoinPage";
import ChangePage from "./page/ChangePage";
import ResultPage from "./page/ResultPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/change" element={<ChangePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
