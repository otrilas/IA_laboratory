import express from "express";
import {
    getProgramaciones,
    getProgramacionById,
    createProgramacion,
    updateProgramacion,
    deleteProgramacion
} from "../controllers/ProgamacionControllers.js";

const router = express.Router();

router.get('/programaciones', getProgramaciones);
router.get('/programaciones/:id', getProgramacionById);
router.post('/programaciones', createProgramacion);
router.patch('/programaciones/:id', updateProgramacion);
router.delete('/programaciones/:id', deleteProgramacion);
 
export default router;