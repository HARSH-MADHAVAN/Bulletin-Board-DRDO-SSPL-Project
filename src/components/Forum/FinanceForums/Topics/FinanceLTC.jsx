import { useNavigate } from "react-router-dom";
import "../../Forum.css";
import documentation from "../../../../assets/img/file.png";

function FinanceLTC() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate("./")} className="op" id="finance2">
        <div className="content flex-al-center">
          <div className="circle flex-center"><img className="fileImg" src={documentation} alt="" /></div>
          <div className="op-data" id="finance2-data">
            <div className="docName" data-topicName="Admin">LTC</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinanceLTC;
