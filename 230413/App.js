import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './layout/Layout';
import Home from "./component/Home";
import ScoreList from "./component/Score/ScoreListFront";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Score/list" element={<ScoreList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
