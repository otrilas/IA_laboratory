import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Horario = db.define('horarios',{
	id_dia : DataTypes.INTEGER,
	id_hora : DataTypes.INTEGER,
    id_ambiente : DataTypes.INTEGER,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});

export default Horario;


(async()=>{
    await db.sync();
})();
