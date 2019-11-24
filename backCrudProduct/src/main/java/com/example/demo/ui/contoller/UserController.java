package com.example.demo.ui.contoller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("users")
public class UserController {

	@GetMapping
	public String getUser() {
		return "user";
	}
	
	@PostMapping
	public String createUsers() {
		return "create user";
	}
	
	@PutMapping
	public String updateUsers() {
		return "update user";
	}
	
	@DeleteMapping
	public String deleteUsers() {
		return "delete user";
	}
	
	
}
