import {Response} from "express";
import accesoDAORespuesta from "../../dao/acceso/accesoDAORespuesta"
import pool from "../../config/conection/conexion";

class validarAcceso{
    public static async iniciarSesion( //Este es el metodo temporar, probablemente remplace validarAcceso()
    sqlConfirmar: string,
    parametros: any,
    res: Response
  ): Promise<any> {
    await pool
      .oneOrNone(sqlConfirmar, parametros)
      .then((dato) => {
        return accesoDAORespuesta.procesar(dato, res);
      })
      .catch((mierror)=>{
        console.log(mierror);
        return res.status(500).json({
          msg: 'Error transacción servidor'
        });
      });
  }

  public static async validarAcceso(
    sqlConfirmar: string,
    parametros: any,
    res: Response
  ): Promise<any> {
    await pool
      .result(sqlConfirmar, parametros)
      .then((dato) => {
        console.log("Datos devueltos: ", dato.rowCount);
        if (dato.rowCount == 0) {
          return res.status(400).json({
            mensaje: "Error en la validación ",
          });
        } else {
          return res.status(200).json({
            mensaje: "Usuario Encontrado",
            resultado: dato.rows,
          });
        }
      })
      .catch((mierror) => {
        console.log(mierror);
        res.status(400).json({
          mensjae: "No se encontro el usuario",
        });
      });
  }
}

export default validarAcceso;