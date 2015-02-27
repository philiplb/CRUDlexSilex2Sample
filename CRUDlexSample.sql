-- This file is part of the CRUDlex sample package.
--
-- (c) Philip Lehmann-Böhm <philip@philiplb.de>
--
-- For the full copyright and license information, please view the LICENSE
-- file that was distributed with this source code.

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- --------------------------------------------------------

CREATE DATABASE IF NOT EXISTS `crud` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `crud`;

-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `version` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `pages` int(11) NOT NULL,
  `release` datetime DEFAULT NULL,
  `library` int(11) NOT NULL,
  `description` text NOT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `library` (`library`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `library` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `version` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `opening` datetime DEFAULT NULL,
  `homepage` varchar(255) DEFAULT NULL,
  `isOpenOnSundays` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

ALTER TABLE `book`
  ADD CONSTRAINT `book_ibfk_1` FOREIGN KEY (`library`) REFERENCES `library` (`id`);
