const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema(
    {
       
        FullName: String,
        password: String
    },
    {
        collection: "customer"
    }
)


module.exports = mongoose.model('Customer', CustomerSchema)








