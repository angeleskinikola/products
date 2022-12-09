CREATE TABLE product (
    sku VARCHAR(40) PRIMARY KEY,
    name VARCHAR(40),
    price DECIMAL,
    type VARCHAR(10),
    weight DECIMAL(3,2),
    size DECIMAL,
    height INT,
    width INT,
    length INT
);
