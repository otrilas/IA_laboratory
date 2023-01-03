import express from "express";
import {
    getEdificios,
    getEdificioById,
    createEdificio,
    updateEdificio,
    deleteEdificio
} from "../controllers/EdificioControllers.js";

const router = express.Router();

router.get('/edificios', getEdificios);
router.get('/edificios/:id', getEdificioById);
router.post('/edificios', createEdificio);
router.patch('/edificios/:id', updateEdificio);
router.delete('/edificios/:id', deleteEdificio);
 
export default router;