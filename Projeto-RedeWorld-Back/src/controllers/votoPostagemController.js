const votoPostagemService = require('../services/votoPostagemService');

const votoPostagemController = {
    async votarPostagem(req, res) {
        const { usuarioId, postagemId, tipo } = req.body;
        try {
            await votoPostagemService.votarPostagem(usuarioId, postagemId, tipo);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao votar na postagem' });
        }
    },

    async obterVotosPorPostagem(req, res) {
        const { postagemId } = req.params;
        try {
            const votos = await votoPostagemService.obterVotosPorPostagemId(postagemId);
            res.json(votos);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter votos da postagem' });
        }
    }
};

module.exports = votoPostagemController;
