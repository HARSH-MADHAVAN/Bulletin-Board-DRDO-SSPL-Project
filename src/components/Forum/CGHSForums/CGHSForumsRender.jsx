import '../Forum.css';
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

// Importing Components
import CGHSLatestGuidelines from "./Topics/CGHSLatestGuidelines.jsx";
import CGHSRateListUpdated from "./Topics/CGHSRateListUpdated.jsx";

function CGHSForumsRender() {
  return (
    <>
      <div>
      <div className="forum">
            <p className="flex-center">Topics</p>
            <CGHSLatestGuidelines />
            <CGHSRateListUpdated />
        </div>
      </div>
    </>
  );
}

export default CGHSForumsRender;
