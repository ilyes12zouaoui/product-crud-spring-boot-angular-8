package com.example.demo.product;
import java.util.List;
import java.util.Optional;

public interface ProductServiceInterface {
	List<Product> findAll();
	Optional<Product> findById(Long id);
	Product save(Product stock);
	void deleteById(Long id);
}
