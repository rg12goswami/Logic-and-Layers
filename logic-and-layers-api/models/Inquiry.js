import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    company: { type: String, trim: true, default: "" },
    projectType: { type: String, required: true },
    budget: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true } // adds createdAt / updatedAt automatically
);

export const Inquiry = mongoose.model("Inquiry", inquirySchema);
