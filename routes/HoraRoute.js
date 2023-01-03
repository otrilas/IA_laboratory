import express from "express";
import {
    getHoras,
    getHoraById,
    createHora,
    updateHora,
    deleteHora
} from "../controllers/HoraControllers.js";

const router = express.Router();

router.get('/horas', getHoras);
router.get('/horas/:id', getHoraById);
router.post('/horas', createHora);
router.patch('/horas/:id', updateHora);
router.delete('/horas/:id', deleteHora);
 
export default router;