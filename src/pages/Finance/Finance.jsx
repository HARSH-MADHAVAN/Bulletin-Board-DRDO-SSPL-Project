import './Finance.css';
import Header from '../../components/layout/Header/Header.jsx';
import Navbar from '../../components/layout/Navbar/Navbar.jsx';
import Forums from '../../components/Forum/FinanceForums/FinanceForumsRender.jsx';
import BottomNavbar from '../../components/layout/Navbar/BottomNavbar.jsx';

function Finance() {
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

export default Finance; // ✅ Exporting the correct component
