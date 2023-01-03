import Dia from "../models/DiaModel.js";

export const getDias = async(req, res) =>{
    try {
        const response = await Dia.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getDiaById = async(req, res) =>{
    try {
        const response = await Dia.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createDia = async(req, res) =>{
    try {
        await Dia.create(req.body);
        res.status(201).json({msg: "Dia Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateDia = async(req, res) =>{
    try {
        await Dia.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Dia Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteDia = async(req, res) =>{
    try {
        await Dia.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Dia Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
