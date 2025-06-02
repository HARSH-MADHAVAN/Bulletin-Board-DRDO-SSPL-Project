import { useNavigate } from "react-router-dom";
import "../../Forum.css";
import documentation from "../../../../assets/img/file.png";

function ITDosDont() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate("./")} className="op" id="it2">
        <div className="content flex-al-center">
          <div className="circle flex-center"><img className="fileImg" src={documentation} alt="" /></div>
          <div className="op-data" id="it2-data">
            <div className="docName" data-topicName="Admin">Do's And Don't</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ITDosDont;
