
import {index, api_list_item} from './Controller.js'

function route(app){
    
    // app.get('/', (req, res)=>{
    //     index(req, res)
    // })

    app.get('/api_shop', (req, res)=>{
        api_list_item(req, res)
    })
}

export default route;