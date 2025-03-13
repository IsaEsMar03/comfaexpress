import express from "express";
import { registrarUsuario, loginUsuario, obtenerUsuarios } from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/register", registrarUsuario);
router.post("/login", loginUsuario);

// Nueva ruta para obtener usuarios
router.get("/usuarios", obtenerUsuarios);



export default router;
