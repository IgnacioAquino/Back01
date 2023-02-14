const usersController = require('../users/controller.users.js')
const usersProducts = require('../products/controller.products.js')

const router = (app) => {
    app.use('/users', usersController),
    app.use('/products', usersProducts)
}


module.exports = router