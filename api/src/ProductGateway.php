<?php

require_once __DIR__."/factory/ProductFactory.php";
require_once __DIR__."/query/ProductQueries.php";
require_once __DIR__."/model/Product.php";
require_once __DIR__."/model/Book.php";
require_once __DIR__."/model/Furniture.php";
require_once __DIR__."/model/DVD.php";

class ProductGateway {
    private PDO $conn;
    private ProductFactory $factory;
    private ProductQueries $queries;

    public function __construct(Database $database) {
        $this->conn = $database->getConnection();
        $this->factory = new ProductFactory(array(
            "book" => Book::class,
            "dvd" => DVD::class,
            "furniture" => Furniture::class
        ));
        $this->queries = new ProductQueries();
    }

    public function getAll(): array {
        $sql = $this->queries->getSelectAllQuery();
        $stmt = $this->conn->query($sql);
        $data = [];
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $product = $this->factory->newProduct($row);
            $data[] = $product->toString();
        }

        return $data;
    }

    public function create($data) {
        $product = $this->factory->newProduct($data);
        $sql = $this->queries->getInsertQuery($data["type"]);
        $params = $product->getParams();
        $stmt = $this->conn->prepare($sql);
        $stmt->execute($params);

        return $this->conn->lastInsertId();
    }

    public function massDelete(array $data): int {
        $sql = $this->queries->getMassDeleteQuery($data);
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();

        return $stmt->rowCount();
    }
}