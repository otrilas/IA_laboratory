import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const PreRequisito = db.define('pre_requisitos',{
	id_materia_antiguas : DataTypes.INTEGER,
	id_materia_presente : DataTypes.INTEGER,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});

export default PreRequisito;


(async()=>{
    await db.sync();
})();
