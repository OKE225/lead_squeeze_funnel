import mongoose from "mongoose";
import "dotenv/config";

const dbConnect = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) throw new Error("Brak MONGODB_URI w pliku .env");

  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.error(`Błąd połączenie z bazą danych: ${error}`);
  }
};

export default dbConnect;
