<?php

require_once __DIR__."/Product.php";

class Book extends Product {
    private float $weight;

    public function __construct(array $params) {
        $this->weight = $params["weight"];
        parent::__construct($params["sku"], $params["name"], $params["price"], "book");
    }

    public function getWeight() {
        return $this->weight;
    }

    public function toString(): array {
        return array(
            "sku" => $this->getSku(),
            "name" => $this->getName(),
            "price" => $this->getPrice(),
            "type" => "book",
            "weight" => $this->getWeight()
        );
    }

    public function getParams() {
        return [
            ":weight" => $this->weight,
            ":sku" => $this->getSku(),
            ":name" => $this->getName(),
            ":price" => $this->getPrice()
        ];
    }
}