const express = require('express')
const { Op } = require('sequelize')
const Task = require('../schema/Task.js')
const User = require('../schema/User.js')

const router = express.Router()

// Lấy tất cả
router.get('/', async (req, res) => {

    const users = await User.findAll({
        include: [
            {
                model: Task,
                include: Task
            }
        ]
    })

    res.json(users)

})

// Lấy phụ thuộc vào điều điện
router.get('/condition', async (req, res) => {
    
    // Note: gt: >, lt: < 

    const users = await User.findAll({
        where: {
            id: {
                [Op.gt]: 1
            }
        }
    })

    res.json(users)
})

// Lấy chi tiết
router.get('/:id', async (req, res) => {

    const id = req.params.id

    const user = await User.findOne({
        where: {
            id
        }
    })

    res.json(user)

})

// delete data
router.delete('/:id', async (req, res) => {

    const id = req.params.id

    const user = await User.destroy({
        where: {
            id
        }
    })

    res.json("Success")

})

// create data
router.post('/', async (req, res) => {

    const user = await User.create(req.body)

    res.json(user)

})


module.exports = router