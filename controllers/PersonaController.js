import Persona from "../models/PersonaModel.js";

 
export const getPersonas = async(req, res) =>{
    try {
        const response = await Persona.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getPersonaById = async(req, res) =>{
    try {
        const response = await Persona.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createPersona = async(req, res) =>{
    try {
        await Persona.create(req.body);
        res.status(201).json({msg: "Persona Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updatePersona = async(req, res) =>{
    try {
        await Persona.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Persona Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deletePersona = async(req, res) =>{
    try {
        await Persona.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Persona Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
