import { useNavigate } from "react-router-dom";
import "./Forum.css";
import documentation from "../../assets/img/documentation.png";

function FinanceForum() {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <>
      <div onClick={() => navigate("/Finance")} className="op" id="op4">
        <div className="content flex-al-center">
          <div className="circle"><img src={documentation} alt="" /></div>
          <div className="op-data" id="op4-data">
            <div className="docType" data-topic="Finance">Finance</div>
            <div className="noOfTopics">Topics: <b>0</b></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinanceForum;
