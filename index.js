const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

// middle wire( which sharing resourses with client side)
app.use(cors());
// parse json file & get body data
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello world I wil try again & again. in-sha-allah I will be success')
})



app.listen(port, () => {
    console.log('listing to port', port)
})