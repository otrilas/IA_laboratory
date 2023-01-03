import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Gestion = db.define('gestiones',{
	numero : DataTypes.INTEGER,
	nombre : DataTypes.STRING,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});

export default Gestion;


(async()=>{
    await db.sync();
})();
