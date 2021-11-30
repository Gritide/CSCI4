import logo from './logo.svg';
import './App.css';
import  welcome  from "./pages/welcome";
import  landing  from "./pages/landing";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
          <div className="topDesign"></div>
          <div>
            <Switch>
              <Route component={landing} exact path="/" />
             
              <Route component={welcome} path="/welcome" />
              
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
