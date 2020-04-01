import express from "express";
import connectDB from "./config/connectDB";
import bodyParser from "body-parser";
import items from "./routes/api/items";
import path from "path";
const app = express();
//connect Database
connectDB();

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//use routes
app.use("/api/items", items);

//Serve static assets if in production
if(process.env.NODE_ENV === "production"){
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  })
}

const port = process.env.APP_PORT || 3000;
const host = process.env.APP_HOST || "localhost";

app.listen(port , console.log(`Server is running on ${host}:${port}`));
