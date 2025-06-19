import React from "react";
import App from"./App.jsx";
import Layout from "./Layout.jsx";
import Classes from "./Classes.jsx";
import Dashbord from "./Dashbord.jsx"
import {Routes,Route} from "react-router-dom";
//
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