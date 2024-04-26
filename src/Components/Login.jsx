// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";

// function Login() {    

//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()
//     const navigate = useNavigate()

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         axios.post("http://localhost:3001/login", { email, password })
//         .then(result => {
//             console.log(result)
//             if(result.data === "Success"){
//                 navigate("/Home")
//             }else{
//                 navigate("/register")
//                 alert("You are not registered to this service")

//             }
       
//         })
//         .catch(err => console.log(err))
//     }


//   return (
//     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100" style={{ width: "950px" }}>
//         <div className="bg-white p-3 rounded w-25">
//             <h2><center>Login</center></h2>
//             <form onSubmit={handleSubmit}>
                
//                 <div className="mb-3">
//                     <label htmlFor="email">
//                         <strong>Email</strong>
//                     </label>
//                     <input type="text" 
//                     placeholder='Enter Email' 
//                     autoComplete='off' 
//                     name='email' 
//                     className='form-control rounded-0' 
//                     onChange={(e) => setEmail(e.target.value)}

//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="email">
//                         <strong>Password</strong>
//                     </label>
//                     <input type="password" 
//                     placeholder='Enter Password' 
//                     name='password' 
//                     className='form-control rounded-0' 
//                     onChange={(e) => setPassword(e.target.value)}

//                     />
//                 </div>
//                 <Link to="/home" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//                     Home
//                 </Link>
//                 <button type="submit" className="btn btn-success w-100 rounded-0">
//                     Login
//                 </button>
//                 </form>
//                 <p>Don't have an account?</p>
                
            
//         </div>
//     </div>
//   );
// }

// export default Login;







// import  { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';

// function Login() {    
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post("http://localhost:3001/login", { email, password })
//             .then(result => {
//                 console.log(result);
//                 if(result.data === "Success") {
//                     navigate("/Home");
//                 } else {
//                     navigate("/register");
//                     alert("You are not registered to this service");
//                 }
//             })
//             .catch(err => console.log(err));
//     }

//     return (
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"  }}>
//             <div style={{ width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#fff" }}>
//                 <h2 style={{ textAlign: "center" }}>Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div style={{ marginBottom: "20px" }}>
//                         <label htmlFor="email">Email</label>
//                         <input 
//                             type="text" 
//                             placeholder="Enter Email" 
//                             autoComplete="off" 
//                             name="email" 
//                             style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "3px" }}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div style={{ marginBottom: "20px" }}>
//                         <label htmlFor="password">Password</label>
//                         <input 
//                             type="password" 
//                             placeholder="Enter Password" 
//                             name="password" 
//                             style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "3px" }}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <button type="submit" style={{ width: "100%", padding: "10px", border: "none", borderRadius: "3px", backgroundColor: "#28a745", color: "#fff", cursor: "pointer" }}><Link to="/Home">Login</Link></button>
//                 </form>
//                 <p style={{ textAlign: "center", marginTop: "10px" }}>Dont have an account? <Link to="/register">Register</Link></p>
//             </div>
//         </div>
//     );
// }

// export default Login;




import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                console.log(result);
                if(result.data === "Success") {
                    navigate("/Home");
                } else {
                    navigate("/register");
                    alert("You are not registered to this service");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "1344px" }}>
            <div style={{ width: "300px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#fff", marginLeft: "170px"}}>
                <h2 style={{ textAlign: "center", color: "black" }}>Login</h2>
                <form>
                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            placeholder="Enter Email" 
                            autoComplete="off" 
                            name="email" 
                            style={{ width: "275px", padding: "10px", border: "1px solid #ccc", borderRadius: "3px" }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password" 
                            style={{ width: "275px", padding: "10px", border: "1px solid #ccc", borderRadius: "3px" }}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" style={{ width: "297px", padding: "10px", border: "none", borderRadius: "3px", backgroundColor: "#28a745", color: "#fff", cursor: "pointer" }}><Link to="/Home" style={{textDecorationColor:"white"}}>Login</Link></button>
                </form>
                <p style={{ textAlign: "center", marginTop: "10px", color: "black" }}>Dont have an account? <Link to="/Signup">Register</Link></p>
            </div>
        </div>
    );
}

export default Login;
