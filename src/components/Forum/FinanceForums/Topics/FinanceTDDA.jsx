import { useNavigate } from "react-router-dom";
import "../../Forum.css";
import documentation from "../../../../assets/img/file.png";

function FinanceTDDA() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate("./")} className="op" id="finance4">
        <div className="content flex-al-center">
          <div className="circle flex-center"><img className="fileImg" src={documentation} alt="" /></div>
          <div className="op-data" id="finance4-data">
            <div className="docName" data-topicName="Admin">TD / DA</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinanceTDDA;
