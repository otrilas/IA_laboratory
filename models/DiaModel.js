import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Dia = db.define('dias',{
	codigo : DataTypes.STRING,
	nombre : DataTypes.STRING,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});

export default Dia;


(async()=>{
    await db.sync();
})();
