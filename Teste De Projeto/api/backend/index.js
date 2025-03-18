const express = require('express');
const cors = require('cors')
const User = require('./config')
const app = express();
const { addDoc, getDocs } = require("firebase/firestore");

app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) => {
const data = req.body;
    console.log("Dado dos usuarios", data)
    try {
        await addDoc(User, data);
        res.send({ msg: "Usuario Adicionado com sucesso" });
    } catch (error) {
        console.error("Erro ao adicionar usuário:", error);
        res.status(500).send({ msg: "Erro ao adicionar usuário" });
    }   
})

app.get("/buscar", async (req, res) => {
    try {
        const snapshot = await getDocs(User);

        const usuarios = [];
        snapshot.forEach((doc) => {
            usuarios.push({ id: doc.id, ...doc.data() });
        });

        res.send(usuarios);
    } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        res.status(500).send({ msg: "Erro ao buscar usuários" });
    }
});
app.listen(4000, ()=> console.log("Up & Running *4000"))