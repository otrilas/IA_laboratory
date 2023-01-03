import Area from "../models/AreaModel.js";

export const getAreas = async(req, res) =>{
    try {
        const response = await Area.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const getAreaById = async(req, res) =>{
    try {
        const response = await Area.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const createArea = async(req, res) =>{
    try {
        await Area.create(req.body);
        res.status(201).json({msg: "Area Created"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateArea = async(req, res) =>{
    try {
        await Area.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Area Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteArea = async(req, res) =>{
    try {
        await Area.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Area Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
