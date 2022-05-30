import mongoose from 'mongoose'
import {Schema} from './database/schema.js'

// GET  /
export function index (req, res){
        res.json("ok index")
}

// GET /api_shop
export function api_list_item(req, res){
    const getLists = mongoose.model('list_items', Schema);
    getLists.find({}, (err, doc)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log(doc)
        res.json(doc)
    })
}