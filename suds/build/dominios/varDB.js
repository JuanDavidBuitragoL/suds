"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: "./.env" });
exports.default = {
    user: process.env.DB_USER || "user_java",
    password: process.env.DB_PASSWORD || "0000",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || "mibd",
};
//# sourceMappingURL=varDB.js.map