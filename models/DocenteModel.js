import { Sequelize } from "sequelize";
import db from "../config/database.js";

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

export default Docente;


(async()=>{
    await db.sync();
})();
