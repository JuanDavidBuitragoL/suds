import express, { Application } from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cors from "cors";

import rutasAPI from "../../routes/rutas";
import validacion from "../../middleware/Validacion";
import rutasPriv from "../../routes/privadas/rutasPriv";

class Server {
  public app: Application;
  public port: String;

  constructor() {
    this.app = express();
    config({ path: "./.env" });
    this.port = process.env.SERVER_PORT || "8082";

    this.iniciarConfiguracion();
    this.activarRutas();
  }
  public iniciarConfiguracion(): void {
    this.app.set("PORT", this.port);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "100mb" }));
    this.app.use(express.urlencoded({ extended: true }));
  }
  public activarRutas(): void {
    this.app.use("/api/acceso",rutasAPI)
    this.app.use("/api/acceso/privada",validacion.delToken,rutasPriv)
  }
  public iniciar(): void {
    const puerto = this.app.get("PORT");
    this.app.listen(puerto, () => {
      console.log("Servidor corriendo en el puerto: " + puerto);
    });
  }
}
export default Server;
