package com.example.demo.product;

import java.util.List;
import java.util.Optional;

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
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/products")
public class ControllerProduct {

	String subPath = "products";

	@Autowired
	ServiceProduct serviceProduct;

	@Autowired
	ServiceFile serviceFile;

	@GetMapping
	public ResponseEntity<List<Product>> findAll(@RequestParam(value = "name", defaultValue = "") String name) {
		return ResponseEntity.ok(serviceProduct.findProductsByName(name));
	}

	@GetMapping("/aa")
	public ResponseEntity<String> aaa() {

		return ResponseEntity.ok(System.getProperty("user.dir") + "src\\main\\resources\\static\\images\\");
	}

	@PostMapping
	public ResponseEntity create(@RequestParam(name = "image",required = false) MultipartFile file, @RequestParam("name") String name,
			@RequestParam("description") String description, @RequestParam("price") float price) {

		String imageName = "product.jpg";

		if (file != null) {
			imageName = serviceFile.saveFile(file, this.subPath);
		}

		Product product = new Product();

		product.setName(name);
		product.setDescription(description);
		product.setPrice(price);
		product.setImage(imageName);

		return ResponseEntity.ok(serviceProduct.save(product));
	}

	@GetMapping("/{id}")
	public ResponseEntity<Product> findById(@PathVariable Long id) {
		Optional<Product> product = serviceProduct.findById(id);
		if (!product.isPresent()) {
			ResponseEntity.badRequest().build();
		}

		return ResponseEntity.ok(product.get());
	}

	@PutMapping("/{id}/details")
	public ResponseEntity<Product> updateDetails(@PathVariable Long id,@RequestBody Product product) {
		if (!serviceProduct.findById(id).isPresent()) {
			ResponseEntity.badRequest().build();
		}
		System.out.println(product.getName());
		
		
		return ResponseEntity.ok(serviceProduct.Update(product, id));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity delete(@PathVariable Long id) {
		Optional<Product> product = serviceProduct.findById(id);
		if (!product.isPresent()) {
			ResponseEntity.badRequest().build();
		}

		String imageName = product.get().getImage();
		
		if (!imageName.equals("product.jpg")) {
		
			serviceFile.deleteFile(this.subPath + "\\" + imageName);
		}
		serviceProduct.deleteById(id);

		return ResponseEntity.ok().build();
	}
}
