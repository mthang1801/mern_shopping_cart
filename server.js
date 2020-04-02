import express from "express";
import connectDB from "./config/connectDB";
import bodyParser from "body-parser";
import items from "./routes/api/items";
import users from "./routes/api/users";
import auth from "./routes/api/auth";
import path from "path";

const app = express();
//connect Database
connectDB();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//use routes
app.use("/api/items", items);
app.use("/api/users", users);
app.use("/api/auth", auth);

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port , console.log(`Server is running on port ${port}`));
