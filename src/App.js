
import './App.css';
import all_grades from "./images/all_grades.png";
import for_grades3 from "./images/for_grade3.png";
import for_grades4 from "./images/for_grade4.png";
import for_grades5 from "./images/for_grade5.png";
import for_grades6 from "./images/for_grade6.png";
import for_grades7 from "./images/for_grade7.png";
import for_grades8 from "./images/for_grade8.png";

import grade3 from "./images/grade3.png";
import grade4 from "./images/grade4.png";
import grade5 from "./images/grade5.png";
import grade6 from "./images/grade6.png";
import grade7 from "./images/grade7.png";
import grade8 from "./images/grade8.png";


function App() {
  return (
    <div>
        <div className="App">
          <div className="topDesign"></div>
          <div>

              <h1 className="collor">Problem Statement:</h1>
              <h2> Citywide 3 to 8 graders math results between 2013-2019. See whether students in New York City have improved math and able to find whether there is a problem in education system.</h2>
              <h1 className="collor">Why I picked this</h1>
              <h2>This project has personal significance to me because I was also one of the students who had to take math exams. When I took the math exams, I felt unprepared, I know others in this situation who had to retake it due to schools not preparing us for it. I wanted to compare the math exam scores throughout the years to see if there has been an improvement or not. And these are for students who is going to take this exam and creating less stressful data for them. I don’t think there is an existing solution for it. Students often do not look at the data and find out success rates over the year. I just want to make the data easier to navigate and help them to understand better.</h2>
              <div>
              <h1 className="collor">For all grades math results over the years</h1>
              <img src= {all_grades} />
              <h1 className="collor">Students who did well in math exam over the years for each grade:</h1>
              <img src= {for_grades3} />
              <img src= {for_grades4} />
              <img src= {for_grades5} />
              <img src= {for_grades6} />
              <img src= {for_grades7} />
              <img src= {for_grades8} />
              <h1 className="collor">Students math exam results over the years for each grade:</h1>
              <img src= {grade3} />
              <img src= {grade4} />
              <img src= {grade5} />
              <img src= {grade6} />
              <img src= {grade7} />
              <img src= {grade8} />

              </div>
             
              
          </div>
        </div>
      </div>
  );
}

export default App;
