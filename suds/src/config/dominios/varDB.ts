import {config} from "dotenv";
config({path: "./.env"});

export default {
    user: process.env.DB_USER || "user_java",
    password: process.env.DB_PASSWORD || "0000",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || "db_suds",
}