import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Piso from "./PisoModel.js";
import TipoAmbiente from "./TipoAmbienteModel.js"

const {DataTypes} = Sequelize;

const Ambiente = db.define('ambientes',{
    id_piso : DataTypes.INTEGER,
    id_tipo_ambiente : DataTypes.INTEGER,
	nombre : DataTypes.STRING,
    descripcion : DataTypes.STRING,
	estado : DataTypes.STRING,
},{
    timestamps:false,
    freezeTableName: true
});
Piso.hasMany(Ambiente, {foreignKey: 'id_piso'});
Ambiente.belongsTo(Piso, {foreignKey: 'id_piso'});
TipoAmbiente.hasMany(Ambiente, {foreignKey: 'id_tipo_ambiente'});
Ambiente.belongsTo(TipoAmbiente, {foreignKey: 'id_tipo_ambiente'});

export default Ambiente;


(async()=>{
    await db.sync();
})();
