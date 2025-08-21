

// import React from 'react';
// import Button from './propsandcards/Button';

// function Banna() {
//   return (
//     <div 
//       className="text-light text-start py-4" 
//       style={{ backgroundColor: "#3e3e3e" }}
//     >
//       <div className=" py-5">
//         <div className=" container py-5 ">
          
//           <div className=" col-12 col-md-7 col-lg-4 mb-4 mb-md-0">
//             <p className="fs-5 text-upercase p-2" style={{backgroundColor:"#434B4D",fontSize: "clamp(28px, 5vw, 50px)" }}>WELCOME TO CODESHAPER</p>
//             <h1 
//               style={{ fontSize: "clamp(28px, 5vw, 50px)", fontWeight: "bolder" }}
//             >
//               CONSULTING FOR EVERY BUSINESS
//             </h1>
//             <Button text="DISCOVER MORE" />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banna;


import React from 'react';
import Button from './propsandcards/Button';

function Banna() {
  return (
    <div 
      className="text-light py-4" 
      style={{ backgroundColor: "#3e3e3e" }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-4 text-start">
            <p 
              className="p-2 text-uppercase" 
              style={{
                backgroundColor:"#434B4D",
                fontSize: "clamp(18px, 3vw, 20px)"
              }}
            >
              WELCOME TO CODESHAPER
            </p>

            <h1 
              style={{ 
                fontSize: "clamp(28px, 5vw, 50px)", 
                fontWeight: "bold" 
              }}
            >
              CONSULTING FOR EVERY BUSINESS
            </h1>

            <Button text="DISCOVER MORE" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banna;

