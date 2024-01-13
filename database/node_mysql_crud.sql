-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 13, 2024 at 03:33 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_mysql_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `role` enum('admin','user') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `address`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Anil Kumar Sen', 'anil@gmail.com', 'Ahmedabad Gujarat', 'admin', '2024-01-12 20:21:27', '2024-01-12 20:21:27'),
(4, 'Jack maaa', 'jackmak@gmail.com', 'China gate', 'user', '2024-01-12 21:40:31', '2024-01-13 12:35:03'),
(5, 'Virat', 'virat@gmail.com', 'India', 'admin', '2024-01-12 21:43:40', '2024-01-13 13:35:59'),
(6, 'Sachin', 'sachin@gmail.com', 'India', 'user', '2024-01-12 21:43:56', '2024-01-12 21:43:56'),
(7, 'Dhoni', 'dhobi@gmail.com', 'India', 'user', '2024-01-12 21:44:08', '2024-01-12 21:44:08'),
(8, 'Murli', 'murli@gmail.com', 'India', 'user', '2024-01-12 21:44:48', '2024-01-12 21:44:48'),
(9, 'Avesh', 'avesh@gmail.com', 'India', 'user', '2024-01-12 21:45:14', '2024-01-12 21:45:14'),
(10, 'Rahul', 'rahul@gmail.com', 'India', 'user', '2024-01-12 21:45:25', '2024-01-12 21:45:25'),
(11, 'Ravi', 'ravi@gmail.com', 'India', 'user', '2024-01-12 21:45:37', '2024-01-12 21:45:37'),
(13, 'Amit Kumar Sen', 'amit@gmail.com', 'Satna MP', 'user', '2024-01-12 22:44:56', '2024-01-12 23:31:26'),
(14, 'Clark', 'clark@gmail.com', 'England', 'user', '2024-01-12 22:45:10', '2024-01-12 22:45:10'),
(15, 'punit', 'punit@gmail.com', 'India', 'user', '2024-01-12 23:31:03', '2024-01-12 23:31:03'),
(17, 'Aayu', 'aayu@gmail', 'Katni MP', 'admin', '2024-01-13 10:50:15', '2024-01-13 10:50:15'),
(18, 'Rajesh', 'rajesh@gmail.com', 'Katni MP', 'user', '2024-01-13 10:51:42', '2024-01-13 10:51:42'),
(19, 'Vijay', 'vijay@gmail.com', 'Nai basti', 'user', '2024-01-13 11:23:10', '2024-01-13 11:23:10'),
(20, 'Arjun', 'arjun@gmial.com', 'Gore gao', 'user', '2024-01-13 11:29:28', '2024-01-13 13:25:19'),
(21, 'arav', 'arav@gmail.com', 'yess', 'user', '2024-01-13 12:51:48', '2024-01-13 12:51:48'),
(22, 'ravi', 'ravi@gmial.com', 'Ravi naagr', 'admin', '2024-01-13 13:14:37', '2024-01-13 13:14:37'),
(23, 'Mean', 'mean@gmail.com', 'Walsad', 'user', '2024-01-13 13:18:20', '2024-01-13 13:28:27'),
(25, 'Ayush', 'singh@gmail.com', 'ayush ram', 'user', '2024-01-13 13:28:54', '2024-01-13 13:29:15'),
(26, 'New USer', 'user@gmail.com', 'ddress', 'user', '2024-01-13 13:45:10', '2024-01-13 13:45:10'),
(27, 'Test user', 'test@gmail.com', 'testt', 'admin', '2024-01-13 14:21:57', '2024-01-13 14:21:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
