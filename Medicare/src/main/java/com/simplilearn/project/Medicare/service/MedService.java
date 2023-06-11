package com.simplilearn.project.Medicare.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.simplilearn.project.Medicare.entity.Medicine;
import com.simplilearn.project.Medicare.repository.MedRepo;

@Service
public class MedService {
	
	@Autowired
	private MedRepo repo;
	
	public Medicine addMed(Medicine med)
	{
		return repo.save(med);
	}
	
	public List<Medicine> getAllMedicines()
	{
		return repo.findAll();
	}
	
	public Medicine getMedById(int id)
	{
		if(repo.findById(id).isPresent())
		{
			return repo.findById(id).get();
		}
		else
		{
			return null;
		}
	}
	
	public Medicine updateMed(int id, Medicine newMed)
	{
		if(repo.findById(id).isPresent())
		{
			Medicine med = repo.findById(id).get();
			//med.setId(newMed.getId());
			med.setName(newMed.getName());
			med.setCategory(newMed.getCategory());
			med.setSellerName(newMed.getSellerName());
			med.setDescription(newMed.getDescription());
			med.setPrice(newMed.getPrice());
			//med.setPhoto(newMed.getPhoto());
			return repo.save(med);
		}
		else {
			return null;
		}
	}
	public boolean deleteMedicine(int id)
	{
		if(repo.findById(id).isPresent())
		{
			repo.deleteById(id);
			return true;
		}
		else
		{
			return false;
		}
	}
}
