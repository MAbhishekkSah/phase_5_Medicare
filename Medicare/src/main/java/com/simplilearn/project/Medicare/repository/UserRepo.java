package com.simplilearn.project.Medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simplilearn.project.Medicare.entity.User;

public interface UserRepo extends JpaRepository<User, Integer> {

}
