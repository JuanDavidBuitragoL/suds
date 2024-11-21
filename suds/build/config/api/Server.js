"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const rutas_1 = __importDefault(require("../../routes/rutas"));
const Validacion_1 = __importDefault(require("../../middleware/Validacion"));
const rutasPriv_1 = __importDefault(require("../../routes/privadas/rutasPriv"));
const rutasRoles_1 = __importDefault(require("../../routes/privadas/rutasRoles"));
const rutasIndicadores_1 = __importDefault(require("../../routes/privadas/rutasIndicadores"));
const rutasIngenieros_1 = __importDefault(require("../../routes/privadas/rutasIngenieros"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        (0, dotenv_1.config)({ path: "./.env" });
        this.port = process.env.SERVER_PORT || "8082";
        this.iniciarConfiguracion();
        this.activarRutas();
    }
    iniciarConfiguracion() {
        this.app.set("PORT", this.port);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activarRutas() {
        this.app.use("/api/acceso", rutas_1.default);
        this.app.use("/api/acceso/privada", Validacion_1.default.delToken, rutasPriv_1.default);
        this.app.use("/api/acceso/privada", Validacion_1.default.delToken, rutasRoles_1.default);
        this.app.use("/api/acceso/privada", Validacion_1.default.delToken, rutasIndicadores_1.default);
        this.app.use("/api/acceso/privada", Validacion_1.default.delToken, rutasIngenieros_1.default);
    }
    iniciar() {
        const puerto = this.app.get("PORT");
        this.app.listen(puerto, () => {
            console.log("Servidor corriendo en el puerto: " + puerto);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map