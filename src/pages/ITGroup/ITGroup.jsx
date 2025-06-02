import './ITGroup.css';
import Header from '../../components/layout/Header/Header.jsx';
import Navbar from '../../components/layout/Navbar/Navbar.jsx';
import Forums from '../../components/Forum/ITForums/ITForumsRender.jsx';
import BottomNavbar from '../../components/layout/Navbar/BottomNavbar.jsx';

function ITGroup() {
  return (
    <>
      <div className="container">
        <Header />
        <Navbar />
        <Forums /> {/* Contains CGHS Forums/Documents/Files */}
        <BottomNavbar />
      </div>
    </>
  );
}

export default ITGroup; // ✅ Exporting the correct component
