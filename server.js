const express = require('express')
const app = express()


//routes
app.get('/', (req,res) => {
	res.send('Hello NODE API')
})

app.get('/blog', (req,res) => {
	res.send('Hello NODE API from blog')
})

app.get('/blog/test', (req,res) => {
	res.send('Hello NODE API from blog test')
})

app.listen(3000, ()=> {
	console.log('Node Api app is running on port 3000')
})
