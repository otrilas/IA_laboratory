import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Facultad from "./FacultadModel.js";

const {DataTypes} = Sequelize;

const Carrera = db.define('carreras',{
	id_facultad : DataTypes.INTEGER,
	nombre : DataTypes.STRING,
    nombre_abreviado : DataTypes.STRING,
    fecha_creacion : DataTypes.DATE,
    descripcion : DataTypes.STRING,
    direccion : DataTypes.STRING,
    telefono : DataTypes.STRING,
    logo : DataTypes.STRING,
    email : DataTypes.STRING,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});
Facultad.hasMany(Carrera, {foreignKey: 'id_facultad'});
Carrera.belongsTo(Facultad, {foreignKey: 'id_facultad'});

export default Carrera;


(async()=>{
    await db.sync();
})();
