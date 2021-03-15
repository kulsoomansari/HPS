const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
async function dbConnect() {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
console.log("connection succcesfull")
    }catch(e){
        console.log(e)
    }
}
module.exports = dbConnect
