import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

class Validacion{
    public delToken(req: Request, res:Response, next:NextFunction): any{
        if(!req.headers.authorization){
            res.status(401).json({
                mensaje: "Cabecerita totiada",
            })
        }else{
            try{
                const miToken = req.headers.authorization.split(" ")[1] as string;
                const informacion = jwt.verify(miToken,'laClave')
                req.body.datosUtiles = informacion
                next();
            }catch(err){
                res.status(401).json({
                    mensaje: "Lo pille entrando a lo pirata",
                })
            }
        }
    }
}

const validacion = new Validacion();
export default validacion;