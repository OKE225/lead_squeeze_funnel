import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.emails ?? mongoose.model("emails", emailSchema);
