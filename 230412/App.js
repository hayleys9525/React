import logo from './logo.svg'
import Iftest1 from './component/Iftest1';
import Fortest1 from './component/Fortest1';
import Fortest2 from "./component/Fortest2";
import Hero from './component/Hero';
import "./App.css";
import gugudan from './component/gugudan';
import HeroList from './component/HeroList';

function App() {
  return (
    <div className="App">
      <h1 className="title">제목1</h1>
      {/*<HelloComponent/>*/}
      {/*<Iftest1/>*/}
      {/*<Fortest2/>*/}
      <Hero/>
      <gugudan/>
    </div>
  );
}
export default App;
