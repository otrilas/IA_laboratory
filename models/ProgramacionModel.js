import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Estudiante from "./EstudianteModel.js";
import Asignacion from "./AsignacionModel.js";

const {DataTypes} = Sequelize;

const Programacion = db.define('programaciones',{
	id_estudiante : DataTypes.INTEGER,
	id_asignacion : DataTypes.INTEGER
},{
    timestamps:false,
    freezeTableName: true
});
Estudiante.hasMany(Programacion, {foreignKey: 'id_estudiante'});
Programacion.belongsTo(Estudiante, {foreignKey: 'id_estudiante'});
Asignacion.hasMany(Programacion, {foreignKey: 'id_asignacion'});
Programacion.belongsTo(Asignacion, {foreignKey: 'id_asignacion'});

export default Programacion;


(async()=>{
    await db.sync();
})();
