const comentarioService = require('../services/comentarioService');

const comentarioController = {
    async criarComentario(req, res) {
        const { conteudo, usuarioId, postagemId } = req.body;
        try {
            const comentarioId = await comentarioService.criarComentario(conteudo, usuarioId, postagemId);
            res.status(201).json({ id: comentarioId });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar comentário' });
        }
    },

    async obterComentario(req, res) {
        const { id } = req.params;
        try {
            const comentario = await comentarioService.obterComentarioPorId(id);
            if (!comentario) {
                return res.status(404).json({ error: 'Comentário não encontrado' });
            }
            res.json(comentario);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter comentário' });
        }
    },

    async atualizarComentario(req, res) {
        const { id } = req.params;
        const { conteudo } = req.body;
        try {
            await comentarioService.atualizarComentario(id, conteudo);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar comentário' });
        }
    },

    async deletarComentario(req, res) {
        const { id } = req.params;
        try {
            await comentarioService.deletarComentario(id);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar comentário' });
        }
    }
};

module.exports = comentarioController;
