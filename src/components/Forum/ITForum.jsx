import { useNavigate } from "react-router-dom";
import "./Forum.css";
import documentation from "../../assets/img/documentation.png";

function ITForum() {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <>
      <div onClick={() => navigate("/ITgroup")} className="op" id="op5">
        <div className="content flex-al-center">
          <div className="circle"><img src={documentation} alt="" /></div>
          <div className="op-data" id="op5-data">
            <div className="docType" data-topic="ITGroup">सूचना प्रौद्योगिकी समूह / Information Technology Group</div>
            <div className="noOfTopics">Topics: <b>4</b></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ITForum;
