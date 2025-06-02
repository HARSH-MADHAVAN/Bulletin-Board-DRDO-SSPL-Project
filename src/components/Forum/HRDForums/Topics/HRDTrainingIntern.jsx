import { useNavigate } from "react-router-dom";
import "../../Forum.css";
import documentation from "../../../../assets/img/file.png";

function HRDTrainingIntern() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate("./")} className="op" id="hrd4">
        <div className="content flex-al-center">
          <div className="circle flex-center"><img className="fileImg" src={documentation} alt="" /></div>
          <div className="op-data" id="hrd4-data">
            <div className="docName" data-topicName="Admin">Training Registration for Intern</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HRDTrainingIntern;
