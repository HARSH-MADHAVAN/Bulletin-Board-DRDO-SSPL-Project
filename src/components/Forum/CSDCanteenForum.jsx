import { useNavigate } from "react-router-dom";
import "./Forum.css";
import documentation from "../../assets/img/documentation.png";

function CSDCanteenForum() {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <>
      <div onClick={() => navigate("/CSDCanteen")} className="op" id="op3">
        <div className="content flex-al-center">
          <div className="circle"><img src={documentation} alt="" /></div>
          <div className="op-data" id="op3-data">
            <div className="docType" data-topic="CSDCanteen">CSD Canteen</div>
            <div className="noOfTopics">Topics: <b>0</b></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CSDCanteenForum;
