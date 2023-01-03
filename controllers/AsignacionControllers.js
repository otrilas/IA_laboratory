import Asignacion from "../models/AsignacionModel.js";

export const getAsignaciones = async(req, res) =>{
    try {
        const response = await Asignacion.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getAsignacionById = async(req, res) =>{
    try {
        const response = await Asignacion.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createAsignacion = async(req, res) =>{
    try {
        await Asignacion.create(req.body);
        res.status(201).json({msg: "Asignacion Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateAsignacion = async(req, res) =>{
    try {
        await Asignacion.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Asignacion Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteAsignacion = async(req, res) =>{
    try {
        await Asignacion.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Asignacion Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
