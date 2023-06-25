import mongoose from "mongoose";

const connect = () => {
  const dbUrl =
    "mongodb+srv://admin:8N09Pc7HMGC5D5HQ@cluster0.f58hedf.mongodb.net/ASU";

  return mongoose.connect(dbUrl);
};

export default connect;
