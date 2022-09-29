import mongoose from "mongoose"
// const MONGO_URI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nextjscluster.brka1hs.mongodb.net/?retryWrites=true&w=majority`

const connectMongo = async () => {
  // console.log(`${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}`)
  const MONGO_URI = process.env.MONGO_URI ?? ""

  return mongoose.connect(MONGO_URI)
}

export default connectMongo
