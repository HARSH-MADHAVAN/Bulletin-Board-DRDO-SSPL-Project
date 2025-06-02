import { useNavigate } from "react-router-dom";
import "../../Forum.css";
import documentation from "../../../../assets/img/file.png";

function CGHSRatesList() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate("./")} className="op" id="cghs2">
        <div className="content flex-al-center">
          <div className="circle flex-center"><img className="fileImg" src={documentation} alt="" /></div>
          <div className="op-data" id="cghs2-data">
            <div className="docName" data-topicName="Admin">CGHS Rates List </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CGHSRatesList;
