import { useNavigate } from "react-router-dom";
import "./Forum.css";
import documentation from "../../assets/img/documentation.png";

function AdminForums() {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <>
      <div onClick={() => navigate("/admin")} className="op" id="op1">
        <div className="content flex-al-center">
          <div className="circle"><img src={documentation} alt="" /></div>
          <div className="op-data" id="op1-data">
            <div className="docType" data-topic="Admin">प्रशासन / Admin</div>
            <div className="noOfTopics">Topics: <b>3</b></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminForums;
