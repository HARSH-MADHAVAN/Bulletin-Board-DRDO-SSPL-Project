import { useNavigate } from "react-router-dom";
import "./Forum.css";
import documentation from "../../assets/img/documentation.png";

function LibraryForum() {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <>
      <div onClick={() => navigate("/Libraryy")} className="op" id="op6">
        <div className="content flex-al-center">
          <div className="circle"><img src={documentation} alt="" /></div>
          <div className="op-data" id="op6-data">
            <div className="docType" data-topic="Libraryy">पुस्तकालय / Library</div>
            <div className="noOfTopics">Topics: <b>0</b></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LibraryForum;
