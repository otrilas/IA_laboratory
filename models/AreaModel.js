import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Area = db.define('areas',{
	nombre : DataTypes.STRING,
	descripcion : DataTypes.STRING,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});

export default Area;


(async()=>{
    await db.sync();
})();
