const express = require('express');
const router = express.Router();

// Importa todos os controladores
const usuarioController = require('../controllers/usuarioController');
const worldController = require('../controllers/worldController');
const postagemController = require('../controllers/postagemController');
const comentarioController = require('../controllers/comentarioController');
const votoPostagemController = require('../controllers/votoPostagemController');
const votoComentarioController = require('../controllers/votoComentarioController');

// Rotas para usuários
router.post('/usuarios', usuarioController.criarUsuario); // Criar usuário
router.get('/usuarios/:id', usuarioController.obterUsuario); // Obter usuário por ID
router.put('/usuarios/:id', usuarioController.atualizarUsuario); // Atualizar usuário
router.delete('/usuarios/:id', usuarioController.deletarUsuario); // Deletar usuário
router.put('/usuarios/:id/undelete', usuarioController.undeleteUsuario); // Rota para restaurar usuário


// Rotas para worlds
router.post('/worlds', worldController.criarWorld); // Criar world
router.get('/worlds/:id', worldController.obterWorld); // Obter world por ID
router.put('/worlds/:id', worldController.atualizarWorld); // Atualizar world
router.delete('/worlds/:id', worldController.deletarWorld); // Deletar world

// Rotas para postagens
router.post('/postagens', postagemController.criarPostagem); // Criar postagem
router.get('/postagens/:id', postagemController.obterPostagem); // Obter postagem por ID
router.put('/postagens/:id', postagemController.atualizarPostagem); // Atualizar postagem
router.delete('/postagens/:id', postagemController.deletarPostagem); // Deletar postagem

// Rotas para comentários
router.post('/comentarios', comentarioController.criarComentario); // Criar comentário
router.get('/comentarios/:id', comentarioController.obterComentario); // Obter comentário por ID
router.put('/comentarios/:id', comentarioController.atualizarComentario); // Atualizar comentário
router.delete('/comentarios/:id', comentarioController.deletarComentario); // Deletar comentário

// Rotas para votos em postagens
router.post('/votos/postagens', votoPostagemController.votarPostagem); // Votar em postagem
router.get('/votos/postagens/:postagemId', votoPostagemController.obterVotosPorPostagem); // Obter votos de uma postagem

// Rotas para votos em comentários
router.post('/votos/comentarios', votoComentarioController.votarComentario); // Votar em comentário
router.get('/votos/comentarios/:comentarioId', votoComentarioController.obterVotosPorComentario); // Obter votos de um comentário

module.exports = router;
