import express from "express";
import {
    getHorarios,
    getHorarioById,
    createHorario,
    updateHorario,
    deleteHorario
} from "../controllers/HorarioControllers.js";

const router = express.Router();

router.get('/horarios', getHorarios);
router.get('/horarios/:id', getHorarioById);
router.post('/horarios', createHorario);
router.patch('/horarios/:id', updateHorario);
router.delete('/horarios/:id', deleteHorario);
 
export default router;