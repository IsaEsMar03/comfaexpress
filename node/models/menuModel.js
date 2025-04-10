// node/models/menuModel.js
import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

const Menu = sequelize.define(
  "Menu",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    fecha: { type: DataTypes.DATEONLY, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "menus", // usa el nombre de tu tabla real si es diferente
    timestamps: false,
  }
);

export default Menu;
