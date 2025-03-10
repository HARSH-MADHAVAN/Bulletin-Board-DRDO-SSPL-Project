import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Importing Pages
import UserMain from "../pages/UserMain/UserMain.jsx";
import CGHS from "../pages/CGHS/CGHS.jsx";
import Admin from "../pages/Admin/Admin.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/usermain" element={<UserMain />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cghs" element={<CGHS />} />
        
        {/* Default Route: Redirect to /usermain if path is unknown */}
        <Route path="*" element={<Navigate to="/usermain" />} />
      </Routes>
    </Router>
  );
}

export default App;
