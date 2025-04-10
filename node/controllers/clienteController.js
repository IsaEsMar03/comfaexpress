export const registrarCliente = async (req, res) => {
  try {
    const { nombre, identificacion, telefono, correo, turno_id } = req.body;

    // Validación básica opcional (puedes mejorarla más si quieres)
    if (!nombre || !identificacion || !telefono || !correo || !turno_id) {
      return res.status(400).json({ mensaje: "Faltan datos requeridos" });
    }

    // Crear cliente
    const cliente = await Cliente.create({
      nombre,
      identificacion,
      telefono,
      correo,
      turno_id
    });

    res.status(201).json({
      mensaje: "Cliente registrado correctamente",
      cliente
    });
  } catch (error) {
    // Mostrar error detallado en consola
    console.error(" ERROR AL REGISTRAR CLIENTE:", error);

    res.status(500).json({
      mensaje: "Error al registrar cliente",
      error: error.message || error
    });
  }
};

