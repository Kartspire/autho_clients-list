import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Info } from "./components/Info";
import { Login } from "./components/Login";
import { Main } from "./components/Main";
import { WithLoader } from "./components/WithLoader";
import "./main.global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/main"
          element={
            <WithLoader>
              <Main />
            </WithLoader>
          }
        ></Route>
        <Route
          path="/info"
          element={
            <WithLoader>
              <Info />
            </WithLoader>
          }
        >
          <Route
            path=":id"
            element={
              <WithLoader>
                <Info />
              </WithLoader>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
