/* import { createServer, request } from 'http';
let server = createServer((request, response) => {
  let {method} = req;
  let {pathname} = new URL(req.url, `http://127.0.0.1`)
  res.setHeader('Content-Type', 'text/plain,charset=utf-8')
  console.log(method,pathname)
  if(method === 'GET' && pathname === '/login'){
    res.end('Login Page')
  }else if(method === 'GET' && pathname === '/reg'){
    res.end('Registration Page')
  }else{
    res.end('Not found')
  }
    response.setHeader('Content-Type', 'text/plain,charset=utf-8')
 response.statusCode = 201;
 response.end('response,111aaaccccahhaa');
})
server.listen(9000,()=>{
  console.log('Server is running on port 127.0.0.1:9000','...')
}) */
/* import fs from 'fs'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
let app = express();
function recoredMiddleware(req,res,next){
  let{url,ip} = req;
  fs.appendFileSync(path.resolve(__dirname,'jsondata.json'),`\r\nurl: ${url}, ip: ${ip}\n`)
  next()
}
app.use(recoredMiddleware) */
/* const recoredMiddleware = (req,res,next)=>{
  if(req.query.code === '521'){
    next()
  }else{
    res.end('Invalid code')
  }
} */
import express from 'express';
import bodyParser from 'body-parser';
  let app = express();
  import { dirname } from 'path'
  import { fileURLToPath } from 'url'
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)
// app.use(express.static(__dirname + '/public/index.html'))
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use((req,res,next) => {
  let ref = req.get('referrer')
  if(ref){
    let url = new URL(ref)
    let host = url.hostname
    if(host !== 'localhost:3000'){
      res.status(404).send('<h1>`Not found')
      return
    }
  }
  next()
})
app.get('/login',(req,res)=>{
  res.sendFile(__dirname+'/public/index.html')
  // res.end('发送')
})
app.post('/login',urlencodedParser,(req,res)=>{
  console.log(req.body)
  res.end('响应')
})
app.listen(3000,()=>{
  console.log('Server is running on port 127.0.0.1:3000....')
})