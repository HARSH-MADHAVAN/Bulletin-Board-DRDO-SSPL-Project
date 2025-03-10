import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import login from "../../../assets/img/login.svg";
import home from "../../../assets/img/home.svg";
import search from "../../../assets/img/search.svg";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="flex nav-1">
        <span className="flex-center login-btn">
          <img src={login} alt="" />
          Login
        </span>
      </div>

      <div onClick={() => navigate("/usermain")} className="flex nav-2">
        <div className="flex-center home-btn">
          <img src={home} alt="" />
          Board Index
        </div>
        <div className="flex-center search-btn">
          <img src={search} alt="" />
        </div>
      </div>

      <div className="flex-right">
        It is currently 19 Feb 2025, 14:17:28
      </div>
    </nav>
  );
}

export default Navbar;
