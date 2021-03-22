import "./ModelS.css";
import React, { Component } from 'react';

class ModelS extends Component {
  render() {
    return (
      <div>
      <h1>Model S</h1>
      <span>Plaid</span>

      <li>
        <img />
      </li>

      <div className="modelScontainer">

        <div>
          <h3>628km</h3>
          <p>Range (est.)</p>
        </div>

        <div>
          <h3>2.1s</h3>
          <p>0-100 km/h*</p>
        </div>

        <div>
          <h3>322km/h</h3>
          <p>Top Speed+</p>
        </div>

        <div>
          <h3>1,020hp</h3>
          <p>Peak Power</p>
        </div>
        <button>ORDER NOW</button>

      </div>

      <div>
        <p>Specs displayed are US values</p>
      </div>
    </div>
    )
  }
}

export default ModelS;

// const ModelS = () => {
//   return (
//     <div>
//       <h1>Model S</h1>
//       <span>Plaid</span>

//       <li>
//         <img />
//       </li>

//       <div className="modelScontainer">

//         <div>
//           <h3>628km</h3>
//           <p>Range (est.)</p>
//         </div>

//         <div>
//           <h3>2.1s</h3>
//           <p>0-100 km/h*</p>
//         </div>

//         <div>
//           <h3>322km/h</h3>
//           <p>Top Speed+</p>
//         </div>

//         <div>
//           <h3>1,020hp</h3>
//           <p>Peak Power</p>
//         </div>
//         <button>ORDER NOW</button>

//       </div>

//       <div>
//         <p>Specs displayed are US values</p>
//       </div>
//     </div>
//   );
// };


