const votoComentarioService = require('../services/votoComentariosService');

const votoComentarioController = {
    async votarComentario(req, res) {
        const { usuarioId, comentarioId, tipo } = req.body;
        try {
            await votoComentarioService.votarComentario(usuarioId, comentarioId, tipo);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao votar no comentário' });
        }
    },

    async obterVotosPorComentario(req, res) {
        const { comentarioId } = req.params;
        try {
            const votos = await votoComentarioService.obterVotosPorComentarioId(comentarioId);
            res.json(votos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter votos do comentário' });
        }
    }
};

module.exports = votoComentarioController;
