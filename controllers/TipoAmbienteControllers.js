import TipoAmbiente from "../models/TipoAmbienteModel.js";

 
export const getTipoAmbientes = async(req, res) =>{
    try {
        const response = await TipoAmbiente.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getTipoAmbienteById = async(req, res) =>{
    try {
        const response = await TipoAmbiente.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createTipoAmbiente = async(req, res) =>{
    try {
        await TipoAmbiente.create(req.body);
        res.status(201).json({msg: "TipoAmbiente Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateTipoAmbiente = async(req, res) =>{
    try {
        await TipoAmbiente.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "TipoAmbiente Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteTipoAmbiente = async(req, res) =>{
    try {
        await TipoAmbiente.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "TipoAmbiente Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
