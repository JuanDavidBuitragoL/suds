"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rolesRepository_1 = require("./../../repository/roles/rolesRepository");
const rolesDAO_1 = __importDefault(require("../../dao/roles/rolesDAO"));
class rolesController extends rolesDAO_1.default {
    listarRoles(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        const sql_listar_id = rolesRepository_1.SQL_ROLES.LISTAR_TODOS;
        rolesController.listarRoles(sql_listar_id, parametro, res);
    }
    crearRol(req, res) {
        const { nombre_rol } = req.body;
        const id_rol = parseInt(req.params.id);
        // Crea el array de datos a guardar en la base de datos
        const datos = [nombre_rol, id_rol];
        rolesController.crearRol(rolesRepository_1.SQL_ROLES.VERIFICAR, rolesRepository_1.SQL_ROLES.CREAR, datos, res);
    }
    updateRol(req, res) {
        const id_rol = parseInt(req.params.id_rol);
        const { nombre_rol } = req.body;
        const datos = [nombre_rol, id_rol];
        rolesController.editarRol(rolesRepository_1.SQL_ROLES.EDITAR, datos, res);
    }
    borrarRol(req, res) {
        const codigo = req.params.id;
        const parametro = [codigo];
        rolesController.borrarPorId(rolesRepository_1.SQL_ROLES.ELIMINAR, parametro, res);
    }
}
const ctrlRoles = new rolesController();
exports.default = ctrlRoles;
//# sourceMappingURL=rolesController.js.map