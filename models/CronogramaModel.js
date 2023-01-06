import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Programacion from "./ProgramacionModel.js";

const {DataTypes} = Sequelize;

const Cronograma = db.define('cronogramas',{
	id_programaciones : DataTypes.INTEGER,
	primer_parcial : DataTypes.DATE,
    segundo_parcial : DataTypes.DATE,
    examen_final : DataTypes.DATE,
},{
    timestamps:false,
    freezeTableName: true
});
Programacion.hasMany(Cronograma, {foreignKey: 'id_programaciones'});
Cronograma.belongsTo(Programacion, {foreignKey: 'id_programaciones'});

export default Cronograma;


(async()=>{
    await db.sync();
})();
