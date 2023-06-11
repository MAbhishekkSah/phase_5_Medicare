package com.simplilearn.project.Medicare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.simplilearn.project.Medicare.entity.Medicine;

@Repository
public interface MedRepo extends JpaRepository<Medicine, Integer> {

}
