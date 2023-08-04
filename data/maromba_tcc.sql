-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Abr-2023 às 14:05
-- Versão do servidor: 10.4.27-MariaDB
-- versão do PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `maromba_tcc`
--

CREATE DATABASE IF NOT EXISTS maromba_tcc
  DEFAULT CHARACTER SET utf8
  DEFAULT COLLATE utf8_general_ci;

-- --------------------------------------------------------

USE maromba_tcc;

--
-- Estrutura da tabela `exercicio`
--

CREATE TABLE `exercicio` (
  `ID` smallint(5) NOT NULL,
  `Nome` varchar(60) NOT NULL,
  `Categoria` varchar(30) NOT NULL,
  `Objetivo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `exercicio`
--

INSERT INTO `exercicio` (`ID`, `Nome`, `Categoria`, `Objetivo`) VALUES
(1, 'Rosca Direta', '2', 'Hipertrofia'),
(2, 'Supino Inclinado', '1', 'Hipertrofia'),
(3, 'Leg 45', '4', 'Hipertrofia'),
(4, 'Pulley', '3', 'Hipertrofia');

-- --------------------------------------------------------

--
-- Estrutura da tabela `ficha`
--

CREATE TABLE `ficha` (
  `ID` int(10) NOT NULL,
  `id_usuario` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `ficha`
--

INSERT INTO `ficha` (`ID`, `id_usuario`) VALUES
(1, 1),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `ficha_exerc`
--

CREATE TABLE `ficha_exerc` (
  `id_ficha` int(10) NOT NULL,
  `id_exercicio` smallint(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `ficha_exerc`
--

INSERT INTO `ficha_exerc` (`id_ficha`, `id_exercicio`) VALUES
(1, 1),
(2, 2),
(2, 1),
(2, 4),
(1, 3),
(3, 4),
(3, 1),
(3, 2),
(3, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `ID` int(10) NOT NULL,
  `Nome` varchar(80) NOT NULL,
  `Email` varchar(80) NOT NULL,
  `Senha` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`ID`, `Nome`, `Email`, `Senha`) VALUES
(1, '', 'jorge@gmail.com', '12345'),
(2, '', 'andre.santos@gmail.com', '87654321'),
(3, '', 'Bananadoce@gmail.com', 'bananadoce');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `exercicio`
--
ALTER TABLE `exercicio`
  ADD PRIMARY KEY (`ID`);

--
-- Índices para tabela `ficha`
--
ALTER TABLE `ficha`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_id_usuario` (`id_usuario`);

--
-- Índices para tabela `ficha_exerc`
--
ALTER TABLE `ficha_exerc`
  ADD KEY `fk_id_ficha` (`id_ficha`),
  ADD KEY `fk_id_exercicio` (`id_exercicio`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `exercicio`
--
ALTER TABLE `exercicio`
  MODIFY `ID` smallint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `ficha`
--
ALTER TABLE `ficha`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `ficha`
--
ALTER TABLE `ficha`
  ADD CONSTRAINT `fk_id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`ID`);

--
-- Limitadores para a tabela `ficha_exerc`
--
ALTER TABLE `ficha_exerc`
  ADD CONSTRAINT `fk_id_exercicio` FOREIGN KEY (`id_exercicio`) REFERENCES `exercicio` (`ID`),
  ADD CONSTRAINT `fk_id_ficha` FOREIGN KEY (`id_ficha`) REFERENCES `ficha` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
