 import mysql from "mysql2";
 
 // create the connection to database
 
 const pool = mysql.createConnection({
     host: "localhost",
     user: "root",
     password: "",
     database: "ashedweb"
 });
 
 
 pool.connect(error => {
   if (error) throw error;
   console.log("Successfully connected to the database.");
 });
 
 export default pool;  
