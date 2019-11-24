package com.example.demo.product;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/products")
public class ProductController {
	@Autowired
	ProductService productService;

	@GetMapping
	public ResponseEntity<List<Product>> findAll(@RequestParam(value = "name", defaultValue = "") String name) {
		
		 return  ResponseEntity.ok(productService.findProductsByName(name));
		
	}

	@PostMapping
	public ResponseEntity create(@RequestBody Product product) {
		return ResponseEntity.ok(productService.save(product));
	}

	@GetMapping("/{id}")
	public ResponseEntity<Product> findById(@PathVariable Long id) {
		Optional<Product> stock = productService.findById(id);
		if (!stock.isPresent()) {
			ResponseEntity.badRequest().build();
		}

		return ResponseEntity.ok(stock.get());
	}

	@PutMapping("/{id}")
	public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody Product product) {
		if (!productService.findById(id).isPresent()) {
			ResponseEntity.badRequest().build();
		}
	
		return ResponseEntity.ok(productService.Update(product,id));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity delete(@PathVariable Long id) {
		if (!productService.findById(id).isPresent()) {
			ResponseEntity.badRequest().build();
		}

		productService.deleteById(id);

		return ResponseEntity.ok().build();
	}
}
