
import mongoose from 'mongoose'

const listItemSchema = new mongoose.Schema({
    id: String,
    img: String,
    name: String,
    description: String,
    price: String
  }, {
      timestamps: true,
      collection: "list_products"
  });
export const getLists = mongoose.model('list_products', listItemSchema);

const accountSchema = mongoose.Schema({
    username: String,
    password: String
},{
    timestamps: true,
    collection: "accounts"
})
export const accountModel = mongoose.model('accounts', accountSchema);