import { HasOne, Sequelize } from "sequelize";
import db from "../config/database.js";
import Dia from "./DiaModel.js";
import Hora from "./HoraModel.js";
import Ambiente from "./AmbienteModel.js";

const {DataTypes} = Sequelize;

const Horario = db.define('horarios',{
	id_dia : DataTypes.INTEGER,
	id_hora : DataTypes.INTEGER,
    id_ambiente : DataTypes.INTEGER,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});
Dia.hasMany(Horario, {foreignKey: 'id_dia'});
Horario.belongsTo(Dia, {foreignKey: 'id_dia'});
Hora.hasMany(Horario, {foreignKey: 'id_hora'});
Horario.belongsTo(Hora, {foreignKey: 'id_hora'});
Ambiente.hasMany(Horario, {foreignKey: 'id_ambiente'});
Horario.belongsTo(Ambiente, {foreignKey: 'id_ambiente'});

export default Horario;


(async()=>{
    await db.sync();
})();
