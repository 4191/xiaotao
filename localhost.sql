-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 05 月 04 日 10:29
-- 服务器版本: 5.5.47
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `xiaotao`
--
CREATE DATABASE `xiaotao` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `xiaotao`;

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE IF NOT EXISTS `goods` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(300) NOT NULL,
  `price` varchar(30) NOT NULL,
  `volume` varchar(30) DEFAULT NULL,
  `score` int(1) DEFAULT NULL,
  `options` varchar(3000) DEFAULT NULL,
  `shop` varchar(3000) DEFAULT NULL,
  `img` varchar(3000) DEFAULT NULL,
  `imgs` varchar(3000) DEFAULT NULL,
  `detail` varchar(3000) DEFAULT NULL,
  `comment` varchar(3000) DEFAULT NULL,
  `ip` varchar(50) DEFAULT NULL,
  `addTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`id`, `title`, `price`, `volume`, `score`, `options`, `shop`, `img`, `imgs`, `detail`, `comment`, `ip`, `addTime`) VALUES
(1, '可调节握力器 手指康复训练健身器材 宿舍健身握力器', '16.90', '1', 5, '', '校淘网自营店', '13.jpg', '131.jpg,132.jpg,133.jpg', '1301.jpg,1302.jpg,1303.jpg', '', '::1', '2017-04-27 08:05:46'),
(2, '便捷无线激光键盘 镭射平板手机通用虚拟蓝牙键盘 白边银色', '169.00', '31', 5, '', '校淘网自营店', '14.jpg', '141.jpg,142.jpg,143.jpg', '1401.jpg,1402.jpg,1403.jpg', '', '::1', '2017-04-27 11:13:28'),
(3, 'Aidebar不锈钢轻量旋盖保温杯 男女学生随行饮水杯情侣款礼品茶水杯', '89.00', '0', 5, '樱花粉,温暖棕,烟波蓝', '品牌旗舰店（自营店铺）', '15.jpg', '151.jpg,152.jpg,153.jpg', '1501.jpg,1502.jpg,1503.jpg,1504.jpg,1505.jpg,1506.jpg', '', '::1', '2017-04-27 13:54:16'),
(4, 'nut2代智能无线蓝牙防丢器 钱包手机报警器钥匙寻找器 双向防丢贴片', '75.50', '18', 5, '', '校淘网自营店', '16.jpg', '161.jpg,162.jpg,163.jpg', '1601.jpg,1602.jpg,1603.jpg,1604.jpg,1605.jpg,1606.jpg', '', '::1', '2017-04-27 13:56:59'),
(5, '手持LED小风扇电池小电风扇 智能可编程烧录闪字风扇闪红字DIY线可以自己改字', '16.90', '0', 5, '有光盘,无光盘', '校淘网自营店', '17.jpg', '171.jpg,172.jpg,173.jpg', '1701.jpg,1702.jpg,1703.jpg,1704.jpg,1705.jpg,1706.jpg', '', '::1', '2017-04-27 13:58:37'),
(6, '酷毙灯 华南理工大学创客产品专利产品', '39.90', '185', 5, '感应款,可调款,常规款(冷光),常规款(暖光)', '校淘网自营店', '18.jpg', '181.jpg,182.jpg,183.jpg', '1801.jpg,1802.jpg,1803.jpg,1804.jpg,1805.jpg,1806.jpg', '', '::1', '2017-04-27 14:00:22'),
(7, '智能手环 防水刷卡支付运动手表计步器睡眠监测ios安卓南京版快刷', '295.90', '0', 5, '土豪金,玫瑰粉', '品牌旗舰店（自营店铺）', '19.jpg', '191.jpg,192.jpg,193.jpg', '1901.jpg,1902.jpg,1903.jpg,1904.jpg,1905.jpg,1906.jpg', '', '::1', '2017-04-27 14:02:10');

-- --------------------------------------------------------

--
-- 表的结构 `goods2`
--

CREATE TABLE IF NOT EXISTS `goods2` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(300) NOT NULL,
  `price` varchar(30) NOT NULL,
  `volume` varchar(30) DEFAULT NULL,
  `score` int(1) DEFAULT NULL,
  `options` varchar(3000) DEFAULT NULL,
  `shop` varchar(3000) DEFAULT NULL,
  `img` varchar(3000) DEFAULT NULL,
  `imgs` varchar(3000) DEFAULT NULL,
  `detail` varchar(3000) DEFAULT NULL,
  `comment` varchar(3000) DEFAULT NULL,
  `ip` varchar(50) DEFAULT NULL,
  `addTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `goods2`
--

INSERT INTO `goods2` (`id`, `title`, `price`, `volume`, `score`, `options`, `shop`, `img`, `imgs`, `detail`, `comment`, `ip`, `addTime`) VALUES
(1, '可调节握力器 手指康复训练健身器材 宿舍健身握力器', '16.90', '', 5, '', '校淘网自营店', '13.jpg', '131.jpg,132.jpg,133.jpg', '1301.jpg,1302.jpg,1303.jpg', '', '::1', '2017-04-27 07:57:06');

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(300) NOT NULL,
  `password` varchar(3000) NOT NULL,
  `ip` varchar(50) DEFAULT NULL,
  `addTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=68 ;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `ip`, `addTime`) VALUES
(1, '1', '1', '127.0.0.1', '2017-04-21 15:02:28'),
(4, '2144', '13412', '127.0.0.1', '2017-04-21 15:17:29'),
(10, '12', '21', '127.0.0.1', '2017-04-22 02:37:47'),
(67, '13399998888', 'aaa111=', '::1', '2017-05-04 02:21:55'),
(65, '13412343333', '12341234', '::1', '2017-05-03 06:55:52'),
(64, '13241234123', '12341234', '::1', '2017-05-03 06:55:37'),
(17, '15366109321', 'abc123', '127.0.0.1', '2017-04-22 04:26:24'),
(63, '13241234123', '12341234', '::1', '2017-05-03 06:55:16'),
(62, '13312341111', '12341234', '::1', '2017-05-03 06:54:37'),
(61, '13312341111', '12341234', '::1', '2017-05-03 06:54:30'),
(60, '13912341243', '12341234', '::1', '2017-05-03 06:54:00'),
(38, '123312', '123133', '127.0.0.1', '2017-04-22 12:54:56'),
(59, '13912341242', '12341234', '::1', '2017-05-03 06:52:42'),
(58, '13912341241', '12341234', '::1', '2017-05-03 06:51:58'),
(43, '我热', '位', '127.0.0.1', '2017-04-22 12:59:41'),
(54, '13312341234', '12341234', '::1', '2017-05-03 06:43:50'),
(56, '13212341233', '12341234', '::1', '2017-05-03 06:48:30'),
(66, '15366109999', '123abc=', '::1', '2017-05-04 02:09:12');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
