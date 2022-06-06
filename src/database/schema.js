
import mongoose from 'mongoose'

export const listItemSchema = new mongoose.Schema({
    id: String,
    img: String,
    name: String,
    description: String,
    price: String
  }, {
      timestamps: true,
      colection: "list_items"
  });

export const accountSchema = mongoose.Schema({
    username: String,
    password: String
},{
    timestamps: true,
    colection: "accounts"
})
