import Piso from "../models/PisoModel.js";

 
export const getPisos = async(req, res) =>{
    try {
        const response = await Piso.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getPisoById = async(req, res) =>{
    try {
        const response = await Piso.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createPiso = async(req, res) =>{
    try {
        await Piso.create(req.body);
        res.status(201).json({msg: "Piso Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updatePiso = async(req, res) =>{
    try {
        await Piso.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Piso Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deletePiso = async(req, res) =>{
    try {
        await Piso.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Piso Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
