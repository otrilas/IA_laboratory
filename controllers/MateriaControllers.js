import Materia from "../models/MateriaModel.js";

 
export const getMaterias = async(req, res) =>{
    try {
        const response = await Materia.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getMateriaById = async(req, res) =>{
    try {
        const response = await Materia.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createMateria = async(req, res) =>{
    try {
        await Materia.create(req.body);
        res.status(201).json({msg: "Materia Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateMateria = async(req, res) =>{
    try {
        await Materia.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Materia Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteMateria = async(req, res) =>{
    try {
        await Materia.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Materia Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
