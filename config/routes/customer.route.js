module.exports = (app) => {
    const customer = require("../controllers/customer.controller.js")

    app.get('/', customer.index)
    app.get('/api/customer', customer.findAll);
}