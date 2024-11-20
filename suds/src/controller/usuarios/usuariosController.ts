import { Request, Response } from "express";

import { SQL_USUARIOS } from "../../repository/usuarios/usuariosRepository";
import usuariosDAO from "../../dao/usuarios/usuariosDAO";

class usuariosController extends usuariosDAO {
  public ctrlListarTodosUsu(req:Request, res: Response) {
    const sql_usuarios_listar = SQL_USUARIOS.LISTAR_TODOS;
    usuariosController.listarTodosUsu(sql_usuarios_listar, [], res);
  }

  public postUsuario(req: Request, res: Response): void {
    const { nombre_usuario, correo_usuario, password_usuario, nombres_usuario, apellidos_usuario} = req.body;

    const datos = [ nombre_usuario, correo_usuario, password_usuario, nombres_usuario, apellidos_usuario];

    usuariosController.crearUsuario(
      SQL_USUARIOS.VERIFICAR,
      SQL_USUARIOS.CREAR,
      datos,
      res
    );
}


public updateUsuario(req: Request, res: Response): void {
  const { nombre_usuario, correo_usuario, password_usuario, nombres_usuario, apellidos_usuario } = req.body;
  const id_usuario = req.params.id;  // Ahora obtenemos el id desde params
  const datos = [ nombre_usuario, correo_usuario, password_usuario, nombres_usuario, apellidos_usuario, id_usuario];

  usuariosController.editarUsuario(SQL_USUARIOS.EDITAR, datos, res);
}
  

  public borrarUsuario(req: Request, res: Response): void {
    const codigo = req.params.id;
    const parametro = [codigo];
    usuariosController.borrarPorId(SQL_USUARIOS.ELIMINAR, parametro, res);
  }
}

const ctrlUsuarios = new usuariosController();
export default ctrlUsuarios;
