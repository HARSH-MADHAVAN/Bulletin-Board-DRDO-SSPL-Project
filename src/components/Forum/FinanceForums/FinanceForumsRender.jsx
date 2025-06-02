import '../Forum.css';
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

// Importing Components
import FinanceNewspaperReimbursment from "./Topics/FinanceNewspaperReimbursment.jsx";
import FinanceCGHSClaim from "./Topics/FinanceCGHSClaim.jsx";
import FinanceTDDA from "./Topics/FinanceTDDA.jsx";
import FiannceTelephoneReimbursment from "./Topics/FinanceTelephoneReimbursment.jsx";
import FinanceLTC from "./Topics/FinanceLTC.jsx";

function FinanceForumsRender() {
  return (
    <>
      <div>
      <div className="forum">
            <p className="flex-center">Topics</p>
          <FinanceTDDA />
          <FinanceLTC />
          <FinanceCGHSClaim />
          <FiannceTelephoneReimbursment />
          <FinanceNewspaperReimbursment />
        </div>
      </div>
    </>
  );
}

export default FinanceForumsRender;
