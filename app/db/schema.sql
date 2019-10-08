ROP DATABASE IF EXISTS pawsome_DB;
CREATE DATABASE pawsome_DB;
USE pawsome_DB;
CREATE TABLE products (
  ID INT  NOT NULL AUTO_INCREMENT,
  ITEM_ID VARCHAR(100) NOT NULL,
  ITEM_NAME VARCHAR(100) NOT NULL,
  ITEM_DESCRIPTION VARCHAR(500) NOT NULL,
  CATEGORY VARCHAR(200) NOT NULL,
  PRICE DECIMAL (10,2)NOT  NULL,
  STOCK_QUANTITY INT NULL,
  PRIMARY KEY (ID)
);
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 9d35fa18a37f7aacf1098cdce54095020b48eefc
=======
>>>>>>> 9d35fa18a37f7aacf1098cdce54095020b48eefc
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
 VALUES ("DT01", "Puppy Bites","YUMMY CHUMMIES GRAIN FREE WILD ALASKA DOG TREATS","TREATS", 25.39, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
VALUES("DT02", "Milk-Bone","Soft & Chewy Dog Snacks","TREATS", 14.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
VALUES ("DT03","smart bones","Treats crafted using indiana farm-raised duck meat as the primary source of protein","TREATS", 7.99, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
VALUES("DT04","bully sticks","packed with natural beef muscles that are slow roasted for maximum flavor with Redbarn Naturals","TREATS", 9.99, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
VALUES("DT05","Purina","JERKY NATURALS GRAIN-FREE JERKY BITES","TREATS", 6.89, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
VALUES("DF01","FRESH MIX CANNED ","Designed to support healthy skin ","food", 2.59, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
VALUES("DF02","cesar can","Premium grain-free dog food made from high quality ocean fish","food", 14.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values ("DF03","RAW NATURALS","Provides complete and balanced nutrition for all breeds and life stages","food", 31.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("DF04","SPORTSMAN PRIDE ","Enhanced energy levels for strength and stamina formulated with higher levels of vitamins","food", 14.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("DF05","core ","Contains a blend of protein sources to ensure optimal protein nutrition","food", 14.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("TY01","HOOF ","DURA CHEW HOOF ALTERNATIVE DOG CHEW. ","TOYS", 10.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("TY02","KONG Teddy  ","KONG Teddy Bear Dog Toy. ","TOYS", 12.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("TY03","PUPPY CHEW ","Cleaner, safer alternative to real bones","TOYS", 6.99, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("TY04","DENTA CHEW ","Cleaner, safer alternative to real bones. ","TOYS", 9.59, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("TY05","Nerf ","Nerf Nylon Foam Megaton Disc for Dogs ","TOYS", 12.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("DA01","THERMAL BOWL ","Stainless steel construction will not harbor bacteria, does not stain, and will not absorb smells.","Accessories", 14.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("DA02","Styled after a traditional bandana with the added benefits of the collar cover in that it can t come off","Accessories", 12.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("DA03"," LEASH ","leash makes sure you and your dog stand out at extended distances.","Accessories", 8.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("DA04","DOG COLLAR", "leash makes sure you and your dog stand out at extended distances","Accessories", 19.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("DA05","Kennel ","ASPENPET TRADITIONAL PLASTIC KENNEL","Accessories", 59.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("DC01","socks ","Bond & CoDuchess Dog Socks, Small.","CLOTHING", 5.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("DC02", "Jacket", "Castle Garden Dog Jacket","CLOTHING", 21.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("DC03"," Harnes ","Little Pup Blue Dog Harness.","CLOTHING", 18.29, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("DC04","T-Shirt "," Big Papaw Dog T-Shirt","CLOTHING", 9.99, 20);
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY)
values("DC05","Hoodie","Cozy Critter Dog Hoodie","CLOTHING", 19.29, 20);
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> 9d35fa18a37f7aacf1098cdce54095020b48eefc
=======
>>>>>>> 9d35fa18a37f7aacf1098cdce54095020b48eefc
/*
CREATE TABLE USER_LOGIN (
  MEMBER_ID VARCHAR(45) NULL,
  FIRST_NAME VARCHAR(300) NULL,
  LAST_NAME VARCHAR(300) NULL,
  USER_NAME VARCHAR(300) NULL,
  USER_PASSWORD VARCHAR(300) NULL,
  PRIMARY KEY (MEMBER_ID)
);
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 9d35fa18a37f7aacf1098cdce54095020b48eefc
=======
>>>>>>> 9d35fa18a37f7aacf1098cdce54095020b48eefc
CREATE TABLE ORDERS (
  ID INT (10) NOT NULL AUTO_INCREMENT,
  ORDER_ID VARCHAR(45) NULL,
  MEMBER_ID VARCHAR(45) NULL,
  ITEM_ID VARCHAR(300) NULL,
  ITEM_NAME VARCHAR(300)NULL,
  QUANTITY INT NULL,
  PRICEPERITEM DECIMAL(10,3) NULL,
  TOTAL DECIMAL(10,3) NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (MEMBER_ID) REFERENCES USER_lOGIN
);
INSERT INTO ORDERS (ORDER_ID, MEMBER_ID, ITEM_ID, ITEM_NAME, QUANTITY , PRICEPERITEM,TOTAL)
VALUES (1, 123, "101", "Puppy Bites", 1, 25.39, 25.39)*/
<<<<<<< HEAD
<<<<<<< HEAD




=======
>>>>>>> 9d35fa18a37f7aacf1098cdce54095020b48eefc
=======
>>>>>>> 9d35fa18a37f7aacf1098cdce54095020b48eefc
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'