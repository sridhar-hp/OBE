import React from "react";
//import {useState,useEffect} from "react";
import App from"./App.jsx";
import Layout from "./Layout.jsx";
import Classes from "./Classes.jsx";
import Dashbord from "./Dashbord.jsx"
import {Routes,Route} from "react-router-dom";
//

//   const [staffData,setStaffData]=useState([]);
//   const user =JSON.parse(localStorage.getItem("staff"));
//     useEffect(()=>{
//         axios.get("http://localhost:5000/staff")
//     .then((res)=>{
//         setStaffData(res.data);
//     })
//    .catch((err)=>{
//    console.error("error in" ,err);
//     });
//     },[]);
function Path() {
return(
   
        <Routes>
           <Route path="/" element={<App/>}/>


          <Route path="/Layout" element={<Layout />}>
           <Route path="Dashbord" element={<Dashbord />} />
           <Route path="Classes" element={<Classes />} />  
                
              </Route>
       </Routes>
   

);
}
export default Path;