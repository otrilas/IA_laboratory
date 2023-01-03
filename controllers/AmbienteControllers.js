import Ambiente from "../models/AmbienteModel.js";

export const getAmbientes = async(req, res) =>{
    try {
        const response = await Ambiente.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getAmbienteById = async(req, res) =>{
    try {
        const response = await Ambiente.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createAmbiente = async(req, res) =>{
    try {
        await Ambiente.create(req.body);
        res.status(201).json({msg: "Ambiente Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateAmbiente = async(req, res) =>{
    try {
        await Ambiente.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Ambiente Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteAmbiente = async(req, res) =>{
    try {
        await Ambiente.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Ambiente Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
