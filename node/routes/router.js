import express from "express";
import { registrarUsuario, obtenerUsuarios, loginUsuario } from "../controllers/usuarioController.js";
import Usuario from "../models/usuarioModel.js";


const router = express.Router();

// Ruta para registrar usuario
router.post("/register", async (req, res) => {
  try {
    console.log("Datos recibidos en /register:", req.body); // Verifica qué datos llegan
    const nuevoUsuario = await Usuario.create(req.body); // Ahora Usuario está definido
    res.status(201).json({ mensaje: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error("Error en /register:", error);
    res.status(500).json({ mensaje: "Error interno del servidor" });
  }
});

// Ruta para obtener usuarios
router.get("/users", obtenerUsuarios);

// Ruta para iniciar sesión
router.post("/login", loginUsuario);

export default router;
