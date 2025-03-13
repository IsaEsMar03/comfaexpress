// Importar la conexión de la base de datos
import db from "../database/db.js";
import { DataTypes } from "sequelize";

// Definir el modelo de usuario
const Usuario = db.define("usuarios", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  identificacion: { type: DataTypes.INTEGER, allowNull: false, unique: true },
  telefono: { type: DataTypes.STRING, allowNull: true },
  correo: { type: DataTypes.STRING, allowNull: false, unique: true },
  tipoUsuario: { type: DataTypes.INTEGER, allowNull: false },
  usuario: { type: DataTypes.STRING, allowNull: false, unique: true },
  contraseña: { type: DataTypes.STRING, allowNull: false },
});

// Exportar el modelo
export default Usuario;
