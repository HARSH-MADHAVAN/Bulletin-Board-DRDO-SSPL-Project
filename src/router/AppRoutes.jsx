// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // Importing Pages
// import UserMain from "../pages/UserMain/UserMain.jsx";
// import CGHS from "../pages/CGHS/CGHS.jsx";
// import Admin from "../pages/Admin/Admin.jsx";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/usermain" element={<UserMain />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/cghs" element={<CGHS />} />
        
//         {/* Default Route: Redirect to /usermain if path is unknown */}
//         <Route path="*" element={<Navigate to="/usermain" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Importing Pages
import UserMain from "../pages/UserMain/UserMain.jsx";
import CGHS from "../pages/CGHS/CGHS.jsx";
import Admin from "../pages/Admin/Admin.jsx";
import CSDCanteen from "../pages/CSDCanteen/CSDCanteen.jsx";
import Finance from "../pages/Finance/Finance.jsx";
import HRD from "../pages/HRD/HRD.jsx";
import ITGroup from "../pages/ITGroup/ITGroup.jsx";
import Library from "../pages/Libraryy/Library.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/usermain" element={<UserMain />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/cghs" element={<CGHS />} />
        <Route path="/csdcanteen" element={<CSDCanteen />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/hrd" element={<HRD />} />
        <Route path="/itgroup" element={<ITGroup />} />
        <Route path="/library" element={<Library />} />

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/usermain" />} />
      </Routes>
    </Router>
  );
}

export default App;

