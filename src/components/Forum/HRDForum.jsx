import { useNavigate } from "react-router-dom";
import "./Forum.css";
import documentation from "../../assets/img/documentation.png";

function HRDForum() {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <>
      <div onClick={() => navigate("/HRD")} className="op" id="op5">
        <div className="content flex-al-center">
          <div className="circle"><img src={documentation} alt="" /></div>
          <div className="op-data" id="op5-data">
            <div className="docType" data-topic="HRD">एचआरडी / HRD</div>
            <div className="noOfTopics">Topics: <b>4</b></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HRDForum;
