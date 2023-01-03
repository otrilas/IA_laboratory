import { Sequelize } from "sequelize";
import db from "../config/database.js";

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

export default Cronograma;


(async()=>{
    await db.sync();
})();
