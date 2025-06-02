// import { useNavigate } from "react-router-dom";
// import "../../Forum.css";
// import documentation from "../../../../assets/img/file.png";

// function CSDCanteenMenu() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <div onClick={() => navigate("./")} className="op" id="cghs3">
//         <div className="content flex-al-center">
//           {/* <div className="circle flex-center"><img className="fileImg" src={documentation} alt="" /></div> */}
//           <div className="op-data" id="cghs3-data">
//             <div className="docName" data-topicName="Admin">"Item No.     Item Name       Price(₹)</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CSDCanteenMenu;
import { useNavigate } from "react-router-dom";
import "../../Forum.css";
import documentation from "../../../../assets/img/file.png";

function CSDCanteenMenu() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(-1)} className="op" id="csd-canteen-menu">
        <div className="content flex-al-center">
          {/* <div className="circle flex-center">
            <img className="fileImg" src={documentation} alt="Menu Icon" />
          </div> */}
          <div className="op-data" id="csd-canteen-data">
            <div className="docName" data-topicName="CSDCanteen">
              <h3>CSD Canteen Menu</h3>
              <table className="canteen-menu">
                <thead>
                  <tr>
                    <th>Item No.</th>
                    <th>Item Name</th>
                    <th>Price (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Veg Sandwich</td><td>40</td></tr>
                  <tr><td>2</td><td>Masala Dosa</td><td>60</td></tr>
                  <tr><td>3</td><td>Chole Bhature</td><td>70</td></tr>
                  <tr><td>4</td><td>Aloo Paratha (with Curd)</td><td>50</td></tr>
                  <tr><td>5</td><td>Paneer Roll</td><td>80</td></tr>
                  <tr><td>6</td><td>Vegetable Pulao</td><td>60</td></tr>
                  <tr><td>7</td><td>Samosa (per piece)</td><td>20</td></tr>
                  <tr><td>8</td><td>Poha</td><td>40</td></tr>
                  <tr><td>9</td><td>Fresh Lime Soda</td><td>40</td></tr>
                  <tr><td>10</td><td>Cold Coffee</td><td>60</td></tr>
                  <tr><td>11</td><td>Idli Sambhar</td><td>50</td></tr>
                  <tr><td>12</td><td>Bread Pakora</td><td>30</td></tr>
                  <tr><td>13</td><td>Chai (Tea)</td><td>20</td></tr>
                  <tr><td>14</td><td>Lemon Tea</td><td>25</td></tr>
                  <tr><td>15</td><td>French Fries</td><td>70</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CSDCanteenMenu;
