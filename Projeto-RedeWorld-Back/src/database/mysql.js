// src/database/mysql.js
const mysql = require('mysql2/promise'); // Importa mysql2 com suporte a promises

// Cria uma conexão com o banco de dados
async function createConnection() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'RedeWorld'
    });

    return connection;
}

// Exporta a função de criação de conexão
module.exports = createConnection;
