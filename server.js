require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(express.json());

const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {
  const user = { id: 1, nome: "Admin Jitterbit" };
  
  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });

  res.json({ message: "Login bem-sucedido!", token: token });
});

app.use('/', orderRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Servidor rodando na porta http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar no MongoDB:', error.message);
  });