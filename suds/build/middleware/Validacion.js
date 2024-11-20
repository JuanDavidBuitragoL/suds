"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Validacion {
    delToken(req, res, next) {
        if (!req.headers.authorization) {
            res.status(401).json({
                mensaje: "Cabecerita totiada",
            });
        }
        else {
            try {
                const miToken = req.headers.authorization.split(" ")[1];
                const informacion = jsonwebtoken_1.default.verify(miToken, 'laClave');
                req.body.datosUtiles = informacion;
                next();
            }
            catch (err) {
                res.status(401).json({
                    mensaje: "Lo pille entrando a lo pirata",
                });
            }
        }
    }
}
const validacion = new Validacion();
exports.default = validacion;
//# sourceMappingURL=Validacion.js.map