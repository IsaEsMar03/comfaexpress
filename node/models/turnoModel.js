// models/turnoModel.js
import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Turno = db.define("turnos", {
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false
  },
  creado_en: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false
});

export default Turno;
