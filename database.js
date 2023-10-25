import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const db = "abeliano";
const colP = "products";
const colU = "users";
let client = new MongoClient(uri);

try {
  await client.connect();
  console.log("Connected to database");
} catch (error) {
  console.log(error);
}

async function catalogo() {
  try {
    const database = client.db(db);
    const collection = database.collection(colP);

    const cursor = await collection.find();
    const products = [];

    for await (const doc of cursor) {
      products.push(doc);
    }

    return products;
  } catch (error) {
    console.log(error);
  }
}

async function findProduct(id) {
    try {
      const database = client.db(db);
      const collection = database.collection(colP);
  
      const query = { _id: id };
  
      const prod = await collection.findOne(query);
      return prod;
    } catch (error) {
      console.log(error);
    }
}

async function login(user, pw) {
    try {
      const database = client.db(db);
      const collection = database.collection(colU);
  
      const query = { username: user, password: pw };
  
      const result = await collection.findOne(query);
      if (result) {
        return result;
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
}

async function update(updatedDoc) {
    try {
      const database = client.db(db);
      const collection = database.collection(colP);
  
      const filter = { _id: updatedDoc._id };
      const updateDoc = {
        $set: updatedDoc,
      };
  
      const result = await collection.updateOne(filter, updateDoc);
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`
      );
    } catch (error) {
      console.log(error);
    }
}

export {client, catalogo, findProduct, login, update};