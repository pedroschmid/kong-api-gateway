const express = require('express')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

const users = [
    { name: 'Peter', age: 20 },
    { name: 'Maria', age: 31 },
    { name: 'Anna', age: 44 }
]

app.get('/', (request, response) => response.json({ message: 'Welcome from /users' }))

app.get('/list', (request, response) => response.json(users));

app.listen(PORT, HOST)