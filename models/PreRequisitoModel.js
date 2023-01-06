import { Sequelize } from "sequelize";
import db from "../config/database.js";
import MateriaAntigua from "./MateriaModel.js";
import MateriaPresente from "./MateriaModel.js";

const {DataTypes} = Sequelize;

const PreRequisito = db.define('pre_requisitos',{
	id_materia_antiguas : DataTypes.INTEGER,
	id_materia_presente : DataTypes.INTEGER,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});
MateriaAntigua.hasMany(PreRequisito, {foreignKey: 'id_materia_antiguas'});
PreRequisito.belongsTo(MateriaAntigua, {foreignKey: 'id_materia_antiguas'});
MateriaPresente.hasMany(PreRequisito, {foreignKey: 'id_materia_presente'});
PreRequisito.belongsTo(MateriaPresente, {foreignKey: 'id_materia_presente'});

export default PreRequisito;


(async()=>{
    await db.sync();
})();
