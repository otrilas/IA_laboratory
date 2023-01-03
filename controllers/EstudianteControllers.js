import Estudiante from "../models/EstudianteModel.js";

export const getEstudiantes = async(req, res) =>{
    try {
        const response = await Estudiante.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getEstudianteById = async(req, res) =>{
    try {
        const response = await Estudiante.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createEstudiante = async(req, res) =>{
    try {
        await Estudiante.create(req.body);
        res.status(201).json({msg: "Estudiante Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateEstudiante = async(req, res) =>{
    try {
        await Estudiante.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Estudiante Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteEstudiante = async(req, res) =>{
    try {
        await Estudiante.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Estudiante Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
