import PreRequisito from "../models/PreRequisitoModel.js";

 
export const getPreRequisitos = async(req, res) =>{
    try {
        const response = await PreRequisito.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getPreRequisitoById = async(req, res) =>{
    try {
        const response = await PreRequisito.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createPreRequisito = async(req, res) =>{
    try {
        await PreRequisito.create(req.body);
        res.status(201).json({msg: "PreRequisito Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updatePreRequisito = async(req, res) =>{
    try {
        await PreRequisito.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "PreRequisito Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deletePreRequisito = async(req, res) =>{
    try {
        await PreRequisito.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "PreRequisito Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
