import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Persona from "./PersonaModel.js";

const {DataTypes} = Sequelize;

const Docente = db.define('docentes',{
	id_persona : DataTypes.INTEGER,
	titulo : DataTypes.STRING,
    curiculo : DataTypes.STRING,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});
Persona.hasMany(Docente, {foreignKey: 'id_persona'});
Docente.belongsTo(Persona, {foreignKey: 'id_persona'});

export default Docente;


(async()=>{
    await db.sync();
})();
