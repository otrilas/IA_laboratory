import express from "express";
import {
    getAreas,
    getAreaById,
    createArea,
    updateArea,
    deleteArea
} from "../controllers/AreaControllers.js";

const router = express.Router();

router.get('/areas', getAreas);
router.get('/areas/:id', getAreaById);
router.post('/areas', createArea);
router.patch('/areas/:id', updateArea);
router.delete('/areas/:id', deleteArea);
 
export default router;