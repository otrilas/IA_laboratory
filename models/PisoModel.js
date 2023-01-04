import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Edificio from "./EdificioModel.js";

const {DataTypes} = Sequelize;

const Piso = db.define('pisos',{
	id_edificio : DataTypes.INTEGER,
	nombre : DataTypes.STRING,
    descripcion : DataTypes.STRING,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});
Edificio.hasMany(Piso, {foreignKey: 'id_edificio'});
Piso.belongsTo(Edificio, {foreignKey: 'id_edificio'});

export default Piso;


(async()=>{
    await db.sync();
})();
