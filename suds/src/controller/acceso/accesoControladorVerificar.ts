import { SQL_ACCESO_VERIFICAR } from '../../repository/acceso/accesoRepository';
import {Request, Response} from "express";
import validarAcceso from "../../dao/acceso/validarAcceso"


class accesoControladorVerificar extends validarAcceso{
    public verificarUsuario(req: Request, res: Response): void {
        const usuario = req.body.usuarioAcceso;
        const clave = req.body.claveAcceso;
        const parametro = [usuario, clave];
        accesoControladorVerificar.iniciarSesion(
          SQL_ACCESO_VERIFICAR.ACCESO_VERIFICAR,
          parametro,
          res
        );
      }
}

const accesoControladorVerificar_var = new accesoControladorVerificar();
export default accesoControladorVerificar_var;