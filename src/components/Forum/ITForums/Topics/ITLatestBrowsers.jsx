import { useNavigate } from "react-router-dom";
import "../../Forum.css";
import documentation from "../../../../assets/img/file.png";

function ITLatestBrowsers() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate("./")} className="op" id="it4">
        <div className="content flex-al-center">
          <div className="circle flex-center"><img className="fileImg" src={documentation} alt="" /></div>
          <div className="op-data" id="it4-data">
            <div className="docName" data-topicName="Admin">Latest Browsers</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ITLatestBrowsers;
