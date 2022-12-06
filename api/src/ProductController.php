<?php

class ProductController {

    public function __construct(private ProductGateway $gateway) {}

    public function processRequest(string $method): void {
        switch ($method) {
            case "GET":
                echo json_encode($this->gateway->getAll());
                break;
            
            case "POST":
                $data = json_decode(file_get_contents("php://input"), true);

                $sku = $this->gateway->create($data);

                http_response_code(201);
                echo json_encode([
                    "message" => "Product created",
                    "sku" => $sku
                ]);
                break;
            
            case "DELETE":
                $data = (array) json_decode(file_get_contents("php://input"), true);
                $deletedRows = $this->gateway->massDelete($data);

                echo json_encode([
                    "message" => "Products deleted",
                    "rows" => $deletedRows
                ]);
                break;    
            
            default:
                http_response_code(405);
                header("Allow: GET, POST, DELETE");
        }
    }
}