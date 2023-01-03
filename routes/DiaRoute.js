import express from "express";
import {
    getDias,
    getDiaById,
    createDia,
    updateDia,
    deleteDia
} from "../controllers/DiaControllers.js";

const router = express.Router();

router.get('/dias', getDias);
router.get('/dias/:id', getDiaById);
router.post('/dias', createDia);
router.patch('/dias/:id', updateDia);
router.delete('/dias/:id', deleteDia);
 
export default router;