// controllers/turnoController.js
import Turno from '../models/turnoModel.js';

export const registrarTurno = async (req, res) => {
  try {
    const { fecha, hora } = req.body;
    const turno = await Turno.create({ fecha, hora });
    res.status(201).json({ mensaje: "Turno registrado exitosamente", turno });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al registrar turno", error });
  }
};

export const obtenerTurnos = async (req, res) => {
  try {
    const turnos = await Turno.findAll({ order: [['creado_en', 'DESC']] });
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener turnos", error });
  }
};
