
import controller from '../controller/Controller.js'


function route(app) {

    app.get('/api/shop/All', controller.fetchAllItems)

    app.post('/login', controller.login)

    app.post('/register', controller.register)
}

export default route;