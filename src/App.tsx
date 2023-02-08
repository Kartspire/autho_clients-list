import { useState } from "react";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Info } from "./components/Info";
import { Login } from "./components/Login";
import { Main } from "./components/Main";
import { WithLoader } from "./components/WithLoader";
import "./main.global.css";

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
