import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Programacion = db.define('programaciones',{
	id_estudiante : DataTypes.INTEGER,
	id_asignacion : DataTypes.INTEGER
},{
    timestamps:false,
    freezeTableName: true
});

export default Programacion;


(async()=>{
    await db.sync();
})();
