import './UserMain.css'
import Header from '../../components/layout/Header/Header.jsx';
import Navbar from '../../components/layout/Navbar/Navbar.jsx';
import Forum from '../../components/Forum/Forum.jsx';
import BottomNavbar from '../../components/layout/Navbar/BottomNavbar.jsx';

function UserMain() {
  return (
    <>
    <div className="container">
      <Header />
      <Navbar />
      <Forum />
      <BottomNavbar />
    </div>
    </>
  )
}

export default UserMain
