import Gestion from "../models/GestionModel.js";

export const getGestiones = async(req, res) =>{
    try {
        const response = await Gestion.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getGestionById = async(req, res) =>{
    try {
        const response = await Gestion.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createGestion = async(req, res) =>{
    try {
        await Gestion.create(req.body);
        res.status(201).json({msg: "Gestion Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateGestion = async(req, res) =>{
    try {
        await Gestion.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Gestion Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteGestion = async(req, res) =>{
    try {
        await Gestion.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Gestion Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
