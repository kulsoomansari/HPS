const express = require('express');
const Reg = require('../../models/Register.js');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const register = await Reg.find()
        res.json({
            status: 200, success: true,
            data: register
        })
    } catch {
        res.json({
            status: 400, success: false
        })
    }
})
router.post("/add", async (req, res) => {
    console.log(req.body)
    try {
        const register = await Reg.create(req.body)
        res.json({
            status: 200,
            success: true,
            dbid: register._id,
            msg: "record created"
        })
    } catch (error) {
        res.json({
            status: 400,
            success: false,
            error
        })
    }
})
router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const del = await Reg.findByIdAndDelete(id)        
        res.json({
            status: 200,
            success: true,
            dbid: del._id,
            msg: "record deleted"
        })
    } catch (error) {
        res.json({
            status: 400,
            success: false,
            error
        })
    }
})

module.exports = router