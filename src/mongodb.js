const mongoose=require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://gift:gift250945@clusterlogin.hizeb7s.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('mongo connected');
})
.catch(()=>{
    console.log('mongo not connected');
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model('classroomm',LogInSchema)

module.exports= collection