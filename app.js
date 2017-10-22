const express = require('express')
const app = express()

app.listen(3000, function() {
	console.log('example app listening on port 3000')
})

app.get('/bootstrap', function(req, res) {
	res.send('Hellow wolrd')
})

app.use('/bootstrap', express.static('public'))
