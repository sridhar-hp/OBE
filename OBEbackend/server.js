const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app=express();
app.use(cors());
app.use(express.json());

// ✅ 1. MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',      // your MySQL password if any
  database: 'dummy'
});
app.post('/login',(req,res)=>{
    const {name,password}=req.body;//req.body receives the name and password from frontend.


    const sql = "SELECT * FROM staff WHERE name = ? AND password = ?";//This line creates a command (called a SQL query) to get information from a database.It looks in a table called staff.It only finds rows where the name and password match what you give it.The ? symbols are placeholders. The real name and password will be filled in later, safely.
  db.query(sql, [name, password], (err, result) => {//db.query sends this to the database to look for a matching staff member.

    if (err) {
      res.status(500).send("Error in database");
    } else if (result.length > 0) {
      res.send({ success: true, message: "Login success", user: result[0] });
            
    } else {
      res.send({ success: false, message: "Invalid credentials" });
    }
  });
});

// this is classes detiles
app.get("/staff",(req,res)=>{
db.query("SELECT * FROM staff",(err, result)=>{
 if(err) return res.status(500).send({error:"database error"});
 res.send(result);
});
});
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
