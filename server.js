import express from "express";
import connectDB from "./config/connectDB";
import bodyParser from "body-parser";
import items from "./routes/api/items";
const app = express();
//connect Database
connectDB();

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//use routes
app.use("/api/items", items);


const port = process.env.APP_PORT || 3000;
const host = process.env.APP_HOST || "localhost";

app.listen(port , console.log(`Server is running on ${host}:${port}`));
