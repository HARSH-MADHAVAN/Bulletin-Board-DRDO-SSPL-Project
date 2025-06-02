import './HRD.css';
import Header from '../../components/layout/Header/Header.jsx';
import Navbar from '../../components/layout/Navbar/Navbar.jsx';
import Forums from '../../components/Forum/HRDForums/HRDForumsRender.jsx';
import BottomNavbar from '../../components/layout/Navbar/BottomNavbar.jsx';

function HRD() {
  return (
    <>
      <div className="container">
        <Header />
        <Navbar />
        <Forums /> {/* Contains HRD Forums/Documents/Files */}
        <BottomNavbar />
      </div>
    </>
  );
}

export default HRD; // ✅ Exporting the correct component
