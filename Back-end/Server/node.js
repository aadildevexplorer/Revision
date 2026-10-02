const express = require('express')

const server = http.createServer((req , res) => {

    res.write('Hello server')
    res.end()
})

server.listen(3000, () => {
    console.log('Hello server')
})