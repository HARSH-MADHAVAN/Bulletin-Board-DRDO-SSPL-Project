import '../Forum.css';
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";

// Importing Components
import AdminTADA from "./Topics/AdminTADA.jsx";
import AdminForms from "./Topics/AdminForms.jsx";
import AdminOfficialBags from "./Topics/AdminOfficialBags.jsx";

function AdminForumsRender() {
  return (
    <>
      <div>
      <div className="forum">
            <p className="flex-center">Topics</p>
          <AdminForms />
          <AdminTADA />
          <AdminOfficialBags />
        </div>
      </div>
    </>
  );
}

export default AdminForumsRender;
