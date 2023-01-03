import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Persona = db.define('personas',{
    ci : DataTypes.STRING,
	apellido_paterno : DataTypes.STRING,
	apellido_materno : DataTypes.STRING,
	nombre : DataTypes.STRING,
	fecha_nacimiento : DataTypes.DATE,
	fotografia : DataTypes.STRING,
	celular : DataTypes.STRING,
	email : DataTypes.STRING,
	usuario : DataTypes.STRING,
	clave : DataTypes.STRING,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});

export default Persona;


(async()=>{
    await db.sync();
})();
