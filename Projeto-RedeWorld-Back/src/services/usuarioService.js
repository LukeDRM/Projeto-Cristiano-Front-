const createConnection = require('../database/mysql'); // Importa a função de criação de conexão

const usuarioService = {
    async criarUsuario(nome, email, senha, bio) {
        const connection = await createConnection(); // Cria uma nova conexão
        try {
            const query = `INSERT INTO usuarios (nome, email, senha, bio) VALUES (?, ?, ?, ?)`;
            const [result] = await connection.execute(query, [nome, email, senha, bio]);
            return result.insertId;
        } finally {
            await connection.end(); // Fecha a conexão
        }
    },

    async obterUsuarioPorId(id) {
        const connection = await createConnection(); // Cria uma nova conexão
        try {
            const query = `SELECT * FROM usuarios WHERE id = ? AND deletado = 0`;
            const [rows] = await connection.execute(query, [id]);
            return rows[0];
        } finally {
            await connection.end(); // Fecha a conexão
        }
    },

    async obterUsuarioPorEmail(email) {
        const connection = await createConnection(); // Cria uma nova conexão
        try {
            const query = `SELECT * FROM usuarios WHERE email = ? AND deletado = 0`;
            const [rows] = await connection.execute(query, [email]);
            return rows[0];
        } finally {
            await connection.end(); // Fecha a conexão
        }
    },

    async atualizarUsuario(id, nome, senha, bio) {
        const connection = await createConnection(); // Cria uma nova conexão
        try {
            const query = `UPDATE usuarios SET nome = ?, senha = ?, bio = ? WHERE id = ? AND deletado = 0`;
            await connection.execute(query, [nome, senha, bio, id]);
        } finally {
            await connection.end(); // Fecha a conexão
        }
    },

    async deletarUsuario(id) {
        const connection = await createConnection(); // Cria uma nova conexão
        try {
            const query = `UPDATE usuarios SET deletado = 1 WHERE id = ?`;
            await connection.execute(query, [id]);
        } finally {
            await connection.end(); // Fecha a conexão
        }
    },

    async undeleteUsuario(id) {
        const connection = await createConnection(); // Cria uma nova conexão
        try {
            const query = `UPDATE usuarios SET deletado = 0 WHERE id = ?`; // Restaura o usuário
            await connection.execute(query, [id]);
        } finally {
            await connection.end(); // Fecha a conexão
        }
    }
};

module.exports = usuarioService;
