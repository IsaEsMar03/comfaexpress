import Usuario from "../models/usuarioModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";



// Registrar usuario
export const registrarUsuario = async (req, res) => {
  const { nombre, identificacion, telefono, correo, tipoUsuario, usuario, contraseña } = req.body;

  try {
    // Verificar si el usuario ya existe
    const usuarioExistente = await Usuario.findOne({ where: { usuario } });
    if (usuarioExistente) return res.status(400).json({ mensaje: "El usuario ya existe" });

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Crear usuario
    await Usuario.create({ nombre, identificacion, telefono, correo, tipoUsuario, usuario, contraseña: hashedPassword });

    res.status(201).json({ mensaje: "Usuario registrado exitosamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error en el servidor", error });
  }
};
export const obtenerUsuarios = (req, res) => {
    res.json({ message: "Lista de usuarios desde el servidor" });
};


// Iniciar sesión
export const loginUsuario = async (req, res) => {
  const { usuario, contraseña } = req.body;

  try {
    const usuarioEncontrado = await Usuario.findOne({ where: { usuario } });
    if (!usuarioEncontrado) return res.status(404).json({ mensaje: "Usuario no encontrado" });

    // Verificar contraseña
    const contraseñaValida = await bcrypt.compare(contraseña, usuarioEncontrado.contraseña);
    if (!contraseñaValida) return res.status(401).json({ mensaje: "Contraseña incorrecta" });

    // Crear token JWT
    const token = jwt.sign({ id: usuarioEncontrado.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ mensaje: "Login exitoso", token });
  } catch (error) {
    res.status(500).json({ mensaje: "Error en el servidor", error });
  }
};
