const express = require('express')

const UsuariosService = require('./../services/usuarios');

const { usuarioIdSchema, createUsuarioSchema, updateUsuarioSchema } = require('../utils/schemas/usuarios');

const validationHandler = require('../utils/middleware/validationHandler');

function usuarioApi(app) {
    const router = express.Router()
    app.use("/api/usuarios", router);

    const usuarioService = new UsuariosService();

    router.get("/", async (req, res, next) => {
        const { tags } = req.query;
        try {
            const usuarios = await usuarioService.getUsuarios({ tags })
            res.status(200).json({
                data: usuarios,
                message: 'Lista de usuarios'
            })
        } catch (err) {
            next(err);
        }
    })

    router.get("/:usuarioId", validationHandler({ usuarioId: usuarioIdSchema }, 'params'), async (req, res, next) => {
        const { usuarioId } = req.params
        try {
            const usuarios = await usuarioService.getUsuario({
                usuarioId
            })
            res.status(200).json({
                data: usuarios,
                message: 'Usuarios retrieve'
            })
        } catch (err) {
            next(err);
        }
    })
    router.post("/", validationHandler(createUsuarioSchema), async (req, res, next) => {
        const { body: usuario } = req;
        try {
            const usuarioCreate = await usuarioService.createUsuario({
                usuario
            })
            res.status(201).json({
                data: usuarioCreate,
                message: 'usuarios create'
            })
        } catch (err) {
            next(err);
        }
    })
    router.put(
        '/:usuarioId',
        validationHandler({ usuarioId: usuarioIdSchema }, 'params'),
        validationHandler(updateUsuarioSchema),
        async function (req, res, next) {
            const { usuarioId } = req.params;
            const { body: usuario} = req;

            try {
                const updatedUsuarioId = await usuarioService.updatedUsuario({
                    usuarioId,
                    usuario
                });

                res.status(200).json({
                    data: updatedUsuarioId,
                    message: 'user updated'
                });
            } catch (err) {
                next(err);
            }
        }
    );
    router.delete("/:usuarioId", validationHandler({ usuarioId: usuarioIdSchema }, 'params'), async (req, res, next) => {
        const { usuarioId } = req.params
        try {
            const deletedUsuario = await usuarioService.deletedUsuario({ usuarioId })
            res.status(200).json({
                data: deletedUsuario,
                message: 'Usuario deleted'
            })
        } catch (err) {
            next(err);
        }
    })
}
module.exports = usuarioApi;