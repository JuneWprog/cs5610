const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = {
  connectToDB: async function connectToDB() {
    try {
      await client.connect();
      console.log("connected to database");
      this.saveToDB({task:'this is Task 1', date:'Monday, June 6th'})
    } catch (err) {
      console.log(err);
    }
  },

  saveToDB: async function saveToDB(task) {
    try {
      const result = await client
        .db("cs5610")
        .collection("tasks")
        .insertOne(task);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  },

  readAll: async function readAll() {
    try {
      const cursor = await client.db("cs5610").collection("tasks").find();
      //return a cursor object, which contains all the result 
      const data = await cursor.toArray();
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  readOneDocument: async function readOneDocument(query) {
    try {
        console.log('readOneDoc ', query)
      const data = await client.db("cs5610").collection("tasks").findOne(query);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
};