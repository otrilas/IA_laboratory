import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Hora = db.define('horas',{
	hora_inicio : DataTypes.TIME,
	hora_fin : DataTypes.TIME,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});

export default Hora;


(async()=>{
    await db.sync();
})();
