// const express = require('express');
// const WelfareModel = require('../../models/Welfare.js');
// const router = express.Router();

// router.get('/', async (req, res) => {
//     // get posts from posts
//     const welfare = await WelfareModel.find();
//     res.json({
//         success: true,
//         status: 200, //ok
//         data: welfare
//     })

// })
// router.post('/add', async (req, res) => {
//     console.log("....", req.body)
//     try {
//         const welfare = await WelfareModel.create(req.body)
//         res.json({
//             success: true,
//             status: 201,
//             dbid: welfare._id
//         })

//     } catch (error) {
//         res.json({
//             success: false,
//             status: 400,
//             error
            
//         })

//     }
// })
