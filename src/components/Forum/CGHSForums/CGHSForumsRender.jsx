import '../Forum.css';
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

// Importing Components
import CGHSImportantGuidelines from "./Topics/CGHSImportantGuidelines.jsx";
import CGHSRatesList from "./Topics/CGHSRatesList.jsx";
import CGHSHospitals from "./Topics/CGHSHospitals.jsx";
import CGHSPlasticCardForm from "./Topics/CGHSPlasticCardForm.jsx";
import CGHSReimbursmentForm from "./Topics/CGHSReimbursmentForm.jsx";

function CGHSForumsRender() {
  return (
    <>
      <div>
      <div className="forum">
            <p className="flex-center">Topics</p>
          <CGHSImportantGuidelines />
          <CGHSHospitals />
          <CGHSRatesList />
          <CGHSPlasticCardForm />
          <CGHSReimbursmentForm />
        </div>
      </div>
    </>
  );
}

export default CGHSForumsRender;
