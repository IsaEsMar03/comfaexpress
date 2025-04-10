import { DataTypes } from "sequelize";
import db from "../database/db.js";
import Cliente from "./clienteModel.js";
import Turno from "./turnoModel.js";

const Pedido = db.define("pedidos", {
  cliente_id: { type: DataTypes.INTEGER, allowNull: false },
  menu_id: { type: DataTypes.INTEGER, allowNull: false },
  turno_id: { type: DataTypes.INTEGER, allowNull: false }, // 👈 Relación con Turno
  observaciones: { type: DataTypes.TEXT, allowNull: true }
}, {
  timestamps: true,
  createdAt: "created_at",
  updatedAt: false
});

// Relaciones
Pedido.belongsTo(Cliente, { foreignKey: "cliente_id" });
Pedido.belongsTo(Turno, { foreignKey: "turno_id" });

export default Pedido;
