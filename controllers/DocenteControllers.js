import Docente from "../models/DocenteModel.js";

export const getDocentes = async(req, res) =>{
    try {
        const response = await Docente.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getDocenteById = async(req, res) =>{
    try {
        const response = await Docente.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createDocente = async(req, res) =>{
    try {
        await Docente.create(req.body);
        res.status(201).json({msg: "Docente Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateDocente = async(req, res) =>{
    try {
        await Docente.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Docente Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteDocente = async(req, res) =>{
    try {
        await Docente.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Docente Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
