package com.products.service;

import com.products.model.Product;

import java.util.List;

public interface ProductService {

  List<Product> getProducts();

  void saveProduct(Product product);

  void deleteProducts(List<String> skus);
}
