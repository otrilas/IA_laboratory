import Carrera from "../models/CarreraModel.js";

export const getCarreras = async(req, res) =>{
    try {
        const response = await Carrera.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getCarreraById = async(req, res) =>{
    try {
        const response = await Carrera.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createCarrera = async(req, res) =>{
    try {
        await Carrera.create(req.body);
        res.status(201).json({msg: "Carrera Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateCarrera = async(req, res) =>{
    try {
        await Carrera.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Carrera Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteCarrera = async(req, res) =>{
    try {
        await Carrera.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Carrera Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
