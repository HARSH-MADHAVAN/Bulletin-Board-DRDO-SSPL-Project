import '../Forum.css';
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

// Importing Components
import HRDCompletion from "./Topics/HRDCompletion.jsx";
import HRDTrainingCalender from "./Topics/HRDTrainingCalender.jsx";
import HRDTrainingForm from "./Topics/HRDTrainingForm.jsx";
import HRDTrainingIntern from "./Topics/HRDTrainingIntern.jsx";

function HRDForumsRender() {
  return (
    <>
      <div>
      <div className="forum">
            <p className="flex-center">Topics</p>
          <HRDTrainingIntern />
          <HRDCompletion />
          <HRDTrainingCalender />
          <HRDTrainingForm />
        </div>
      </div>
    </>
  );
}

export default HRDForumsRender;
