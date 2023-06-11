package com.simplilearn.project.Medicare.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.project.Medicare.entity.User;
import com.simplilearn.project.Medicare.repository.AddressRepo;
import com.simplilearn.project.Medicare.repository.UserRepo;

@Service
public class UserService {
	@Autowired
	private UserRepo userRepo;
	@Autowired
	private AddressRepo addressRepo;
	
	public User saveUser(User user)
	{
		addressRepo.save(user.getAddress());
		return userRepo.save(user);
	}
	
	public List<User> getUsersList()
	{
		return userRepo.findAll();
	}
	public User getUserById(int id)
	{
		if(userRepo.findById(id).isPresent())
			return userRepo.findById(id).get();
		else
			return null;
	}
	public User getUserByEmail(String email)
	{
		List<User> usersList = userRepo.findAll();
		for(int i = 0; i<usersList.size(); i++)
		{
			if(usersList.get(i).getEmail().equals(email))
			{
				return usersList.get(i);
			}
		}
		return null;
	}
	

}
