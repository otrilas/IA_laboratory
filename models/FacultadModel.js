import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Area from "./AreaModel.js";

const {DataTypes} = Sequelize;

const Facultad = db.define('facultades',{
    id_area : DataTypes.INTEGER,
	nombre : DataTypes.STRING,
	nombre_abreviado : DataTypes.STRING,
    fecha_creacion : DataTypes.DATE,
    descripcion : DataTypes.STRING,
    direccion : DataTypes.STRING,
    telefono : DataTypes.STRING,
    email : DataTypes.STRING,
    logo : DataTypes.STRING,
    escudo : DataTypes.STRING,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});

Area.hasMany(Facultad, {foreignKey: 'id_area'});
Facultad.belongsTo(Area, {foreignKey: 'id_area'})

export default Facultad;


(async()=>{
    await db.sync();
})();
