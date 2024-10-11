const db = require('../database/mysql');

const worldService = {
    async criarWorld(nome, descricao, usuarioId) {
        const query = `INSERT INTO worlds (nome, descricao, usuario_id) VALUES (?, ?, ?)`;
        const [result] = await db.execute(query, [nome, descricao, usuarioId]);
        return result.insertId;
    },

    async obterWorldPorId(id) {
        const query = `SELECT * FROM worlds WHERE id = ?`;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    },

    async obterWorldsPorUsuarioId(usuarioId) {
        const query = `SELECT * FROM worlds WHERE usuario_id = ?`;
        const [rows] = await db.execute(query, [usuarioId]);
        return rows;
    },

    async atualizarWorld(id, nome, descricao) {
        const query = `UPDATE worlds SET nome = ?, descricao = ? WHERE id = ? AND deletado = 0`;
        await db.execute(query, [nome, descricao, id]);
    },

    async deletarWorld(id) {
            const query = `UPDATE worlds SET deletado = 1 WHERE id = ?`;
            await db.execute(query, [id]);
    }
};

module.exports = worldService;
