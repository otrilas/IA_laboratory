import Programacion from "../models/ProgramacionModel.js";

 
export const getProgramaciones = async(req, res) =>{
    try {
        const response = await Programacion.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getProgramacionById = async(req, res) =>{
    try {
        const response = await Programacion.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createProgramacion = async(req, res) =>{
    try {
        await Programacion.create(req.body);
        res.status(201).json({msg: "Programacion Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateProgramacion = async(req, res) =>{
    try {
        await Programacion.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Programacion Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteProgramacion = async(req, res) =>{
    try {
        await Programacion.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Programacion Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
