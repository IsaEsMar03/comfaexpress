import { Sequelize } from "sequelize";

const sequelize = new Sequelize("database_comfaexpress", "root", "123", {
  host: "localhost",
  dialect: "mysql",
});

// Verificar conexión
const testDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a MySQL exitosa con Sequelize");
  } catch (error) {
    console.error("❌ Error en la conexión a MySQL:", error);
  }
};

testDB();

export default sequelize;
