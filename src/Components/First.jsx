import React from 'react';
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 style={{ textAlign: "center" }}>WELCOME TO HACKHALT</h1>
        <button className="get-started-button" style={{backgroundColor:"#ffa07a"}}>
          <Link to="/Signup">GET STARTED</Link>
        </button>
      </div>
    </div>
  );
}

export default First;

/* CSS styles */
<style>
.container {
  `display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 500px;`
}

.content {
  `text-align: center;`
}

.get-started-button {
  `padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background-color: lightsalmon;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;`
}

.get-started-button:hover {
  `background-color: #ffa07a;`
}
</style>
