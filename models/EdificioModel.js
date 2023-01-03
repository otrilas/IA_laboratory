import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Facultad from "./FacultadModel.js";

const {DataTypes} = Sequelize;

const Edificio = db.define('edificios',{
	id_facultad : DataTypes.INTEGER,
	nombre : DataTypes.STRING,
    descripcion : DataTypes.STRING,
    latitud : DataTypes.STRING,
    longitud : DataTypes.STRING,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});
Facultad.hasMany(Edificio, {foreignKey: 'id_facultad'});
Edificio.belongsTo(Facultad, {foreignKey:'id_facultad'});

export default Edificio;

/*
(async()=>{
    await db.sync();
})();*/
