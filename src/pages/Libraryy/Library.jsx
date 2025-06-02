import './Library.css';
import Header from '../../components/layout/Header/Header.jsx';
import Navbar from '../../components/layout/Navbar/Navbar.jsx';
import Forums from '../../components/Forum/LibraryForums/LibraryForumsRender.jsx';
import BottomNavbar from '../../components/layout/Navbar/BottomNavbar.jsx';

function Library() {
  return (
    <>
      <div className="container">
        <Header />
        <Navbar />
        <Forums /> {/* Contains Library Forums/Documents/Files */}
        <BottomNavbar />
      </div>
    </>
  );
}

export default Library; // ✅ Exporting the correct component
