import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      {/* <header className="App-header"> */}
      <Router>
      <NavBar />      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
       
    </Router>
      {/* </header> */}
  
       <Footer /> 

    </div>
  );
}

export default App;
