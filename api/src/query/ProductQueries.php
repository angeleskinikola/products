<?php

class ProductQueries {
    private readonly array $queries;

    public function __construct() {
        $this->queries = array(
            "book" => $this->insertBook(),
            "dvd" => $this->insertDvd(),
            "furniture" => $this->insertFurniture()
        );
    }

    public function getSelectAllQuery(): string {
        return 'SELECT * FROM product;';
    }

    public function getInsertQuery($type): string {
        return $this->queries[$type]; 
    }

    public function getMassDeleteQuery(array $data): string {
        $skus = implode("','", $data);

        return "DELETE FROM product 
                WHERE sku IN ('".$skus."')";
    }

    private function insertDvd(): string {
        return "INSERT INTO product (sku, name, price, type, size) 
                VALUES (:sku, :name, :price, 'dvd', :size)";
    }
    private function insertFurniture(): string {
        return "INSERT INTO product (sku, name, price, type, height, width, length) 
                VALUES (:sku, :name, :price, 'furniture', :height, :width, :length)";
    }
    private function insertBook(): string {
        return "INSERT INTO product (sku, name, price, type, weight) 
                VALUES (:sku, :name, :price, 'book', :weight)";
    }

}