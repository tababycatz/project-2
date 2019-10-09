DROP DATABASE IF EXISTS pawsome_DB;
CREATE DATABASE pawsome_DB;
USE pawsome_DB;
CREATE TABLE products (
  ITEM_ID VARCHAR(100) NOT NULL,
  ITEM_NAME VARCHAR(100) NOT NULL,
  ITEM_DESCRIPTION VARCHAR(500) NOT NULL,
  CATEGORY VARCHAR(200) NOT NULL,
  PRICE DECIMAL (10,2)NOT  NULL,
  STOCK_QUANTITY INT NULL,
  ITEM_IMAGE  MEDIUMBLOB NOT NULL,
  PRIMARY KEY (ITEM_ID)

);



INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY, ITEM_IMAGE)
VALUES ("DT01", "Puppy Bites","YUMMY CHUMMIES GRAIN FREE WILD ALASKA DOG TREATS","TREATS", 25.39, 20,load_file('app\public\assets\images\puppy bites.png'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY, ITEM_IMAGE)
VALUES("DT02", "Milk-Bone","Soft & Chewy Dog Snacks","TREATS", 14.29, 20,load_file('app\public\assets\images\ges\milk-bone.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY, ITEM_IMAGE)
VALUES ("DT03","smart bones","Treats crafted using indiana farm-raised duck meat as the primary source of protein","TREATS", 7.99, 20,load_file('app\public\assets\images\smart bones.png'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY, ITEM_IMAGE)
VALUES("DT04","bully sticks","packed with natural beef muscles that are slow roasted for maximum flavor with Redbarn Naturals","TREATS", 9.99, 20, load_file('app\public\assets\images\bully sticks.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
VALUES("DT05","Purina","JERKY NATURALS GRAIN-FREE JERKY BITES","TREATS", 6.89, 20, load_file('app\public\assets\images\Purina.png'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY, ITEM_IMAGE)
VALUES("DF01","FRESH MIX CANNED ","Designed to support healthy skin ","food", 2.59, 20, load_file('app\public\assets\images\fresh mix canned.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY, ITEM_IMAGE)
VALUES("DF02","cesar can","Premium grain-free dog food made from high quality ocean fish","food", 14.29, 20, load_file('app\public\assets\images\cesar can.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE )
values ("DF03","RAW NATURALS","Provides complete and balanced nutrition for all breeds and life stages","food", 31.29, 20,load_file('app\public\assets\images\Raw Naturals.png'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("DF04","SPORTSMAN PRIDE ","Enhanced energy levels for strength and stamina formulated with higher levels of vitamins","food", 14.29, 20,load_file('app\public\assets\images\sportsman pride.png'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("DF05","core ","Contains a blend of protein sources to ensure optimal protein nutrition","food", 14.29, 20,load_file('app\public\assets\images\core.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("TY01","HOOF ","DURA CHEW HOOF ALTERNATIVE DOG CHEW. ","TOYS", 10.29, 20,load_file('app\public\assets\images\Hoof.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("TY02","KONG Teddy  ","KONG Teddy Bear Dog Toy. ","TOYS", 12.29, 20,load_file('app\public\assets\images\Kong Teddy.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("TY03","PUPPY CHEW ","Cleaner, safer alternative to real bones","TOYS", 6.99, 20,load_file('app\public\assets\images\puppy chew.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("TY04","DENTA CHEW ","Cleaner, safer alternative to real bones. ","TOYS", 9.59, 20,load_file('app\public\assets\images\Dentachew.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("TY05","Nerf ","Nerf Nylon Foam Megaton Disc for Dogs ","TOYS", 12.29, 20,load_file('app\public\assets\images\Nerf.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("DA01","THERMAL BOWL ","Stainless steel construction will not harbor bacteria, does not stain, and will not absorb smells.","Accessories", 14.29, 20,load_file('app\public\assets\images\THERMAL BOWL.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("DA02","COLLAR KERCHIEF","Styled after a traditional bandana with the added benefits of the collar cover in that it can t come off","Accessories", 12.29, 20,load_file('app\public\assets\images\COLLAR KERCHIEF.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("DA03"," LEASH ","leash makes sure you and your dog stand out at extended distances.","Accessories", 8.29, 20, load_file('app\public\assets\images\leash.png'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("DA04","DOG COLLAR", "leash makes sure you and your dog stand out at extended distances","Accessories", 19.29, 20,load_file('app\public\assets\images\dog coller.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("DA05","Kennel ","ASPENPET TRADITIONAL PLASTIC KENNEL","Accessories", 59.29, 20,load_file('app\public\assets\images\Kennel.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("DC01","socks ","Bond & CoDuchess Dog Socks, Small.","CLOTHING", 5.29, 20, load_file('app\public\assets\images\paw shooes.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("DC02", "Jacket", "Castle Garden Dog Jacket","CLOTHING", 21.29, 20, load_file('app\public\assets\images\jacket.png'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("DC03"," Harnes ","Little Pup Blue Dog Harness","CLOTHING", 18.29, 20,load_file('app\public\assets\images\harness.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("DC04","T-Shirt "," Big Papaw Dog T-Shirt","CLOTHING", 9.99, 20,load_file('app\public\assets\images\T-shirt.jpg'));
INSERT INTO products (ITEM_ID, ITEM_NAME, ITEM_DESCRIPTION, CATEGORY, PRICE, STOCK_QUANTITY,ITEM_IMAGE)
values("DC05","Hoodie","Cozy Critter Dog Hoodie","CLOTHING", 19.29, 20,load_file('app\public\assets\images\hoodie.jpg'));

