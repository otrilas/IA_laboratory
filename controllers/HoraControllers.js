import Hora from "../models/HoraModel.js";

 
export const getHoras = async(req, res) =>{
    try {
        const response = await Hora.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getHoraById = async(req, res) =>{
    try {
        const response = await Hora.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createHora = async(req, res) =>{
    try {
        await Hora.create(req.body);
        res.status(201).json({msg: "Hora Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateHora = async(req, res) =>{
    try {
        await Hora.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Hora Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteHora = async(req, res) =>{
    try {
        await Hora.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Hora Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
