import express from "express";
import {
    getAsignaciones,
    getAsignacionById,
    createAsignacion,
    updateAsignacion,
    deleteAsignacion
} from "../controllers/AsignacionControllers.js";

const router = express.Router();

router.get('/asignaciones', getAsignaciones);
router.get('/asignaciones/:id', getAsignacionById);
router.post('/asignaciones', createAsignacion);
router.patch('/asignaciones/:id', updateAsignacion);
router.delete('/asignaciones/:id', deleteAsignacion);
 
export default router;