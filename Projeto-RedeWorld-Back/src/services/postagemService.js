const db = require('../database/mysql');

const postagemService = {
    async criarPostagem(titulo, conteudo, usuarioId, worldId) {
        const query = `INSERT INTO postagens (titulo, conteudo, usuario_id, world_id) VALUES (?, ?, ?, ?)`;
        const [result] = await db.execute(query, [titulo, conteudo, usuarioId, worldId]);
        return result.insertId;
    },

    async obterPostagemPorId(id) {
        const query = `SELECT * FROM postagens WHERE id = ?`;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    },

    async obterPostagensPorWorldId(worldId) {
        const query = `SELECT * FROM postagens WHERE world_id = ?`;
        const [rows] = await db.execute(query, [worldId]);
        return rows;
    },

    async atualizarPostagem(id, titulo, conteudo) {
        const query = `UPDATE postagens SET titulo = ?, conteudo = ? WHERE id = ? AND deletado = 0`;
        await db.execute(query, [titulo, conteudo, id]);
    },

    async deletarPostagem(id) {
        const query = `UPDATE postagens SET deletado = 1 WHERE id = ?`;
        await db.execute(query, [id]);
    }
};


module.exports = postagemService;
