import { Sequelize } from "sequelize";
import db from "../config/database.js";

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

export default Asignacion;



(async()=>{
    await db.sync();
})();
