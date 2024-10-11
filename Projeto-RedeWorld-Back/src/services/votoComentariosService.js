const db = require('../database/mysql');

const votoComentarioService = {
    async votarComentario(usuarioId, comentarioId, tipo) {
        const query = `INSERT INTO votos_comentarios (usuario_id, comentario_id, tipo) VALUES (?, ?, ?)`;
        await db.execute(query, [usuarioId, comentarioId, tipo]);
    },

    async obterVotosPorComentarioId(comentarioId) {
        const query = `SELECT * FROM votos_comentarios WHERE comentario_id = ? AND deletado = 0`;
        const [rows] = await db.execute(query, [comentarioId]);
        return rows;
    }
};

module.exports = votoComentarioService;
