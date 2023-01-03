import express from "express";
import cors from "cors";
import nodemon from "nodemon";
import PersonaRoute from "./routes/PersonaRoute.js";
import GestionRoute from "./routes/GestionRoute.js";
import DiaRoute from "./routes/DiaRoute.js";
import AreaRoute from "./routes/AreaRoute.js";
import AmbienteRoute from "./routes/AmbienteRoute.js";
import AsignacionRoute from "./routes/AsignacionRoute.js";
import CarreraRoute from "./routes/CarreraRoute.js";
import CronogramaRoute from "./routes/CronogramaRoute.js";
import DocenteRoute from "./routes/DocenteRoute.js";
import EdificioRoute from "./routes/EdificioRoute.js";
import EstudianteRoute from "./routes/EstudianteRoute.js";
import FacultadRoute from "./routes/FacultadRoute.js";
import HorarioRoute from "./routes/HorarioRoute.js";
import HoraRoute from   "./routes/HoraRoute.js";
import MateriaRoute from "./routes/MateriaRoute.js";
import PisoRoute from "./routes/PisoRoute.js";
import PreRequisitoRoute from "./routes/PreRequisitoRoute.js";
import ProgramacionRoute from "./routes/ProgramacionRoute.js";
import TipoAmbienteRoute from "./routes/TipoAmbienteRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(PersonaRoute);
app.use(GestionRoute);
app.use(DiaRoute);
app.use(AreaRoute);
app.use(AmbienteRoute);
app.use(AsignacionRoute);
app.use(CarreraRoute);
app.use(CronogramaRoute);
app.use(DocenteRoute);
app.use(EdificioRoute);
app.use(EstudianteRoute);
app.use(FacultadRoute);
app.use(HorarioRoute);
app.use(HoraRoute);
app.use(MateriaRoute);
app.use(AreaRoute);
app.use(PisoRoute);
app.use(PreRequisitoRoute);
app.use(ProgramacionRoute);
app.use(TipoAmbienteRoute);

app.listen(5000, ()=>console.log('esta corriendo en el puerto 5000'))