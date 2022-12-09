package com.products.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Product {
  @Id
  private String sku;
  private String name;
  private Double price;
  private String type;
  private Integer height;
  private Integer width;
  private Integer length;
  private Double size;
  private Float weight;
}
