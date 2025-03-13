import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";  // Asegúrate de que la conexión está bien importada

const Usuario = sequelize.define(
  "Usuario",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    identificacion: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    telefono: { type: DataTypes.STRING, allowNull: false },
    correo: { type: DataTypes.STRING, allowNull: false, unique: true },
    tipoUsuario: { type: DataTypes.INTEGER, allowNull: false },
    usuario: { type: DataTypes.STRING, allowNull: false, unique: true },
    contraseña: { type: DataTypes.STRING, allowNull: false },
  },
  { timestamps: false } // Si no necesitas createdAt y updatedAt
);

export default Usuario;
