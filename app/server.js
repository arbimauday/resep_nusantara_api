import http from 'http'
import express from 'express'
const port = process.env.PORT || 8800
const app = express()

app.use(() => {
    console.log('hello')
})

app.listen(port)