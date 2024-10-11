const usuarioService = require('../services/usuarioService');

const usuarioController = {
    async criarUsuario(req, res) {
        const { nome, email, senha, bio } = req.body;
        try {
            const usuarioId = await usuarioService.criarUsuario(nome, email, senha, bio);
            res.status(201).json({ message: "Usuário cadastrado com sucesso!", id: usuarioId });
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            res.status(500).json({ error: 'Erro ao criar usuário' });
        }
    },

    async obterUsuario(req, res) {
        const { id } = req.params;
        try {
            const usuario = await usuarioService.obterUsuarioPorId(id);
            if (!usuario) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            res.json(usuario);
        } catch (error) {
            console.error('Erro ao encontrar usuário:', error);
            res.status(500).json({ error: 'Erro ao obter usuário' });
        }
    },

    async atualizarUsuario(req, res) {
        const { id } = req.params;
        const { nome, senha, bio } = req.body;

        console.log('Dados recebidos para atualização:', { id, nome, senha, bio });

        try {
            await usuarioService.atualizarUsuario(id, nome, senha, bio);
            res.status(200).json({ message: 'Usuário atualizado com sucesso!' }); // Mensagem de sucesso
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    },

    async deletarUsuario(req, res) {
        const { id } = req.params;
        try {
            await usuarioService.deletarUsuario(id);
            res.status(200).json({ message: 'Usuário deletado com sucesso!' }); // Mensagem de sucesso
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    },

    async undeleteUsuario(req, res) {
        const { id } = req.params;
        try {
            await usuarioService.undeleteUsuario(id);
            res.status(200).json({ message: 'Usuário restaurado com sucesso!' }); // Mensagem de sucesso
        } catch (error) {
            console.error('Erro ao restaurar usuário:', error);
            res.status(500).json({ error: 'Erro ao restaurar usuário' });
        }
    }
};

module.exports = usuarioController;
