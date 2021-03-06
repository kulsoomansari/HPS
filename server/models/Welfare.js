const mongoose = require('mongoose');
const WelfareSchema = mongoose.Schema({
    MRNo: {
        type: String,
        required: [true, "MRNo is missing"]
    },
    TokenNo: {
        type: String,
        required: [true, "TokenNo is missing"]
    },
    WelfareDate: {
        type: Date,
        default: new Date()
    },
    Profession: {
        type: String,
        // required: [true, "Profession is missing"]
    },
    Fiqa: {
        type: String,
        // required: [true, "Fiqa is missing"]
    },
    Education: {
        type: String,
        // required: [true, "Education is missing"]
    },
    Cast: {
        type: String,
        // required: [true, "Cast is missing"]
    },
    Guardian: {
        type: String,
        // required: [true, "Guardian is missing"]
    },
    NoOfKids: Number,
    MonthlyIncome: Number,
    NoOFFamilyMembers: {
        type: Number,
        // required: [true, "NoOFFamilyMembers is missing"]
    },
    IsMarried: {
        type: Boolean,
        required: [true, "IsMarried is missing"]
    },
    IsAbleToPay: {
        type: Boolean,
        // required: [true, "IsAbleToPay is missing"]
    },
    IsEarning: {
        type: Boolean,
        // required: [true, "IsEarning is missing"]
    },
    HaveGold: {
        type: Boolean,
    },
    ReqName: {
        type: String,
    },
    ReqPhone: {
        type: Number,
    },
    ReqRelationWithPatient: {
        type: String,
    },

})

const WelfareModel = mongoose.model('WelfareModel', WelfareSchema)
module.exports = WelfareModel