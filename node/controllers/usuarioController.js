import Usuario from "../models/usuarioModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

// Registrar usuario
export const registrarUsuario = async (req, res) => {
  const { nombre, identificacion, telefono, correo, tipoUsuario, usuario, contraseña } = req.body;

  try {
    console.log("📌 Recibiendo datos para registrar usuario:", req.body);

    // Verificar si el usuario ya existe
    const usuarioExistente = await Usuario.findOne({ where: { usuario } });
    if (usuarioExistente) {
      console.log("❌ El usuario ya existe");
      return res.status(400).json({ mensaje: "El usuario ya existe" });
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    console.log("🔒 Contraseña encriptada:", hashedPassword);

    // Crear usuario
    const nuevoUsuario = await Usuario.create({
      nombre,
      identificacion,
      telefono,
      correo,
      tipoUsuario,
      usuario,
      contraseña: hashedPassword,
    });

    console.log("✅ Usuario registrado con éxito:", nuevoUsuario.usuario);
    res.status(201).json({ mensaje: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error("❌ Error al registrar usuario:", error);
    res.status(500).json({ mensaje: "Error en el servidor", error });
  }
};

// Obtener usuarios (para pruebas)
export const obtenerUsuarios = (req, res) => {
  res.json({ message: "Lista de usuarios desde el servidor" });
};

// Iniciar sesión
export const loginUsuario = async (req, res) => {
  const { usuario, contraseña } = req.body;
  console.log("🔍 Intentando iniciar sesión con usuario:", usuario);

  try {
    // Buscar usuario en la base de datos
    const usuarioEncontrado = await Usuario.findOne({ where: { usuario } });
    if (!usuarioEncontrado) {
      console.log("❌ Usuario no encontrado");
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    console.log("✅ Usuario encontrado en la BD:", usuarioEncontrado.usuario);

    // Verificar contraseña
    const contraseñaValida = await bcrypt.compare(contraseña, usuarioEncontrado.contraseña);
    if (!contraseñaValida) {
      console.log("❌ Contraseña incorrecta");
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }

    // Crear token JWT
    if (!process.env.JWT_SECRET) {
      console.error("❌ ERROR: JWT_SECRET no está definido en el .env");
      return res.status(500).json({ mensaje: "Error interno del servidor" });
    }

    const token = jwt.sign({ id: usuarioEncontrado.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("✅ Login exitoso. Token generado.");
    res.json({ mensaje: "Login exitoso", token });
  } catch (error) {
    console.error("❌ Error en el login:", error);
    res.status(500).json({ mensaje: "Error en el servidor", error });
  }
};
