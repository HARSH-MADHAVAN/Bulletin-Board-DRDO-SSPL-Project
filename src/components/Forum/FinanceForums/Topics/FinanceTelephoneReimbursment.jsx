import { useNavigate } from "react-router-dom";
import "../../Forum.css";
import documentation from "../../../../assets/img/file.png";

function FinanceTelephoneReimbursment() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate("./")} className="op" id="finance5">
        <div className="content flex-al-center">
          <div className="circle flex-center"><img className="fileImg" src={documentation} alt="" /></div>
          <div className="op-data" id="finance5-data">
            <div className="docName" data-topicName="Admin">Telephone Reimbursment</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinanceTelephoneReimbursment;
