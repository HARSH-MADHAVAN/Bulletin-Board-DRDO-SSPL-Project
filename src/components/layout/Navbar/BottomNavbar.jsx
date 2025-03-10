import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import home from "../../../assets/img/home.svg";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>

      <div onClick={() => navigate("/usermain")} className="flex nav-2">
        <div className="flex-center home-btn">
          <img src={home} alt="" />
          Board Index
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
