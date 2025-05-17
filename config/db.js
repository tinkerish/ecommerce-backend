const mongoose = require('mongoose');
// mongodb+srv://sneha75860:GZofTauKLKi7OvMh@cluster0.tk3g8h3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
