
import mongoose from 'mongoose'

export const Schema = new mongoose.Schema({
    id: String,
    img: String,
    name: String,
    description: String,
    price: String
  }, {
      timestamps: true
  });
