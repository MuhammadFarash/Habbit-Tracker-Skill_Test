import mongoose from "mongoose";

export const habbitSchema = new mongoose.Schema({
    name: { type: String, required: true },
  status: { type: String, enum: ['Done', 'Not done', 'None'], default: 'None' },
  date: { type: Date, default: Date.now },
})