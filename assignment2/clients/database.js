const { MongoClient } = require("mongodb");
require("dotenv").config();

const mongoClient = new MongoClient(process.env.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = {
  connectToDB: async function connectToDB() {
    try {
      await mongoClient.connect();
      console.log("Connected to MongoDB");
    } catch (err) {
      console.log(err);
    }
  },

  saveClientToDB: async function saveClientToDB(record) {
    try {
      const result = await mongoClient
        .db("assignment2")
        .collection("clients")
        .insertOne(record);
    } catch (err) {
      console.log(err);
    }
  },

  readAllClients: async function readAllClients() {
    try {
      const cursor = await mongoClient
      .db("assignment2")
      .collection("clients")
      .find()
      .sort([['family_name', 'descending']]);
      //return a cursor object, which contains all the result 
      const data = await cursor.toArray();
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  readOneDocument: async function readOneDocument(query) {
    try {
      const data = await mongoClient.db("assignment2").collection("clients").findOne(query);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};