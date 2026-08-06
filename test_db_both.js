import mongoose from "mongoose";

const url1 = "mongodb+srv://alpha:0L8ZXD0EpmWZBHwM@cluster0.nlpinl4.mongodb.net/Alpha";
const url2 = "mongodb+srv://ankit:Ankit%401205patidar@cluster0.xoxzbbv.mongodb.net/alfa";

async function testUrl(name, url) {
    console.log(`Testing ${name}: ${url}`);
    try {
        await mongoose.connect(url, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log(`✅ ${name} SUCCESS: Connected!`);
        await mongoose.disconnect();
    } catch (err) {
        console.error(`❌ ${name} FAILURE:`, err.message);
    }
}

async function run() {
    await testUrl("URL 1 (Upper)", url1);
    await testUrl("URL 2 (Lower)", url2);
    process.exit(0);
}

run();
