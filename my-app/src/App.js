import React from 'react';
import MainPage from './page/MainPage';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
