import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const TipoAmbiente = db.define('tipos_ambientes',{
	nombre : DataTypes.STRING,
    descripcion : DataTypes.STRING,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});

export default TipoAmbiente;


(async()=>{
    await db.sync();
})();
