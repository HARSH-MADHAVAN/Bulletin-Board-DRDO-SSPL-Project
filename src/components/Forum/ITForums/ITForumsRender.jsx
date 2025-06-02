import '../Forum.css';
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

// Importing Components
import ITLatestBrowsers from "./Topics/ITLatestBrowsers.jsx";
import ITDosDont from "./Topics/ITDosDont.jsx";
import ITAntivirus from "./Topics/ITAntivirus.jsx";
import ITFlow from "./Topics/ITFlow.jsx";

function HRDForumsRender() {
  return (
    <>
      <div>
      <div className="forum">
            <p className="flex-center">Topics</p>
          <ITLatestBrowsers />
          <ITDosDont />
          <ITFlow />
          <ITAntivirus />
        </div>
      </div>
    </>
  );
}

export default HRDForumsRender;
