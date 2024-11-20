"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const opcionConexion_1 = require("./opcionConexion");
const varDB_1 = __importDefault(require("../dominios/varDB"));
const pgp = (0, pg_promise_1.default)(opcionConexion_1.opcionesPG);
const pool = pgp(varDB_1.default);
const dbname = varDB_1.default.database;
pool
    .connect()
    .then((conn) => {
    console.log("Conexion exitosa: ", dbname);
    conn.done();
})
    .catch((mierror) => {
    console.log(mierror);
});
exports.default = pool;
//# sourceMappingURL=conexion.js.map