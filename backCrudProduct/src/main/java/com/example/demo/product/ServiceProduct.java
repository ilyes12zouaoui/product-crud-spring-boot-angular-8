package com.example.demo.product;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceProduct {
	@Autowired
	RepositoryProduct repositoryProduct;
	
	public List<Product> findAll() {
		List<Product> result = new ArrayList<Product>();
		repositoryProduct.findAll().forEach(result::add);
		return result;
	}

	public List<Product> findProductsByName(String name) {
		List<Product> result = new ArrayList<Product>();
		repositoryProduct.findPoductsByName(name).forEach(result::add);
		return result;
	}

	public Optional<Product> findById(Long id) {
		return repositoryProduct.findById(id);
	}

	public Product save(Product stock) {
		return repositoryProduct.save(stock);
	}

	public Product Update(Product newProduct, Long id) {
		Product oldProduct = repositoryProduct.findById(id).get();
		if (!newProduct.getName().isEmpty())
			oldProduct.setName(newProduct.getName());
		if (!newProduct.getDescription().isEmpty())
			oldProduct.setDescription(newProduct.getDescription());
		if (newProduct.getPrice() > 0)
			oldProduct.setPrice(newProduct.getPrice());

		return repositoryProduct.save(oldProduct);

	}

	public void deleteById(Long id) {
		repositoryProduct.deleteById(id);
	}

}
