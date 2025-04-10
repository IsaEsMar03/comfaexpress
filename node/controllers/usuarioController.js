import Usuario from "../models/usuarioModel.js";

// Registrar usuario
export const registrarUsuario = async (req, res) => {
  const { nombre, identificacion, telefono, correo, tipoUsuario, usuario, contraseña } = req.body;

  try {
    console.log(" Recibiendo datos para registrar usuario:", req.body);

    // Verificar si el usuario ya existe
    const usuarioExistente = await Usuario.findOne({ where: { usuario } });
    if (usuarioExistente) {
      console.log(" El usuario ya existe");
      return res.status(400).json({ mensaje: "El usuario ya existe" });
    }

    // Crear usuario sin encriptar la contraseña
    const nuevoUsuario = await Usuario.create({
      nombre,
      identificacion,
      telefono,
      correo,
      tipoUsuario,
      usuario,
      contraseña, // Se guarda tal cual
    });

    console.log(" Usuario registrado con éxito:", nuevoUsuario.usuario);
    res.status(201).json({ mensaje: "Usuario registrado exitosamente" });
  } catch (error) {
    console.error(" Error al registrar usuario:", error);
    res.status(500).json({ mensaje: "Error en el servidor", error });
  }
};

// Iniciar sesión
export const loginUsuario = async (req, res) => {
  const { usuario, contraseña } = req.body;
  console.log(" Intentando iniciar sesión con usuario:", usuario);

  try {
    // Buscar usuario en la base de datos
    const usuarioEncontrado = await Usuario.findOne({ where: { usuario } });
    if (!usuarioEncontrado) {
      console.log("Usuario no encontrado");
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    console.log(" Usuario encontrado:", usuarioEncontrado.usuario);

    // Verificar contraseña directamente
    if (contraseña !== usuarioEncontrado.contraseña) {
      console.log(" Contraseña incorrecta");
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    }

    console.log(" Inicio de sesión exitoso");
    res.json({ mensaje: "Login exitoso", usuario: usuarioEncontrado.usuario });
  } catch (error) {
    console.error("Error en el login:", error);
    res.status(500).json({ mensaje: "Error en el servidor", error });
  }
};

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ mensaje: "Error al obtener los usuarios", error });
  }
};
