import { useNavigate } from "react-router-dom";
import "../../Forum.css";
import documentation from "../../../../assets/img/file.png";

function ITAntivirus() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate("./")} className="op" id="it1">
        <div className="content flex-al-center">
          <div className="circle flex-center"><img className="fileImg" src={documentation} alt="" /></div>
          <div className="op-data" id="it1-data">
            <div className="docName" data-topicName="Admin">Antivirus Link</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ITAntivirus;
