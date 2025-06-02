import { useNavigate } from "react-router-dom";
import "../../Forum.css";
import documentation from "../../../../assets/img/file.png";

function ITFlow() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate("./")} className="op" id="it3">
        <div className="content flex-al-center">
          <div className="circle flex-center"><img className="fileImg" src={documentation} alt="" /></div>
          <div className="op-data" id="it3-data">
            <div className="docName" data-topicName="Admin">Flow to Create Internet / LAN mail ID</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ITFlow;
