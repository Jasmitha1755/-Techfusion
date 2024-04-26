// import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import Signup from 'C:/Users/sures/OneDrive/Desktop/cce/frontend/Components/Signup.jsx'
// import Login from 'C:/Users/sures/OneDrive/Desktop/cce/frontend/Components/Login.jsx'
// import Home from 'C:/Users/sures/OneDrive/Desktop/cce/frontend/Components/Home.jsx'
// import CreatePost from 'C:/Users/sures/OneDrive/Desktop/cce/frontend/Components/CreatePost'


// function App() {

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Login/>}/>
//         <Route path='/signup' element={<Signup/>}/>
//         <Route path='/home' element={<Home />}/>
//         <Route path='/createpost' element={<CreatePost />}/>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import First from './Components/First';
import CreatePost from 'c:/Users/sures/OneDrive/Desktop/cce/frontend/src/Components/Createpost';
import Profile from './Components/Profile';
//import Navigation from "./Navigation";

function App() {
  return (
    <BrowserRouter>
    {/* <Navigation/> */}
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;