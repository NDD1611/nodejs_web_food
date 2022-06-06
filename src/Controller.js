import mongoose from 'mongoose'
import {listItemSchema, accountSchema} from './database/schema.js'

// GET  /
export function index (req, res){
        res.json("ok index")
}

// GET /api_shop
export function api_list_item(req, res){
    const getLists = mongoose.model('list_items', listItemSchema);
    getLists.find({}, (err, doc)=>{
        if(err){
            console.log(err)
            return;
        }
        res.json(doc)
    })
}

export function register(req, res){
    const accountModel = mongoose.model('accounts', accountSchema);
    var user = req.body.username
    var pass =req.body.password
    var confirm = req.body.confirm
    accountModel.findOne({
        username: user
    })
    .then(data=>{
        if(data){
            res.status(500).json("Tai khoan da ton tai")
        } else {
            return accountModel.create({
                username: user,
                password: pass
            })
        }
    })
    .then(data=>{
        res.status(200).json("Tao tai khoan thanh cong")
    })
    .catch(err=>{
        console.log(err, "bi loi")
    })
}

export function login(req, res){
    const accountModel = mongoose.model('accounts', accountSchema);
    var user = req.body.username
    var pass =req.body.password
    accountModel.findOne({
        username: user,
        password: pass
    })
    .then(data=>{
        if(data){
            res.status(200).json("Dang nhap thanh cong")
        } else {
            res.status(500).json("Tai khoan hoac mat khuat khong chinh xac")
        }
    })
    .catch(err=>{
        console.log(err, 'ERR...')
    })

}