import React,{useState,useEffect} from "react";
import axios from "axios";
import "./Class.css";
function Classes()
{
   const user =JSON.parse(localStorage.getItem("staff"));

    const [staffData,setStaffData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/staff")
    .then((res)=>{
        setStaffData(res.data);
    })
   .catch((err)=>{
   console.error("error in" ,err);
    });
    },[]);
    
    return(
        <div className="out">

<h2>👩‍🏫 welcome{user.name}</h2>
  <table border="1" cellPadding="10">
    <thead>
      <tr className="tr">
        <th>Name</th>
        <th>Course</th>
      </tr>
    </thead>
    <tbody>
      <tr>
         <td>{user.name}</td>
        <td>{user.course}</td>
       
        
      </tr>
      

    </tbody>
  </table>

        </div>

    );
}
export default Classes;