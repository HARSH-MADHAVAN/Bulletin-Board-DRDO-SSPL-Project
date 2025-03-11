import './Forum.css';
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

// Importing Components
import Admin from './AdminForum.jsx';
import CGHS from './CGHSForum.jsx';
import CSDCanteen from './CSDCanteenForum.jsx';
import Finance from './FinanceForum.jsx';
import HRD from './HRDForum.jsx';

function Forum() {
  return (
    <>
      <div>
      <div className="forum">
            <p className="flex-center">Forum</p>
            <Link className="topic" to="/admin"><Admin /></Link>
            <Link className="topic" to="/cghs"><CGHS /></Link>
            <Link className="topic" to="/CSDCanteen"><CSDCanteen /></Link>
            <Link className="topic" to="/Finance"><Finance /></Link>
            <Link className="topic" to="/HRD"><HRD /></Link>
        </div>
      </div>
    </>
  );
}

export default Forum;
