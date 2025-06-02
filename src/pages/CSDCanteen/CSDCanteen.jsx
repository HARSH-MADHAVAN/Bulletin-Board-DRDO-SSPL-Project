import './CSDCanteen.css';
import Header from '../../components/layout/Header/Header.jsx';
import Navbar from '../../components/layout/Navbar/Navbar.jsx';
import Forums from '../../components/Forum/CSDCanteenForums/CSDCanteenForumsRender.jsx';
import BottomNavbar from '../../components/layout/Navbar/BottomNavbar.jsx';

function CSDCanteen() {
  return (
    <>
      <div className="container">
        <Header />
        <Navbar />
        <Forums /> {/* Contains CSD Canteen Forums/Documents/Files */}
        <BottomNavbar />
      </div>
    </>
  );
}

export default CSDCanteen; // ✅ Exporting the correct component
