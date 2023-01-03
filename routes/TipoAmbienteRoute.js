import express from "express";
import {
    getTipoAmbientes,
    getTipoAmbienteById,
    createTipoAmbiente,
    updateTipoAmbiente,
    deleteTipoAmbiente
} from "../controllers/TipoAmbienteControllers.js";

const router = express.Router();

router.get('/tipoambientes', getTipoAmbientes);
router.get('/tipoambientes/:id', getTipoAmbienteById);
router.post('/tipoambientes', createTipoAmbiente);
router.patch('/tipoambientes/:id', updateTipoAmbiente);
router.delete('/tipoambientes/:id', deleteTipoAmbiente);
 
export default router;