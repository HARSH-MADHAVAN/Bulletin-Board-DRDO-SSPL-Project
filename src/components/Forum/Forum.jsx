import './Forum.css';
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

// Importing Components
import Admin from './AdminForum.jsx';
import CGHS from './CGHSForum.jsx';

function Forum() {
  return (
    <>
      <div>
      <div className="forum">
            <p className="flex-center">Forum</p>
            <Link className="topic" to="/admin"><Admin /></Link>
            <Link className="topic" to="/cghs"><CGHS /></Link>
        </div>
      </div>
    </>
  );
}

export default Forum;
