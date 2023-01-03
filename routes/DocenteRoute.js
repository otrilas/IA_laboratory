import express from "express";
import {
    getDocentes,
    getDocenteById,
    createDocente,
    updateDocente,
    deleteDocente
} from "../controllers/DocenteControllers.js";

const router = express.Router();

router.get('/docentes', getDocentes);
router.get('/docentes/:id', getDocenteById);
router.post('/docentes', createDocente);
router.patch('/docentes/:id', updateDocente);
router.delete('/docentes/:id', deleteDocente);
 
export default router;