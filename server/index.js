import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 5000;

// Connect to MongoDB database
MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .catch(err => {
    console.error("Error: Could not connect to MongoDB server.");
    console.error(err.stack);
    process.exit(1);
  })
  .then(async client => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  });
