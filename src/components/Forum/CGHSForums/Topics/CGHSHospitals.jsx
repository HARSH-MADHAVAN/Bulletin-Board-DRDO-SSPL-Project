import { useNavigate } from "react-router-dom";
import "../../Forum.css";
import documentation from "../../../../assets/img/file.png";

function CGHSHospitals() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate("./")} className="op" id="cghs3">
        <div className="content flex-al-center">
          <div className="circle flex-center"><img className="fileImg" src={documentation} alt="" /></div>
          <div className="op-data" id="cghs3-data">
            <div className="docName" data-topicName="Admin">CGHS Hospitals</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CGHSHospitals;
