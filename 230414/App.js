import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './layout/Layout';
import Home from "./component/Home";
import HeroList from './component/hero/HeroList';
import HeroWrite from './component/hero/HeroWrite';
import BoardList from './component/board/BoardList';
import BoardWrite from './component/board/BoardWrite';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/hero/list" element={<HeroList />} />
          <Route path="/hero/write" element={<HeroWrite />} />
          <Route path="/hero/view/:id" element={<HeroWrite />} />
          <Route path="/board/list" component={BoardList} />;
        </Route>
      </Routes>
    </div>
  );
}

export default App;
