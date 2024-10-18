const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://jojok:jojok123@cluster0.wvzmb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );

        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB connection error: ", error);
        process.exit(1);
    }
};

module.exports = connectDB