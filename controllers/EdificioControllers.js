import Edificio from "../models/EdificioModel.js";

export const getEdificios = async(req, res) =>{
    try {
        const response = await Edificio.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getEdificioById = async(req, res) =>{
    try {
        const response = await Edificio.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createEdificio = async(req, res) =>{
    try {
        await Edificio.create(req.body);
        res.status(201).json({msg: "Edificio Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateEdificio = async(req, res) =>{
    try {
        await Edificio.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Edificio Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteEdificio = async(req, res) =>{
    try {
        await Edificio.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Edificio Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
