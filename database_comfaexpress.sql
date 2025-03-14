-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-03-2025 a las 03:04:04
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `database_comfaexpress`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `identificacion` int(12) NOT NULL,
  `telefono` int(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `tipoUsuario` int(11) NOT NULL,
  `Usuario` varchar(45) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `identificacion`, `telefono`, `correo`, `tipoUsuario`, `Usuario`, `contraseña`, `createdAt`, `updatedAt`) VALUES
(1, 'Juan Pérez', 12345678, 1234567890, 'juan@example.com', 1, 'juanperez', '123456', '2025-03-13 19:23:35', '2025-03-13 19:23:35'),
(3, 'camilo Benitiz', 988777777, 536374837, 'camilo@example.com', 1, 'camilin', '123', '2025-03-13 19:30:19', '2025-03-13 19:30:19'),
(5, 'isabel escobar', 86665437, 6666668, 'isabel@example.com', 1, 'isa', '123', '2025-03-13 19:42:57', '2025-03-13 19:42:57'),
(6, 'kenny Bermudez', 92836457, 6666668, 'kenny@example.com', 1, 'kenny', '12345', '2025-03-13 19:47:30', '2025-03-13 19:47:30'),
(8, 'valentina Paz', 87653, 58, 'valentina@example.com', 1, 'valen', '123456789', '2025-03-13 19:55:14', '2025-03-13 19:55:14');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `identificacion` (`identificacion`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
