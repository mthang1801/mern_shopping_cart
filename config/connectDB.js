import mongoose from "mongoose";

const dbConnect = process.env.DB_CONNECT;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;



let connectDB = () => {
  const dbURI = `${dbConnect}://${dbHost}:${dbPort}/${dbName}`;
  mongoose.connect(dbURI, { useUnifiedTopology: true , useNewUrlParser: true })
    .then( () => console.log("MongoDB has connected"))
    .catch( () => console.log("MongoDB connected fail"));
}

export default connectDB;
