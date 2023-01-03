import express from "express";
import {
    getPersonas,
    getPersonaById,
    createPersona,
    updatePersona,
    deletePersona
} from "../controllers/PersonaController.js";

const router = express.Router();

router.get('/personas', getPersonas);
router.get('/personas/:id', getPersonaById);
router.post('/personas', createPersona);
router.patch('/personas/:id', updatePersona);
router.delete('/personas/:id', deletePersona);
 
export default router;