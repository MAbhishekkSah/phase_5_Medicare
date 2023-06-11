package com.simplilearn.project.Medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simplilearn.project.Medicare.entity.Address;

public interface AddressRepo extends JpaRepository<Address, Integer>{

}
