import { Request, Response } from "express";
import { SQL_CRITERIOS } from "../../repository/criterios/criteriosRepository";
import criteriosDAO from "../../dao/criterios/criteriosDAO";


class criteriosController extends criteriosDAO {
    public listarTodosCri(req: Request, res: Response): void {
        criteriosController.listarTodosCri(SQL_CRITERIOS.LISTAR_TODOS, [], res);
    }

    public crearCriterio(req: Request, res: Response): void {
        const { nombre_criterio, descripcion, intensidad, valor_cuantitativo, valor_cualitativo, id_componente } = req.body;
        const datos = [nombre_criterio, descripcion, intensidad, valor_cuantitativo, valor_cualitativo, id_componente];
        criteriosController.crearCritero(SQL_CRITERIOS.VERIFICAR, SQL_CRITERIOS.CREAR, datos, res);
    }

    public editarCriterio(req: Request, res: Response): void {
        const { nombre_criterio, descripcion, intensidad, valor_cuantitativo, valor_cualitativo, id_componente } = req.body;
        const id_criterio = req.params.id; // Obtenemos el id desde params
        const datos = [nombre_criterio, descripcion, intensidad, valor_cuantitativo, valor_cualitativo, id_componente, id_criterio];
        criteriosController.editarCriterio(SQL_CRITERIOS.EDITAR, datos, res);
    }

    public borrarCriterio(req: Request, res: Response): void {
        const id_criterio = req.params.id;
        const parametro = [id_criterio];
        criteriosController.borrarCriterio(SQL_CRITERIOS.ELIMINAR, parametro, res);
    }
}

const ctrlCriterios = new criteriosController();
export default ctrlCriterios;
