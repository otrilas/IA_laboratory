import express from "express";
import {
    getCarreras,
    getCarreraById,
    createCarrera,
    updateCarrera,
    deleteCarrera
} from "../controllers/CarreraControllers.js";

const router = express.Router();

router.get('/carreras', getCarreras);
router.get('/carreras/:id', getCarreraById);
router.post('/carreras', createCarrera);
router.patch('/carreras/:id', updateCarrera);
router.delete('/carreras/:id', deleteCarrera);
 
export default router;