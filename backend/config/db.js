import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://manojkumar850876:mw9pYUVxRjTO0JXO@food-app.zgkxg.mongodb.net/?retryWrites=true&w=majority&appName=Food-app", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
