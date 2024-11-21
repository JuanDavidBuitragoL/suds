import { Request, Response } from "express";
import { SQL_COMPONENTES } from "../../repository/componentes/componentesRepository";
import componentesDAO from "../../dao/componentes/componentesDAO";

class componentesController extends componentesDAO {
    public listarTodosCom(req: Request, res: Response): void {
        componentesController.listarTodosCom(SQL_COMPONENTES.LISTAR_TODOS, [], res);
    }

    public crearComponente(req: Request, res: Response): void {
        const { nombre_componente, descripcion, photo, valor_amenidad, valor_cualitativo } = req.body;
    
        const datos = [ nombre_componente, descripcion, photo, valor_amenidad, valor_cualitativo];
    
        componentesController.crearComponente(
            SQL_COMPONENTES.VERIFICAR, SQL_COMPONENTES.CREAR, datos, res
        );
    }
    public editarComponente(req: Request, res: Response): void {
        const { nombre_componente, descripcion, photo, valor_amenidad, valor_cualitativo } = req.body;
        const id_componente = req.params.id;
        const datos = [nombre_componente, descripcion, photo, valor_amenidad, valor_cualitativo, id_componente];
        componentesController.editarComponente(SQL_COMPONENTES.EDITAR, datos, res);
    }

    public borrarComponente(req: Request, res: Response): void {
        const id_componente = req.params.id;
        const parametro = [id_componente];
        componentesController.borrarComponente(SQL_COMPONENTES.ELIMINAR, parametro, res);
    }
}

const ctrlComponentes = new componentesController();
export default ctrlComponentes;
