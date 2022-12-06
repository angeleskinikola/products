<?php

class ProductFactory {
    private array $products;

    public function __construct(array $objectList) {
        $this->products = $objectList;
    }

    public function newProduct($params) {
        return new $this->products[$params["type"]]($params);
    }
}