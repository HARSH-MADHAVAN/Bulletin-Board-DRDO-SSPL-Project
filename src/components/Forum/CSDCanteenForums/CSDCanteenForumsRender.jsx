import '../Forum.css';
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

// Importing Components
import CSDCanteenMenu from "./Topics/CSDCanteenMenu.jsx";

function CSDCanteenForumsRender() {
  return (
    <>
      <div>
      <div className="forum">
            <p className="flex-center">Topics</p>
            <CSDCanteenMenu />
        </div>
      </div>
    </>
  );
}

export default CSDCanteenForumsRender;
