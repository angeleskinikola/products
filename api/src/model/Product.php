<?php

abstract class Product {
    private $sku;
    private $name;
    private $price;
    private $type;

    function __construct($sku, $name, $price, $type) {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
        $this->type = $type;
    }

    function getSku() {
        return $this->sku;
    }

    function getName() {
        return $this->name;
    }

    function getPrice() {
        return $this->price;
    }

    function getType() {
        return $this->type;
    }
}