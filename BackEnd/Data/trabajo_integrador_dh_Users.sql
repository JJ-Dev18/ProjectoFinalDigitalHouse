-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: localhost    Database: trabajo_integrador_dh
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `id_role` int NOT NULL,
  PRIMARY KEY (`id_user`),
  KEY `fk_users_role_idx` (`id_role`),
  CONSTRAINT `fk_users_role` FOREIGN KEY (`id_role`) REFERENCES `Roles` (`id_role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO `hoteles`.`users` (`id_user`, `name`, `last_name`, `email`, `password`, `id_role`) VALUES ('1', 'Maru', 'Ferraro', 'ferraro.mariaeugenia@gmail.com', '1234', '1');
INSERT INTO `hoteles`.`users` (`id_user`, `name`, `last_name`, `email`, `password`, `id_role`) VALUES ('2', 'Juan', 'Murillo', 'juanjomb1_vi@hotmail.com', '1234', '1');
INSERT INTO `hoteles`.`users` (`id_user`, `name`, `last_name`, `email`, `password`, `id_role`) VALUES ('3', 'Daniel', 'Arcila', 'darcilaibague@gmail.com', '1234', '1');
INSERT INTO `hoteles`.`users` (`id_user`, `name`, `last_name`, `email`, `password`, `id_role`) VALUES ('4', 'Daniel', 'Lopez', 'dalro1028@hotmail.com', '1234', '1');
INSERT INTO `hoteles`.`users` (`id_user`, `name`, `last_name`, `email`, `password`, `id_role`) VALUES ('5', 'Ruth', 'Borda', 'ruthbordam@gmail.com', '1234', '1');
INSERT INTO `hoteles`.`users` (`id_user`, `name`, `last_name`, `email`, `password`, `id_role`) VALUES ('6', 'Jairo', 'Rivera', 'jairo.rivera.developer@gmail.com', '1234', '1');

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-20 11:58:04
