const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema({
    // MRNo: {
    //     type: Number,
    //     required: true
    // },
    TokenNo: {
        type: Number,
        required: true
    },
    RegistrationDate: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    FatherOrHusband: {
        type: String,
        required: true
    },
    DOB: {
        type: Number,
        required: true
    },
    Age: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    Religion: {
        type: String,
        required: true
    },
    District: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Area: {
        type: String,
        required: true
    },
    HousNo: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    CNIC: {
        type: Number,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    OffPhone: Number,
    Mobile: {
        type: Number,
        required: true
    },
    RefBy: {
        type: String,
        required: true
    },
    Remarks: {
        type: String,
        required: true
    },
    IsRejected: {
        type: Boolean,
        required: true
    },
    IsZakat:  {
        type: Boolean,
        required: true
    },
    IsPAFEmp:  {
        type: Boolean,
        required: true
    },
    MonthlyConsLimit: {
        type: Number,
        required: true
    },
    // ThumbImage: "",
    NOY: {
        type: String,
        required: true
    },
    EmpID: {
        type: Number,
        required: true
    },
    IsStaff:  {
        type: Boolean,
        required: true
    },
    CreateUser: {
        type: String,
        required: true
    },
    ModifyUser: {
        type: String,
        required: true
    },
    CreateDate: {
        type: Date,
        default: new Date
    },
    ModifyDate: {
        type: Date,
        default: new Date
    },
})
const Reg =  mongoose.model("Reg", registerSchema)
module.exports = Reg