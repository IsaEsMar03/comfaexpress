import express, { Router } from 'express';

import {
  registrarUsuario,
  obtenerUsuarios,
  loginUsuario
} from '../controllers/usuarioController.js';

import {
  registrarMenu,
  obtenerMenus
} from '../controllers/menuController.js';

import {
  registrarCliente
} from '../controllers/clienteController.js';

import {
  registrarPedido
} from '../controllers/pedidoController.js';

import {
  registrarTurno,
  obtenerTurnos
} from '../controllers/turnoController.js'; // ✅ Importación del controlador de turnos

const router = Router();

// Rutas para usuarios
router.post("/register", registrarUsuario);
router.post("/login", loginUsuario);
router.get("/users", obtenerUsuarios);

// Rutas para menú del día
router.post("/menus", registrarMenu);
router.get("/menus", obtenerMenus);

// Ruta para registrar cliente
router.post("/clientes", registrarCliente);

// Ruta para registrar pedido (incluye usuario_id)
router.post("/pedidos", registrarPedido);

// ✅ Rutas para turnos
router.post("/turnos", registrarTurno);             // Registrar turno
router.get("/turnos", obtenerTurnos);               // Obtener todos los turnos

export default router;

