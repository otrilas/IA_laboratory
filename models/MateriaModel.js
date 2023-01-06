import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Carrera from "./CarreraModel.js";

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
Carrera.hasMany(Materia, {foreignKey: 'id_carrera'});
Materia.belongsTo(Carrera, {foreignKey: 'id_carrera'});

export default Materia;


(async()=>{
    await db.sync();
})();
