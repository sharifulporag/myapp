import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose
    .connect(
      "mongodb+srv://mmdporag06:mmdporag06@cluster0.q3abde1.mongodb.net/"
    )
    .then(() => console.log("database connection successfully!"))
    .catch((e) => console.log(e));
};


export default connectToDB;