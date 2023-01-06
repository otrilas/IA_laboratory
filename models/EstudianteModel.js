import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Persona from "./PersonaModel.js";

const {DataTypes} = Sequelize;

const Estudiante = db.define('estudiantes',{
	id_persona : DataTypes.INTEGER,
    cu : DataTypes.STRING,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});

Persona.hasMany(Estudiante, {foreignKey: 'id_persona'});
Estudiante.belongsTo(Persona, {foreignKey: 'id_persona'});

export default Estudiante;


(async()=>{
    await db.sync();
})();
