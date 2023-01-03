import express from "express";
import {
    getEstudiantes,
    getEstudianteById,
    createEstudiante,
    updateEstudiante,
    deleteEstudiante
} from "../controllers/EstudianteControllers.js";

const router = express.Router();

router.get('/estudiantes', getEstudiantes);
router.get('/estudiantes/:id', getEstudianteById);
router.post('/estudiantes', createEstudiante);
router.patch('/estudiantes/:id', updateEstudiante);
router.delete('/estudiantes/:id', deleteEstudiante);
 
export default router;