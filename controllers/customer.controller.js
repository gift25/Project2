const Customer = require('../models/customer.js')

exports.index = (req, res) => {
    res.send('res.sendFile("Project2-main/index.html", {root: __dirname});')

}

exports.findAll = (req, res) => {
    Customer.find().then(data => {
        res.json(data)

    }).catch(err => {
        res.status(500).send({
            msg: err.message
        })
        
    })
}