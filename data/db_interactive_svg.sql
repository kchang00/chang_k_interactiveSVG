-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 05, 2019 at 08:18 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_interactive_svg`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_animals`
--

CREATE TABLE `tbl_animals` (
  `ID` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Mandarin` varchar(20) NOT NULL,
  `Description` text NOT NULL,
  `Years` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_animals`
--

INSERT INTO `tbl_animals` (`ID`, `Name`, `Mandarin`, `Description`, `Years`) VALUES
(1, 'Rat', '鼠(Shǔ)', 'Rats are clever, quick thinkers; successful, but content with living a quiet and peaceful life.', '2020, 2008, 1996, 1984, 1972, 1960'),
(2, 'Ox', '牛 (Niu)', 'Oxen are the hard workers in the background, intelligent and reliable, but never demanding praise.', '2021, 2009, 1997, 1985, 1973, 1961'),
(3, 'Tiger', '虎 (Hǔ)', 'Tigers are courageous and active people who love a good challenge and adventure in life.', '2022, 2010, 1998, 1986, 1974, 1962'),
(4, 'Rabbit', '兔 (Tù)', 'Rabbits are earnest with everything they do; they just ask that others treat them the same way.', '2023, 2011, 1999, 1987, 1975, 1963'),
(5, 'Dragon', '龙 (Lóng)', 'Dragons are strong and independent figures, but they yearn for support and love.', '2024, 2012, 2000, 1988, 1976, 1964'),
(6, 'Snake', '蛇 (Shé)', 'Snakes have a deep and complex mind, but if they love, they love with their entire heart.', '2025, 2013, 2001, 1989, 1977, 1965'),
(7, 'Horse', '马 (Mǎ)', 'Horses are free spirits who need space to be themselves.', '2026, 2014, 2002, 1990, 1978, 1966'),
(8, 'Goat', '羊 (Yang)', 'Goats are loving and selfless, always thinking for others, even if it works against their own interest.', '2027, 2015, 2003, 1991, 1979, 1967'),
(9, 'Monkey', '猴 (Hóu)', 'Monkeys are lighthearted pranksters who have the ability to achieve all their dreams.', '2028, 2016, 2004, 1992, 1980, 1968'),
(10, 'Rooster', '鸡 (Jī)', 'Roosters are complex people who seem strong but, deep down, need validation from loved ones.', '2029, 2017, 2005, 1993, 1981, 1969'),
(11, 'Dog', '狗 (Gǒu)', 'Honest and loyal, dogs are the truest friends and most reliable partners.', '2031, 2018, 2006, 1994, 1982, 1970'),
(12, 'Pig', '猪 (Zhū)', 'Pigs have a beautiful personality and are blessed with good fortune in life.', '2032, 2019, 2007, 1995, 1983, 1971');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_animals`
--
ALTER TABLE `tbl_animals`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_animals`
--
ALTER TABLE `tbl_animals`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
