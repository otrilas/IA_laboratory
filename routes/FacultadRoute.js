import express from "express";
import {
    getFacultades,
    getFacultadById,
    createFacultad,
    updateFacultad,
    deleteFacultad
} from "../controllers/FacultadControllers.js";

const router = express.Router();

router.get('/facultades', getFacultades);
router.get('/facultades/:id', getFacultadById);
router.post('/facultades', createFacultad);
router.patch('/facultades/:id', updateFacultad);
router.delete('/facultades/:id', deleteFacultad);
 
export default router;