-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 17 nov. 2023 à 01:44
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `myfirstdatabase`
--

-- --------------------------------------------------------

--
-- Structure de la table `groups`
--

CREATE TABLE `groups` (
  `group_id` int(11) NOT NULL,
  `group_name` varchar(5) NOT NULL,
  `stadium` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `groups`
--

INSERT INTO `groups` (`group_id`, `group_name`, `stadium`) VALUES
(1, 'A', 'Lusail Stadium'),
(2, 'B', 'Al Bayt Stadium'),
(3, 'C', 'Stade Yves-du-Manoir'),
(4, 'D', 'Al Bayt Stadium'),
(5, 'E', 'Stade Yves-du-Manoir'),
(6, 'F', 'Lusail Stadium'),
(7, 'G', 'Estádio do Pacaembu'),
(8, 'H', 'Estádio do Pacaembu');

-- --------------------------------------------------------

--
-- Structure de la table `teams_table`
--

CREATE TABLE `teams_table` (
  `teams_id` int(11) NOT NULL,
  `team_name` varchar(30) NOT NULL,
  `team_coach` varchar(20) NOT NULL,
  `nbr_players` int(32) NOT NULL,
  `country` varchar(32) DEFAULT NULL,
  `group_fk` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `teams_table`
--

INSERT INTO `teams_table` (`teams_id`, `team_name`, `team_coach`, `nbr_players`, `country`, `group_fk`) VALUES
(0, '', '', 0, NULL, NULL),
(1, 'QAT', 'Carlos Queiroz', 24, 'QUATAR', NULL),
(2, 'ECU', 'someone', 26, 'ECUADOR', NULL),
(3, 'SEN', 'someone', 25, 'SENEGAL', NULL),
(4, 'NED', 'someone', 26, 'NETHERLANDS', NULL),
(5, 'ENG', 'someone', 23, 'ENGLAND', NULL),
(6, 'IRN', 'someone', 26, 'IRAN', NULL),
(7, 'USA', 'someone', 26, 'USA', NULL),
(8, 'WAL', 'someone', 26, 'WALES', NULL),
(9, 'ARG', 'someone', 26, 'ARGENTINA', NULL),
(10, 'KSA', 'someone', 25, 'SAUDI ARABIA', NULL),
(11, 'MEX', 'someone', 26, 'MEXICO', NULL),
(12, 'POL', 'someone', 25, 'POLAND', NULL),
(13, 'FRA', 'someone', 26, 'FRANCE', NULL),
(14, 'AUS', 'someone', 26, 'AUSTRALIA', NULL),
(15, 'DEN', 'someone', 24, 'DENMARK', NULL),
(16, 'TUN', 'someone', 26, 'TUNISIA', NULL),
(17, 'ESP', 'someone', 26, 'SPAIN', NULL),
(18, 'CRC', 'someone', 26, 'COSTA RICA', NULL),
(19, 'GER', 'someone', 26, 'GERMANY', NULL),
(20, 'JPN', 'someone', 26, 'JAPAN', NULL),
(21, 'BEL', 'someone', 26, 'BELGIUM', NULL),
(22, 'CAN', 'someone', 25, 'CANADA', NULL),
(23, 'MAR', 'someone', 25, 'MOROCCO', NULL),
(24, 'QAT', 'Carlos Queiroz', 24, 'QUATAR', NULL),
(25, 'ECU', 'someone', 26, 'ECUADOR', NULL),
(26, 'SEN', 'someone', 25, 'SENEGAL', NULL),
(27, 'NED', 'someone', 26, 'NETHERLANDS', NULL),
(28, 'ENG', 'someone', 23, 'ENGLAND', NULL),
(29, 'IRN', 'someone', 26, 'IRAN', NULL),
(30, 'USA', 'someone', 26, 'USA', NULL),
(31, 'WAL', 'someone', 26, 'WALES', NULL),
(32, 'ARG', 'someone', 26, 'ARGENTINA', NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`group_id`);

--
-- Index pour la table `teams_table`
--
ALTER TABLE `teams_table`
  ADD PRIMARY KEY (`teams_id`),
  ADD KEY `group_fk` (`group_fk`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `groups`
--
ALTER TABLE `groups`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `teams_table`
--
ALTER TABLE `teams_table`
  ADD CONSTRAINT `teams_table_ibfk_1` FOREIGN KEY (`group_fk`) REFERENCES `groups` (`group_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
