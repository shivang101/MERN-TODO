//CRUD create read update delete

const mongodb = require("mongodb");

// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";

const id = new ObjectId();
console.log(id.toHexString());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log(`Unable to connect to database`); 
      return console.log(error);
    }
    console.log(`Connected Correctly`);
  }
);
