const express = require('express')
const bodyParser = require('body-parser');

const app = express()

const PORT = process.env.PORT || 3000

const db = require('./config/database')

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Body Parser
app.use(express.urlencoded({ extended: false }));

const userAPI = require('./router/user.route')
const taskAPI = require('./router/task.route')

app.use('/user', userAPI)
app.use('/task', taskAPI)


app.listen(PORT, () => {
    console.log(`Listen server is port ${PORT}`)
})

