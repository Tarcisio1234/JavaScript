const express = require('express');
const cors = require('cors')
const User = require('./config')
const app = express();
const { addDoc, getDocs,doc,updateDoc, deleteDoc } = require("firebase/firestore");

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

// Rota para editar um usuário
app.put("/editar/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, idade } = req.body;

    try {
        // Atualiza o documento no Firestore
        const userRef = doc(User, id);
        await updateDoc(userRef, { nome, idade });
        res.send({ msg: "Usuário atualizado com sucesso" });
    } catch (error) {
        console.error("Erro ao editar usuário:", error);
        res.status(500).send({ msg: "Erro ao editar usuário" });
    }
});



app.delete("/excluir/:id", async (req, res) => {
    const { id } = req.params;

    try {
        // Exclui o documento no Firestore
        const userRef = doc(User, id);
        await deleteDoc(userRef);
        res.send({ msg: "Usuário excluído com sucesso" });
    } catch (error) {
        console.error("Erro ao excluir usuário:", error);
        res.status(500).send({ msg: "Erro ao excluir usuário" });
    }
});
app.listen(4000, ()=> console.log("Up & Running *4000"))