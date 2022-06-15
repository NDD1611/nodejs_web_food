
import {index, api_list_item, login, register} from './Controller.js'


function route(app){
    
    app.get('/', (req, res)=>{
        index(req, res)
    })

    app.get('/api/shop/All', (req, res)=>{
        api_list_item(req, res)
    })

    app.post('/login', (req, res)=>{
        login(req, res)
    })

    app.post('/register', (req, res)=>{
        register(req, res)
    })
}

export default route;