import express from "express";
import {
    getCronogramas,
    getCronogramaById,
    createCronograma,
    updateCronograma,
    deleteCronograma
} from "../controllers/CronogramaControllers.js";

const router = express.Router();

router.get('/cronogramas', getCronogramas);
router.get('/cronogramas/:id', getCronogramaById);
router.post('/cronogramas', createCronograma);
router.patch('/cronogramas/:id', updateCronograma);
router.delete('/cronogramas/:id', deleteCronograma);
 
export default router;