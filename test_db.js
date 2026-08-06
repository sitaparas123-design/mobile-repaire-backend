import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("Testing connection to:", process.env.MONGODB_URL);

async function test() {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("SUCCESS: Connected to MongoDB!");
        process.exit(0);
    } catch (err) {
        console.error("FAILURE: Could not connect to MongoDB:", err.message);
        process.exit(1);
    }
}

test();
