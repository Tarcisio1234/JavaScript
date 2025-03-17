const express = require('express');
const cors = requere('cors')
const User = require('./configDb')
const app = express();

app.use(express.json());
app.use(cors());

app.post("create", async (req, res) => {
const data = req.body;
    console.log("Dado dos usuarios", data)
    await User.add(data)
    res.send({msg:"Usuario Adicionado com sucesso"})    
})

app.listen(4000, ()=> console.log("Up & Running *4000"))