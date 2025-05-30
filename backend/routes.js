import express, {Router} from "express"

import {
	//allUsers, 
	createAccount, 
	//getUserId  
	} from "./controllers/userController.js";    

const router = express.Router();

router.post('/api/createaccount/', createAccount); 
 

export default router; 
 
 
 
