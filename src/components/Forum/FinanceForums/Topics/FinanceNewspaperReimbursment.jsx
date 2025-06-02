import { useNavigate } from "react-router-dom";
import "../../Forum.css";
import documentation from "../../../../assets/img/file.png";

function FinanceNewspaperReimbursment() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate("./")} className="op" id="finance3">
        <div className="content flex-al-center">
          <div className="circle flex-center"><img className="fileImg" src={documentation} alt="" /></div>
          <div className="op-data" id="finance3-data">
            <div className="docName" data-topicName="Admin">Newspaper Reimbursment</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinanceNewspaperReimbursment;
