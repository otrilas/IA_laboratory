import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Materia = db.define('materias',{
	id_carrera : DataTypes.INTEGER,
	nombre : DataTypes.STRING,
    nombre_abreviado : DataTypes.STRING,
    sigla : DataTypes.STRING,
    creditos : DataTypes.INTEGER,
    horas_teoricas : DataTypes.INTEGER,
    horas_practicas : DataTypes.INTEGER,
    horas_laboratorios : DataTypes.INTEGER,
    nivel : DataTypes.STRING,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});

export default Materia;


(async()=>{
    await db.sync();
})();
