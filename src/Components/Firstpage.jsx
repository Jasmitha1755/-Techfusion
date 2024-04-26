// import React from 'react';
// import { Link, useNavigate } from "react-router-dom";


// const Firstpage = () => {
//   return (
//     <div className="container">
//       <div className="logo-container">
        
//         <img src="/pixelcut-export.png" alt="Logo" className="logo" style={{width:"430px", height:"430px", borderRadius:"50%"}}/>
//       </div>
//       <button className="get-started-button" style={{backgroundColor:"#ffa07a"}}><Link to="/Signup">GET STARTED</Link></button>
//     </div>
    
//   );
// }

// export default Firstpage;

// /* CSS styles */
// <style>
    
// .container {`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh; /* Adjust as needed */
//   background-color: #f0f0f0; /* Pleasant background color */
// `}

// .logo-container {`
//   margin-bottom: 20px; /* Space between logo and button */
// `}

// .logo {`
//   width: 200px; /* Adjust as needed */
//   height: auto; /* Maintain aspect ratio */
// `}

// .get-started-button {`
//   padding: 10px 20px;
//   font-size: 18px;
//   /* Button background color */
//   color: #fff; /* Button text color */
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
// `}

// .get-started-button:hover {`
//   background-color: #0056b3; /* Button background color on hover */
// `}
// </style>







import React from 'react';
import { Link } from "react-router-dom";

const Firstpage = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="logo-container" style={{}}>
          <img src="/pixelcut-export.png" alt="Logo" className="logo" style={{width:"430px", height:"430px", borderRadius:"50%"}}/>
        </div>
        <button className="get-started-button" style={{backgroundColor:"#ffa07a"}}>
          <Link to="/Signup">GET STARTED</Link>
        </button>
      </div>
    </div>
  );
}

export default Firstpage;

/* CSS styles */
<style>
    
.container {`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;`
}

.content {`
  text-align: center;
 `
}

.logo-container {`
  margin-bottom: 20px;`
}

.logo {`
  width: 200px;
  height: auto;`
}

.get-started-button {`
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;`
}

.get-started-button:hover {`
  background-color: #0056b3;`
}
</style>





