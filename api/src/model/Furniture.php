<?php

require_once __DIR__."/Product.php";

class Furniture extends Product {
    private float $height;
    private float $width;
    private float $length;

    public function __construct(array $params) {
        $this->height = $params["height"];
        $this->width = $params["width"];
        $this->length = $params["length"];
        parent::__construct($params["sku"], $params["name"], $params["price"], "furniture");
    }

    public function getHeight(): float {
        return $this->height;
    }

    public function getWidth(): float {
        return $this->width;
    }

    public function getLength(): float {
        return $this->length;
    }

    public function toString(): array {
        return array(
            "sku" => $this->getSku(),
            "name" => $this->getName(),
            "price" => $this->getPrice(),
            "type" => "furniture",
            "height" => $this->height,
            "width" => $this->width,
            "length" => $this->length
        );
    }

    public function getParams() {
        return [
            ":height" => $this->height,
            ":width" => $this->width,
            ":length" => $this->length,
            ":sku" => $this->getSku(),
            ":name" => $this->getName(),
            ":price" => $this->getPrice()
        ];
    }
}