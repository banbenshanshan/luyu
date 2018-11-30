/*
Navicat MySQL Data Transfer

Source Server         : h51809
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : message

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2018-11-30 14:12:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` int(10) unsigned NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `price` varchar(10) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('5', '360N7珊瑚红手机6-64GB', '1100', 'img/sj5.jpg', '1');

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` varchar(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', 'node7', '12', 'img/1.jpg');
INSERT INTO `goodlist` VALUES ('2', '苹果2', '34', 'img/2.jpg');
INSERT INTO `goodlist` VALUES ('3', '苹果3', '56', 'img/3.jpg');
INSERT INTO `goodlist` VALUES ('4', '苹果4', '78', 'img/4.jpg');
INSERT INTO `goodlist` VALUES ('5', '苹果5', '100', 'img/5.jpg');
INSERT INTO `goodlist` VALUES ('6', '苹果6', '122', 'img/6.jpg');
INSERT INTO `goodlist` VALUES ('21', '沙发', '999', null);
INSERT INTO `goodlist` VALUES ('8', '苹果8', '166', 'img/8.jpg');
INSERT INTO `goodlist` VALUES ('9', '苹果9', '188', 'img/9.jpg');
INSERT INTO `goodlist` VALUES ('10', '苹果10', '210', 'img/10.jpg');
INSERT INTO `goodlist` VALUES ('11', '苹果11', '232', 'img/11.jpg');
INSERT INTO `goodlist` VALUES ('12', '苹果12', '254', 'img/12.jpg');
INSERT INTO `goodlist` VALUES ('13', '苹果13', '276', 'img/13.jpg');
INSERT INTO `goodlist` VALUES ('14', '苹果14', '298', 'img/14.jpg');
INSERT INTO `goodlist` VALUES ('15', '苹果15', '320', 'img/15.jpg');
INSERT INTO `goodlist` VALUES ('16', '苹果16', '342', 'img/16.jpg');
INSERT INTO `goodlist` VALUES ('17', '苹果17', '364', 'img/17.jpg');
INSERT INTO `goodlist` VALUES ('18', '苹果18', '386', 'img/18.jpg');
INSERT INTO `goodlist` VALUES ('19', '苹果19', '408', 'img/19.jpg');
INSERT INTO `goodlist` VALUES ('20', '苹果20', '430', 'img/20.jpg');
INSERT INTO `goodlist` VALUES ('', null, null, null);

-- ----------------------------
-- Table structure for shuju
-- ----------------------------
DROP TABLE IF EXISTS `shuju`;
CREATE TABLE `shuju` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` int(10) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shuju
-- ----------------------------
INSERT INTO `shuju` VALUES ('1', '手机', '1125', 'img/sj1.jpg', '360N7珊瑚红手机6-64GB');
INSERT INTO `shuju` VALUES ('2', '手机', '3214', 'img/sj2.jpg', '360N7银钻灰手机6-64GB');
INSERT INTO `shuju` VALUES ('3', '手机', '1246', 'img/sj3.jpg', '360N7月岩白手机6-64GB');
INSERT INTO `shuju` VALUES ('4', '手机', '4199', 'img/sj4.jpg', '360N7银钻灰手机6-64GB');
INSERT INTO `shuju` VALUES ('5', '手机', '1100', 'img/sj5.jpg', '360N7珊瑚红手机6-64GB');
INSERT INTO `shuju` VALUES ('6', '手机', '1599', 'img/sj6.jpg', '360N7月岩白手机6-64GB');
INSERT INTO `shuju` VALUES ('7', '手机', '1106', 'img/sj7.jpg', '360N7月岩白手机6-64GB');
INSERT INTO `shuju` VALUES ('8', '手机', '1299', 'img/sj8.jpg', '360N7银钻灰手机6-64GB');
INSERT INTO `shuju` VALUES ('9', '手机', '1399', 'img/sj9.jpg', '360N7珊瑚红手机6-64GB');
INSERT INTO `shuju` VALUES ('10', '手机', '1109', 'img/sj10.jpg', '360N7月岩白手机6-64GB');
INSERT INTO `shuju` VALUES ('11', '手机', '899', 'img/sj11.jpg', '360N7银钻灰手机6-64GB');
INSERT INTO `shuju` VALUES ('12', '摄像机', '1111', 'img/sx1.jpg', '360摄像机夜视版');
INSERT INTO `shuju` VALUES ('13', '摄像机', '4333', 'img/sx2.jpg', '360升级版车载摄像机');
INSERT INTO `shuju` VALUES ('14', '摄像机', '6789', 'img/sx3.jpg', '360摄像机夜视版');
INSERT INTO `shuju` VALUES ('15', '摄像机', '5432', 'img/sx4.jpg', '360升级版车载摄像机');
INSERT INTO `shuju` VALUES ('16', '摄像机', '1115', 'img/sx5.jpg', '360摄像机夜视版');
INSERT INTO `shuju` VALUES ('17', '摄像机', '880', 'img/sx6.jpg', '360升级版车载摄像机');
INSERT INTO `shuju` VALUES ('18', '行车记录仪', '320', 'img/xc1.jpg', '360行车记录仪升级版1');
INSERT INTO `shuju` VALUES ('19', '行车记录仪', '560', 'img/xc2.jpg', '360行车记录仪升级版2');
INSERT INTO `shuju` VALUES ('20', '行车记录仪', '424', 'img/xc3.jpg', '360行车记录仪升级版3');
INSERT INTO `shuju` VALUES ('21', '行车记录仪', '1984', 'img/xc4.jpg', '360行车记录仪升级版4');
INSERT INTO `shuju` VALUES ('22', '行车记录仪', '1121', 'img/xc5.jpg', '360行车记录仪升级版5');
INSERT INTO `shuju` VALUES ('23', '行车记录仪', '1223', 'img/xc6.jpg', '360行车记录仪升级版6');
INSERT INTO `shuju` VALUES ('24', '儿童手表', '230', 'img/sb1.jpg', '360儿童电话手表女宝宝');
INSERT INTO `shuju` VALUES ('25', '儿童手表', '233', 'img/sb2.jpg', '360儿童电话手表男宝宝');
INSERT INTO `shuju` VALUES ('26', '儿童手表', '164', 'img/sb3.jpg', '360儿童电话手表女宝宝');
INSERT INTO `shuju` VALUES ('27', '儿童手表', '655', 'img/sb4.jpg', '360N7儿童电话手表升级');
INSERT INTO `shuju` VALUES ('28', '儿童手表', '733', 'img/sb5.jpg', '360儿童电话手表男宝宝');
INSERT INTO `shuju` VALUES ('29', '儿童手表', '428', 'img/sb6.jpg', '360N7儿童电话手表升级');
INSERT INTO `shuju` VALUES ('30', '扫地机器人', '1129', 'img/sd1.jpg', '360智能家居扫地机器人');
INSERT INTO `shuju` VALUES ('31', '扫地机器人', '1530', 'img/sd2.jpg', '360智能家居扫地机器人');
INSERT INTO `shuju` VALUES ('32', '路由器', '131', 'img/ly1.jpg', '360家用路由器1');
INSERT INTO `shuju` VALUES ('33', '路由器', '232', 'img/ly2.jpg', '360家用路由器2');
INSERT INTO `shuju` VALUES ('34', '路由器', '333', 'img/ly3.jpg', '360家用路由器3');
INSERT INTO `shuju` VALUES ('35', '路由器', '534', 'img/ly4.jpg', '360家用路由器4');
INSERT INTO `shuju` VALUES ('36', '手机', '1135', 'img/mains1.jpg', '360N7珊瑚红手机6-64GB');
INSERT INTO `shuju` VALUES ('37', '手表', '1133', 'img/mains2.jpg', '360N7儿童电话手表升级');
INSERT INTO `shuju` VALUES ('38', '汽车', '1242', 'img/mains3.jpg', '360家用路由器');
INSERT INTO `shuju` VALUES ('39', '电器', '325', 'img/mains4.jpg', '360家用路由器');
INSERT INTO `shuju` VALUES ('40', '手机', '1139', 'img/mains1b.jpg', '360N7珊瑚红手机6-64GB');
INSERT INTO `shuju` VALUES ('41', '手表', '555', 'img/mains2b.jpg', '360N7儿童电话手表升级');
INSERT INTO `shuju` VALUES ('42', '汽车', '1141', 'img/mains3b.jpg', '德国官方后台改革机器');
INSERT INTO `shuju` VALUES ('43', '电器', '1142', 'img/mains4b.jpg', '360家用路由器');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `tel` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('4', '18877543016', 'luyu123');
INSERT INTO `user` VALUES ('1', '18877543033', 'ren123');
INSERT INTO `user` VALUES ('2', '18877543032', 'haha12');
INSERT INTO `user` VALUES ('5', '18877543015', 'luyu123');

-- ----------------------------
-- Table structure for user_inf
-- ----------------------------
DROP TABLE IF EXISTS `user_inf`;
CREATE TABLE `user_inf` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `age` varchar(10) DEFAULT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_inf
-- ----------------------------
INSERT INTO `user_inf` VALUES ('1', 'lizongwei', '123456', '18', '2018-11-12 15:19:05');
INSERT INTO `user_inf` VALUES ('2', 'qiuguijian', '12345', '18', '2018-11-12 15:19:34');
INSERT INTO `user_inf` VALUES ('3', 'yanzihao', '1234', '18', '2018-11-12 15:19:52');
INSERT INTO `user_inf` VALUES ('4', '287488420@qq.com', 'ggg', null, '2018-11-13 17:20:01');
INSERT INTO `user_inf` VALUES ('5', 'luyu', '123456', null, '2018-11-13 17:24:16');
INSERT INTO `user_inf` VALUES ('6', '333', '333', null, '2018-11-13 21:39:39');
SET FOREIGN_KEY_CHECKS=1;
