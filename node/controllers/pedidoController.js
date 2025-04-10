export const registrarPedido = async (req, res) => {
  try {
    const { cliente_id, menu_id, turno_id, observaciones } = req.body;

    if (!cliente_id || !menu_id || !turno_id) {
      return res.status(400).json({ mensaje: "Faltan campos obligatorios" });
    }

    const nuevoPedido = await Pedido.create({
      cliente_id,
      menu_id,
      turno_id,
      observaciones
    });

    res.status(201).json({
      mensaje: "Pedido registrado correctamente",
      pedido: nuevoPedido
    });
  } catch (error) {
    console.error("Error al registrar pedido:", error);
    res.status(500).json({ mensaje: "Error del servidor" });
  }
};
