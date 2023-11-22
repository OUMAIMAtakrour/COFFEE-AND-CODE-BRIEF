-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 17 nov. 2023 à 01:59
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
(1, 'QAT', 'Carlos Queiroz', 24, 'QUATAR', 1),
(2, 'ECU', 'someone', 26, 'ECUADOR', 1),
(3, 'SEN', 'someone', 25, 'SENEGAL', 1),
(4, 'NED', 'someone', 26, 'NETHERLANDS', 1),
(5, 'ENG', 'someone', 23, 'ENGLAND', 2),
(6, 'IRN', 'someone', 26, 'IRAN', 2),
(7, 'USA', 'someone', 26, 'USA', 2),
(8, 'WAL', 'someone', 26, 'WALES', 2),
(9, 'ARG', 'someone', 26, 'ARGENTINA', 3),
(10, 'KSA', 'someone', 25, 'SAUDI ARABIA', 3),
(11, 'MEX', 'someone', 26, 'MEXICO', 3),
(12, 'POL', 'someone', 25, 'POLAND', 3),
(13, 'FRA', 'someone', 26, 'FRANCE', 4),
(14, 'AUS', 'someone', 26, 'AUSTRALIA', 4),
(15, 'DEN', 'someone', 24, 'DENMARK', 4),
(16, 'TUN', 'someone', 26, 'TUNISIA', 4),
(17, 'ESP', 'someone', 26, 'SPAIN', 5),
(18, 'CRC', 'someone', 26, 'COSTA RICA', 5),
(19, 'GER', 'someone', 26, 'GERMANY', 5),
(20, 'JPN', 'someone', 26, 'JAPAN', 5),
(21, 'BEL', 'someone', 26, 'BELGIUM', 6),
(22, 'CAN', 'someone', 25, 'CANADA', 6),
(23, 'MAR', 'someone', 25, 'MOROCCO', 6),
(24, 'QAT', 'Carlos Queiroz', 24, 'QUATAR', 6),
(25, 'ECU', 'someone', 26, 'ECUADOR', 7),
(26, 'SEN', 'someone', 25, 'SENEGAL', 7),
(27, 'NED', 'someone', 26, 'NETHERLANDS', 7),
(28, 'ENG', 'someone', 23, 'ENGLAND', 7),
(29, 'IRN', 'someone', 26, 'IRAN', 8),
(30, 'USA', 'someone', 26, 'USA', 8),
(31, 'WAL', 'someone', 26, 'WALES', 8),
(32, 'ARG', 'someone', 26, 'ARGENTINA', 8);

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
