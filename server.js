import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path"; 
import { fileURLToPath } from "url";
import router from "./node/routes/router.js";
import swaggerUI from "swagger-ui-express";
import fs from "fs";

const swaggerDocumentation = JSON.parse(fs.readFileSync(path.resolve('./swagger-output.json'), 'utf-8'));

const app = express();

// Configurar CORS
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Ruta para documentación Swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));

// Rutas API
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de ComfaExpress");
});

// Configurar __dirname en ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Exportar `app` para pruebas
export default app;

// Iniciar servidor solo si no está en test
if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT || 5000, () =>
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 5000}`)
  );
}
