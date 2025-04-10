// node/controllers/menuController.js
import Menu from "../models/menuModel.js";

export const registrarMenu = async (req, res) => {
  const { descripcion, fecha } = req.body;

  try {
    const nuevoMenu = await Menu.create({ descripcion, fecha });
    res.status(201).json({ mensaje: "Menú registrado exitosamente", menu: nuevoMenu });
  } catch (error)    {
    console.error("Error al registrar el menú:", error);
    res.status(500).json({ mensaje: "Error en el servidor", error });
  }
};

export const obtenerMenus = async (req, res) => {
  try {
    const menus = await Menu.findAll({ order: [["created_at", "DESC"]] });
    res.json(menus);
  } catch (error) {
    console.error("Error al obtener los menús:", error);
    res.status(500).json({ mensaje: "Error en el servidor", error });
  }
};
