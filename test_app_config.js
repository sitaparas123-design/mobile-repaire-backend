import { dbConnect } from "./Config/dbConnect.js";
import dotenv from "dotenv";

dotenv.config();

console.log("Using MONGODB_URL:", process.env.MONGODB_URL);

async function test() {
    await dbConnect();
    console.log("Test finished.");
    process.exit(0);
}

test();
