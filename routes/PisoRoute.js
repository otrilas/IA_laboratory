import express from "express";
import {
    getPisos,
    getPisoById,
    createPiso,
    updatePiso,
    deletePiso
} from "../controllers/PisoControllers.js";

const router = express.Router();

router.get('/pisos', getPisos);
router.get('/pisos/:id', getPisoById);
router.post('/pisos', createPiso);
router.patch('/pisos/:id', updatePiso);
router.delete('/pisos/:id', deletePiso);
 
export default router;