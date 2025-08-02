import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

const dbConnect = async (collectionName) => {
  const client = new MongoClient(uri, options);
  await client.connect();
  const db = client.db("vendor-match");
  const collection = db.collection(collectionName);
  return collection;
};

export default dbConnect;
