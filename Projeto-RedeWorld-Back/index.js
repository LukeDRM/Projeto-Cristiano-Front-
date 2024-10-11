const express = require('express');
const app = express();
const routes = require('./src/routes/routes'); // Caminho para o arquivo routes.js

// Middleware para habilitar parsing de JSON
app.use(express.json());

// Utilizando todas as rotas
app.use('/', routes); // Prefixa as rotas com /

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
