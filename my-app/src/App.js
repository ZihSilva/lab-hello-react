import './App.css';
import Navbar from ".components/Navbar";
import Main from ".components/Main";
import Section from "./components/Section";


function App() {
  return (
    <div className="App">
      <div className="container">
       <Navbar />
       <Main />
    </div>
    <Section />
    </div>
  );
}

export default App;
