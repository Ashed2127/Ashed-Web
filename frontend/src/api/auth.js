 import axios from 'axios';
 
 // Set the base URL for your backend
 const API_URL = 'http://localhost:8081/api'; // Notice the /api prefix which is common for API 
 // Create an axios instance with default configuration
 const api = axios.create({
   baseURL: API_URL,
   headers: {
     'Content-Type': 'application/json',
   },
 });
 
 const register = (phone, password) => {
   return api.post('/register', { // Now using relative path since baseURL is set
     phone,
     password
   });
 };
 
 const login = (phone, password) => {
   return api.get('/login', {
     phone,
     password
   })
   .then(response => {
     if (response.data.token) {
       localStorage.setItem('user', JSON.stringify(response.data));
     }
     return response.data;
   });
 };
 
 const logout = () => {
   localStorage.removeItem('user');
 };
 
 const getCurrentUser = () => {
   return JSON.parse(localStorage.getItem('user'));
 };
 
 export default {
   register,
   login,
   logout,
   getCurrentUser
 };
  
  
