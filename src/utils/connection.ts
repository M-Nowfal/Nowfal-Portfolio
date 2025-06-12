import { connect } from "mongoose";

let isConnected = false;

const connectDB = async () => {
  try {
    if (isConnected) {
      return;
    } else {
      await connect(process.env.DB_URI || "");
      isConnected = true;
      console.log("Data Base connected successfully!");
    }
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : String(err);
    console.log(error);
  }
};

export default connectDB;