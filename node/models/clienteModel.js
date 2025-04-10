// models/clienteModel.js
import { DataTypes } from "sequelize";
import db from "../database/db.js";
import Turno from "./Turno.js"; // Importamos el modelo Turno

const Cliente = db.define("clientes", {
  nombre: { type: DataTypes.STRING, allowNull: false },
  apellido: { type: DataTypes.STRING, allowNull: false },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  tipo_cliente: { type: DataTypes.STRING, allowNull: false },

  turno_id: {  // 👈 Nuevo campo para la relación
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "turnos",
      key: "id"
    }
  }

}, {
  timestamps: true,
  createdAt: "created_at",
  updatedAt: false
});

// Relación: un Cliente pertenece a un Turno
Cliente.belongsTo(Turno, { foreignKey: "turno_id", as: "turno" });

export default Cliente;
