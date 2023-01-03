import Cronograma from "../models/CronogramaModel.js";

export const getCronogramas = async(req, res) =>{
    try {
        const response = await Cronograma.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getCronogramaById = async(req, res) =>{
    try {
        const response = await Cronograma.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createCronograma = async(req, res) =>{
    try {
        await Cronograma.create(req.body);
        res.status(201).json({msg: "Cronograma Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateCronograma = async(req, res) =>{
    try {
        await Cronograma.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Cronograma Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteCronograma = async(req, res) =>{
    try {
        await Cronograma.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Cronograma Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
