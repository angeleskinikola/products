<?php

require_once __DIR__."/Product.php";

class DVD extends Product {
    private float $size;

    public function __construct(array $params) {
        $this->size = $params["size"];
        parent::__construct($params["sku"], $params["name"], $params["price"], "dvd");
    }

    public function getSize() {
        return $this->size;
    }

    public function toString(): array {
        return array(
            "sku" => $this->getSku(),
            "name" => $this->getName(),
            "price" => $this->getPrice(),
            "type" => "dvd",
            "size" => $this->size
        );
    }

    public function getParams() {
        return [
            ":size" => $this->size,
            ":sku" => $this->getSku(),
            ":name" => $this->getName(),
            ":price" => $this->getPrice()
        ];
    }
} 