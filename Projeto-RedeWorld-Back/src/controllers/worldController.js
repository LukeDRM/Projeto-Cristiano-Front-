const worldService = require('../services/worldService');

const worldController = {
    async criarWorld(req, res) {
        const { nome, descricao, usuarioId } = req.body;
        try {
            const worldId = await worldService.criarWorld(nome, descricao, usuarioId);
            res.status(201).json({ id: worldId });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar world' });
        }
    },

    async obterWorld(req, res) {
        const { id } = req.params;
        try {
            const world = await worldService.obterWorldPorId(id);
            if (!world) {
                return res.status(404).json({ error: 'World não encontrado' });
            }
            res.json(world);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao obter world' });
        }
    },

    async atualizarWorld(req, res) {
        const { id } = req.params;
        const { nome, descricao } = req.body;
        try {
            await worldService.atualizarWorld(id, nome, descricao);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar world' });
        }
    },

    async deletarWorld(req, res) {
        const { id } = req.params;
        try {
            await worldService.deletarWorld(id);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar world' });
        }
    }
};

module.exports = worldController;
