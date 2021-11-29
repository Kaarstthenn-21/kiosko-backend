const MongoLib = require('./../lib/mongo')

class UsuariosService {
    constructor() {
        this.collection = 'usuarios';
        this.mongoDB = new MongoLib();
    }
    async getUsuarios({ tags }) {
        const query = { tiendaId: tags }
        const usuarios = await this.mongoDB.getAll(this.collection, query)
        return usuarios || [];
    }

    async getUsuario({ usuarioId }) {
        const usuario = await this.mongoDB.get(this.collection, usuarioId)
        return usuario || {};
    }

    async createUsuario({ usuario }) {
        const createUsuario = await this.mongoDB.create(this.collection, usuario);
        return createUsuario || {};
    }

    async updatedUsuario({ usuarioId, usuario } = {}) {
        const updatedUsuario = await this.mongoDB.update(this.collection, usuarioId, usuario);
        return updatedUsuario;
    }

    async deletedUsuario({ usuarioId }) {
        const deletedUsuario = await this.mongoDB.delete(this.collection, usuarioId);
        return deletedUsuario;
    }
}

module.exports = UsuariosService;