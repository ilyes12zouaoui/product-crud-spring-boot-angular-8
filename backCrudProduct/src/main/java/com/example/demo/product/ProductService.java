package com.example.demo.product;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements ProductServiceInterface {

	@Autowired
	ProductRepository productRepository;

	@Override
	public List<Product> findAll() {
		List<Product> result = new ArrayList<Product>();
		productRepository.findAll().forEach(result::add);
		return result;
	}

	public List<Product> findProductsByName(String name) {
		List<Product> result = new ArrayList<Product>();
		productRepository.findPoductsByName(name).forEach(result::add);
		return result;
	}

	public Optional<Product> findById(Long id) {
		return productRepository.findById(id);
	}

	public Product save(Product stock) {
		return productRepository.save(stock);
	}

	public Product Update(Product newProduct, Long id) {
		Product oldProduct = productRepository.findById(id).get();
		if (!newProduct.getName().isEmpty())
			oldProduct.setName(newProduct.getName());
		if (!newProduct.getDescription().isEmpty())
			oldProduct.setDescription(newProduct.getDescription());
		if (newProduct.getPrice() > 0)
			oldProduct.setPrice(newProduct.getPrice());

		return productRepository.save(oldProduct);

	}

	public void deleteById(Long id) {
		productRepository.deleteById(id);
	}

}
