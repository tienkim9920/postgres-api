const express = require('express')
const Task = require('../schema/Task.js')
const User = require('../schema/User.js')

const router = express.Router()

router.get('/', async (req, res) => {

    const tasks = await Task.findAll({
        include: User
    })

    res.json(tasks)

})

router.post('/', async (req, res) => {

    const task = await Task.create(req.body)

    res.json(task)

})

module.exports = router