const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.get("/", (req, res)=>{
    let message = "HELLO FROM THE OHER SIDE OF THE MOON"
    console.log("HELLLOOOOOOOOOOOOOOOOO")
    res.send(message)
})

app.listen(PORT, ()=>{
    console.log("Server is running on the port" + PORT);
})
