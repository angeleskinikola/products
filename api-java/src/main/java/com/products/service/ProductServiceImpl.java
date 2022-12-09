package com.products.service;

import com.products.model.Product;
import com.products.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

  @Autowired
  private ProductRepository productRepository;

  @Override
  public List<Product> getProducts() {
    return productRepository.findAll();
  }

  @Override
  public void saveProduct(Product product) {
    productRepository.save(product);
  }

  @Override
  public void deleteProducts(List<String> skus) {
    productRepository.deleteAllById(skus);
  }
}
