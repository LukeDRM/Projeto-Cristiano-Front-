const db = require('../database/mysql');

const votoPostagemService = {
    async votarPostagem(usuarioId, postagemId, tipo) {
        const query = `INSERT INTO votos_postagens (usuario_id, postagem_id, tipo) VALUES (?, ?, ?)`;
        await db.execute(query, [usuarioId, postagemId, tipo]);
    },

    async obterVotosPorPostagemId(postagemId) {
        const query = `SELECT * FROM votos_postagens WHERE postagem_id = ? AND deletado = 0`;
        const [rows] = await db.execute(query, [postagemId]);
        return rows;
    }
};

module.exports = votoPostagemService;
