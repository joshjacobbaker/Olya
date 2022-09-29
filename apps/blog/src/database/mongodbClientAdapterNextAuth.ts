// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb"

// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// }

const MONGO_URI = process.env.MONGO_URI ?? ""
let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!process.env.MONGO_URI) {
  throw new Error("Please add your Mongo URI to .env.local")
}

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).

  let globalWithMongoClientPromise = global as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>
  }

  if (!globalWithMongoClientPromise._mongoClientPromise) {
    client = new MongoClient(MONGO_URI)
    globalWithMongoClientPromise._mongoClientPromise = client.connect()
  }
  clientPromise = globalWithMongoClientPromise._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(MONGO_URI)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise
