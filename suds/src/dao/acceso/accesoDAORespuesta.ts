import {Request,Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

class accesoDAORespuesta{
    public static async procesar(registro: any, res: Response): Promise<any>{
        if(registro != null){
            const miTokencito = jwt.sign({
                codiguito: registro.id_usuario,
                usuario: registro.nombre_usuario,
                dosDev: "Eso somos",
            },
             "laClave",
             {expiresIn: "8h"}
            );
            return res.status(200).json({token: miTokencito})
        }else{
            return res.status(401).json({mensaje: "Usuario Incorrecto"})
        }
    }
}

export default accesoDAORespuesta;