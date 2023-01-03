import express from "express";
import {
    getMaterias,
    getMateriaById,
    createMateria,
    updateMateria,
    deleteMateria
} from "../controllers/MateriaControllers.js";

const router = express.Router();

router.get('/materias', getMaterias);
router.get('/materias/:id', getMateriaById);
router.post('/materias', createMateria);
router.patch('/materias/:id', updateMateria);
router.delete('/materias/:id', deleteMateria);
 
export default router;