
import { getLists, accountModel } from "../model/model.js"
// GET /api_shop
const fetchAllItems = (req, res) => {
    getLists.find({}, (err, doc) => {
        if (err) {
            console.log(err)
            return;
        }
        res.json(doc)
    })
}

const register = (req, res) => {
    var user = req.body.username
    var pass = req.body.password
    var confirm = req.body.confirm
    accountModel.findOne({
        username: user
    })
        .then(data => {
            if (data) {
                res.status(500).json("Tai khoan da ton tai")
            } else {
                return accountModel.create({
                    username: user,
                    password: pass
                })
            }
        })
        .then(data => {
            res.status(200).json("Tao tai khoan thanh cong")
        })
        .catch(err => {
            console.log(err, "bi loi")
        })
}

const login = (req, res) => {
    var user = req.body.username
    var pass = req.body.password
    accountModel.findOne({
        username: user,
        password: pass
    })
        .then(data => {
            if (data) {
                res.status(200).json("Dang nhap thanh cong")
            } else {
                res.status(500).json("Tai khoan hoac mat khuat khong chinh xac")
            }
        })
        .catch(err => {
            console.log(err, 'ERR...')
        })

}

export default {
    login: login,
    fetchAllItems: fetchAllItems,
    register: register
}