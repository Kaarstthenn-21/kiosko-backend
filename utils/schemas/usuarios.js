const joi = require('@hapi/joi')

const usuarioIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const usuarioNombreSchema = joi.string().max(50)
const usuarioDireccionSchema = joi.string().max(80)
const usuarioTelefonoSchema = joi.string().length(9).pattern(/^[0-9]+$/).required()
const usuarioRFCSchema = joi.string().length(13)
const usuarioEmailSchema = joi.string().max(30)

const createUsuarioSchema = {
    nombre: usuarioNombreSchema,
    direccion: usuarioDireccionSchema,
    telefono: usuarioTelefonoSchema,
    rfc: usuarioRFCSchema,
    email: usuarioEmailSchema
}

const updateUsuarioSchema = {
    nombre: usuarioNombreSchema,
    direccion: usuarioDireccionSchema,
    telefono: usuarioTelefonoSchema,
    rfc: usuarioRFCSchema,
    email: usuarioEmailSchema
}

module.exports = {
    usuarioIdSchema,
    createUsuarioSchema,
    updateUsuarioSchema
}