import express from "express";
import {
    getGestiones,
    getGestionById,
    createGestion,
    updateGestion,
    deleteGestion
} from "../controllers/GestionControllers.js";

const router = express.Router();

router.get('/gestiones', getGestiones);
router.get('/gestiones/:id', getGestionById);
router.post('/gestiones', createGestion);
router.patch('/gestiones/:id', updateGestion);
router.delete('/gestiones/:id', deleteGestion);
 
export default router;