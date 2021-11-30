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
              <h1>Problem Statement: Citywide 3 to 8 graders math results between 2013-2019. See whether students in New York City have improved math and able to find whether there is a problem in education system.</h1>
              <h2>Why I picked this</h2>
              <h1>This project has personal significance to me because I was also one of the students who had to take math exams. When I took the math exams, I felt unprepared, I know others in this situation who had to retake it due to schools not preparing us for it. I wanted to compare the math exam scores throughout the years to see if there has been an improvement or not. And these are for students who is going to take this exam and creating less stressful data for them. I don’t think there is an existing solution for it. Students often do not look at the data and find out success rates over the year. I just want to make the data easier to navigate and help them to understand better.</h1>
              <Route component={welcome} path="/welcome" />
              
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
