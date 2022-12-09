package com.products.controller;

import com.products.model.Product;
import com.products.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

  @Autowired
  private ProductService productService;

  @GetMapping("/products")
  public List<Product> products() {
    return productService.getProducts();
  }

  @PostMapping("/products")
  public void save(@RequestBody Product product) {
    productService.saveProduct(product);
  }

  @DeleteMapping("/products")
  public void massDelete(@RequestBody List<String> skus) {
    productService.deleteProducts(skus);
  }
}
