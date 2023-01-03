import Facultad from "../models/FacultadModel.js";

export const getFacultades = async(req, res) =>{
    try {
        const response = await Facultad.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getFacultadById = async(req, res) =>{
    try {
        const response = await Facultad.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createFacultad = async(req, res) =>{
    try {
        await Facultad.create(req.body);
        res.status(201).json({msg: "Facultad Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateFacultad = async(req, res) =>{
    try {
        await Facultad.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Facultad Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteFacultad = async(req, res) =>{
    try {
        await Facultad.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Facultad Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
