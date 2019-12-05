package com.example.demo.product;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryProduct extends CrudRepository<Product, Long>{
	Product findByName(String name);
	
	@Query(value="select * from product u where u.name LIKE %:name%",nativeQuery=true)
	List<Product> findPoductsByName(@Param("name") String name);
	
}