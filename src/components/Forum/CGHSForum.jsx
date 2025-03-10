import { useNavigate } from "react-router-dom";
import "./Forum.css";
import documentation from "../../assets/img/documentation.png";

function CGHSForum() {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <>
      <div onClick={() => navigate("/cghs")} className="op" id="op2">
        <div className="content flex-al-center">
          <div className="circle"><img src={documentation} alt="" /></div>
          <div className="op-data" id="op2-data">
            <div className="docType" data-topic="CGHS">CGHS</div>
            <div className="noOfTopics">Topics: <b>12</b></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CGHSForum;
