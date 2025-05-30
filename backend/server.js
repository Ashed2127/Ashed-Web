
import express from "express";

import bodyParser from "body-parser";

import cors from "cors";

import router from "./routes.js"; 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(router);

app.get('/', function(req, res){
    res.json({ message: 'welcome to he system api' });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

