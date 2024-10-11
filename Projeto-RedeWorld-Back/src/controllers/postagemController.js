const postagemService = require('../services/postagemService');

const postagemController = {
    async criarPostagem(req, res) {
        const { titulo, conteudo, usuarioId, worldId } = req.body;
        try {
            const postagemId = await postagemService.criarPostagem(titulo, conteudo, usuarioId, worldId);
            res.status(201).json({ id: postagemId });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar postagem' });
        }
    },

    async obterPostagem(req, res) {
        const { id } = req.params;
        try {
            const postagem = await postagemService.obterPostagemPorId(id);
            if (!postagem) {
                return res.status(404).json({ error: 'Postagem não encontrada' });
            }
            res.json(postagem);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter postagem' });
        }
    },

    async atualizarPostagem(req, res) {
        const { id } = req.params;
        const { titulo, conteudo } = req.body;
        try {
            await postagemService.atualizarPostagem(id, titulo, conteudo);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar postagem' });
        }
    },

    async deletarPostagem(req, res) {
        const { id } = req.params;
        try {
            await postagemService.deletarPostagem(id);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar postagem' });
        }
    }
};

module.exports = postagemController;
