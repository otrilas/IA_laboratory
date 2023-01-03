import Horario from "../models/HorarioModel.js";

 
export const getHorarios = async(req, res) =>{
    try {
        const response = await Horario.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getHorarioById = async(req, res) =>{
    try {
        const response = await Horario.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createHorario = async(req, res) =>{
    try {
        await Horario.create(req.body);
        res.status(201).json({msg: "Horario Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateHorario = async(req, res) =>{
    try {
        await Horario.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Horario Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteHorario = async(req, res) =>{
    try {
        await Horario.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Horario Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
