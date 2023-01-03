import express from "express";
import {
    getPreRequisitos,
    getPreRequisitoById,
    createPreRequisito,
    updatePreRequisito,
    deletePreRequisito
} from "../controllers/PreRequisitoControllers.js";

const router = express.Router();

router.get('/prerequisitos', getPreRequisitos);
router.get('/prerequisitos/:id', getPreRequisitoById);
router.post('/prerequisitos', createPreRequisito);
router.patch('/prerequisitos/:id', updatePreRequisito);
router.delete('/prerequisitos/:id', deletePreRequisito);
 
export default router;