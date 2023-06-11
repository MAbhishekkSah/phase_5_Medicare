package com.simplilearn.project.Medicare.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.project.Medicare.entity.User;
import com.simplilearn.project.Medicare.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/getAllUsers")
	public List<User> getAllUsers()
	{
		return userService.getUsersList();
	}
	@PostMapping("/addUser")
	public ResponseEntity<Object> saveUser(@RequestBody User user)
	{
		userService.saveUser(user);
		return new ResponseEntity<Object>(user,HttpStatus.OK);
	}
	
	@GetMapping("/getUser/{id}")
	public ResponseEntity<Object> findUserById(@PathVariable int id)
	{
		if(userService.getUserById(id)!=null)
		{
			return new ResponseEntity<Object>(userService.getUserById(id),HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<Object>("User Not Found!",HttpStatus.NOT_FOUND);
		}
		
	}
	@GetMapping("/getUserByEmail/{email}")
	public ResponseEntity<Object> findUserByEmail(@PathVariable String email)
	{
		if(userService.getUserByEmail(email)!=null)
		{
			return new ResponseEntity<Object>(userService.getUserByEmail(email),HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<Object>(null,HttpStatus.NOT_FOUND);
		}
	}
	
	

}
