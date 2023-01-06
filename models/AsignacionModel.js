import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Docente from "./DocenteModel.js";
import Materia from "./MateriaModel.js";
import Gestion from "./GestionModel.js";
import Horario from "./HorarioModel.js";

const {DataTypes} = Sequelize;

const Asignacion = db.define('asignaciones',{
	id_docente : DataTypes.INTEGER,
	id_materia : DataTypes.INTEGER,
    id_gestion : DataTypes.INTEGER,
    id_horario : DataTypes.INTEGER,
    grupo : DataTypes.INTEGER,
    max_estudiantes : DataTypes.INTEGER,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});

Docente.hasMany(Asignacion, {foreignKey: 'id_docente'});
Asignacion.belongsTo(Docente, {foreignKey: 'id_docente'});
Materia.hasMany(Asignacion, {foreignKey: 'id_materia'});
Asignacion.belongsTo(Materia, {foreignKey: 'id_materia'});
Gestion.hasMany(Asignacion, {foreignKey: 'id_gestion'});
Asignacion.belongsTo(Gestion, {foreignKey: 'id_gestion'});
Horario.hasMany(Asignacion, {foreignKey: 'id_horario'});
Asignacion.belongsTo(Horario, {foreignKey: 'id_horario'});

export default Asignacion;



(async()=>{
    await db.sync();
})();
