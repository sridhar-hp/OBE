//import React from "react";
//import {BrowserRouter,Routes,Route} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import React ,{ useState } from "react";
import "./App.css";
// import Layout from "./component/Layout.jsx";
//import Layout from "./component/layout.jsx";
import axios from "axios";

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
    const [message, setMessage] = useState("LOGIN");
    const navigate = useNavigate();


   const handleLogin = async () => {
     try {
   
   const res = await axios.post("http://localhost:5000/login", {
  name: name,
  password: password,
});
    if(res.data.success)
    {
      localStorage.setItem("staff",JSON.stringify(res.data.user));
      
        navigate("/Layout/Dashbord");
    }
    else{
      setMessage("Login Failed!");
    }
  } catch (err) {
    alert("Something went wrong!");
    setMessage("Server error");
  }
};

  return (
    <div className="login-container">
      <div className="login-form">
          <h3>{message}</h3> {/* ✅ Show message */}
        <input
         type="text"
        placeholder="name"
        value={name} 
        onChange={e=>setName(e.target.value)}
        />

        <input 
        type="password" 
        placeholder="password"
        value={password}
        onChange={e=> setPassword(e.target.value)}
/>
       
<button onClick={handleLogin}>login</button>
      </div>

    </div>
  );
}
export default App