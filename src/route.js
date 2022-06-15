
import {index, api_list_item, login, register} from './Controller.js'


function route(app){
    
    app.get('https://git.heroku.com/server-react-s.git/', (req, res)=>{
        index(req, res)
    })

    app.get('https://git.heroku.com/server-react-s.git/api/shop/All', (req, res)=>{
        api_list_item(req, res)
    })

    app.post('https://git.heroku.com/server-react-s.git/login', (req, res)=>{
        login(req, res)
    })

    app.post('https://git.heroku.com/server-react-s.git/register', (req, res)=>{
        register(req, res)
    })
}

export default route;