const express = require('express')
const app = express()

app.length('*', (req, res) => {
    console.log('hola mundo, mi primera aplicación serverless');
    res.send({mensaje: 'chanchito feliz'})
})

module.exports = app