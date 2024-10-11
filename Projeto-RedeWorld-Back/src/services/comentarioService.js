const db = require('../database/mysql');

const comentarioService = {
    async criarComentario(conteudo, usuarioId, postagemId) {
        const query = `INSERT INTO comentarios (conteudo, usuario_id, postagem_id) VALUES (?, ?, ?)`;
        const [result] = await db.execute(query, [conteudo, usuarioId, postagemId]);
        return result.insertId;
    },

    async obterComentarioPorId(id) {
        const query = `SELECT * FROM comentarios WHERE id = ?`;
        const [rows] = await db.execute(query, [id]);
        return rows[0];
    },

    async obterComentariosPorPostagemId(postagemId) {
        const query = `SELECT * FROM comentarios WHERE postagem_id = ?`;
        const [rows] = await db.execute(query, [postagemId]);
        return rows;
    },

    async atualizarComentario(id, conteudo) {
        const query = `UPDATE comentarios SET conteudo = ? WHERE id = ? and deletado = 0`;
        await db.execute(query, [conteudo, id]);
    },

    async deletarComentario(id) {
        const query = `UPDATE comentarios SET deletado = 1 WHERE id = ?`;
        await db.execute(query, [id]);
    }
};

module.exports = comentarioService;
