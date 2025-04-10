-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-04-2025 a las 19:22:28
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `comfaexpress`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `tipo_cliente` varchar(20) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `turno_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `apellido`, `telefono`, `tipo_cliente`, `createdAt`, `updatedAt`, `created_at`, `turno_id`) VALUES
(7, 'Camilo', 'Rodríguez', '809386222', 'regular', '2025-04-09 07:06:45', '2025-04-09 07:06:45', '2025-04-09 12:10:50', NULL),
(8, 'Laura', 'Martínez', '777888999', 'regular', '2025-04-09 07:06:45', '2025-04-09 07:06:45', '2025-04-09 12:10:50', NULL),
(10, 'Camilo', 'Rodríguez', '286360445', 'regular', '2025-04-09 07:07:11', '2025-04-09 07:07:11', '2025-04-09 12:10:50', NULL),
(12, 'Juan', 'Pérez', '1234567890', 'regular', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2025-04-09 17:11:18', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `menus`
--

INSERT INTO `menus` (`id`, `descripcion`, `fecha`, `created_at`) VALUES
(1, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 16:26:50'),
(2, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 16:39:39'),
(3, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 16:49:46'),
(4, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 17:21:45'),
(5, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 17:22:54'),
(6, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 18:33:07'),
(7, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 18:33:33'),
(8, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 18:36:38'),
(9, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 18:38:26'),
(10, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 18:38:59'),
(11, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 18:41:50'),
(12, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 19:00:57'),
(13, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 19:01:13'),
(14, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 19:53:08'),
(15, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 20:05:56'),
(16, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 20:16:21'),
(17, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 20:22:49'),
(18, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 20:23:10'),
(19, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 20:26:32'),
(20, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-09 20:29:17'),
(21, 'Fríjoles con arroz y plátano', '2025-04-09', '2025-04-10 16:37:51');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `recomendacion` varchar(255) DEFAULT NULL,
  `cliente_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `turno_id` int(11) DEFAULT NULL,
  `usuario_id` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`id`, `fecha`, `hora`, `creado_en`) VALUES
(1, '2025-04-10', '08:00:00', '2025-04-09 20:22:11');

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
(8, 'valentina Paz', 87653, 58, 'valentina@example.com', 1, 'valen', '123456789', '2025-03-13 19:55:14', '2025-03-13 19:55:14'),
(62, 'santiago vivas', 8799653, 7658, 'santi@example.com', 1, 'santi', '1111', '2025-04-10 16:37:51', '2025-04-10 16:37:51');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `telefono` (`telefono`),
  ADD KEY `fk_cliente_turno` (`turno_id`);

--
-- Indices de la tabla `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cliente_id` (`cliente_id`),
  ADD KEY `menu_id` (`menu_id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `fk_cliente_turno` FOREIGN KEY (`turno_id`) REFERENCES `turnos` (`id`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pedidos_ibfk_3` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
