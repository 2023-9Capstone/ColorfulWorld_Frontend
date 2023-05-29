import React, { useState, createContext } from "react";
import MainPage from "./page/MainPage"; //처음 페이지
import LoginPage from "./page/LoginPage"; //Login페이지
import JoinPage from "./page/JoinPage"; //회원가입 페이지
import ChangePage from "./page/ChangePage"; //이미지 업로드 페이지
import ResultPage from "./page/ResultPage"; //결과 페이지
import NotFoundPage from "./page/NotFoundPage"; //존재하지 않는 페이지
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const ImageContext = createContext(null);
function App() {
  const [image, setImage] = useState("");
  return (
    <ImageContext.Provider value={{ image, setImage }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/change" element={<ChangePage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ImageContext.Provider>
  );
}

export default App;
