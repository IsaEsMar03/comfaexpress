import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import router from "./node/routes/router.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// Configurar CORS
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Rutas API
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Bienvenido a la API de ComfaExpress");
});

// Configurar __dirname en ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir React correctamente
const frontendPath = path.join(__dirname, "../frontend/build");
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Exportar `app` para pruebas
export default app;

// Iniciar servidor solo si no está en test
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
}
