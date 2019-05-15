'use strict'

const http = require('http')
const fs = require('fs')


function app () {
  const server = http.createServer((req, res) => {
    console.log('Processing request: ')
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    const myStream = fs.createReadStream(`${__dirname}/lorem-ipsum.txt`, 'utf8')
    myStream.pipe(res)
  })


  server.listen(3000, '127.0.0.1')
  console.log('listening on port 3000...')
}


app()
