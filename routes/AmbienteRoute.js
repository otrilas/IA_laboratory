import express from "express";
import {
    getAmbientes,
    getAmbienteById,
    createAmbiente,
    updateAmbiente,
    deleteAmbiente
} from "../controllers/AmbienteControllers.js";

const router = express.Router();

router.get('/ambientes', getAmbientes);
router.get('/ambientes/:id', getAmbienteById);
router.post('/Ambientes', createAmbiente);
router.patch('/ambientes/:id', updateAmbiente);
router.delete('/ambientes/:id', deleteAmbiente);
 
export default router;