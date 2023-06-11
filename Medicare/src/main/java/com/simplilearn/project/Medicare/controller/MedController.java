package com.simplilearn.project.Medicare.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
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
import com.simplilearn.project.Medicare.entity.Medicine;
import com.simplilearn.project.Medicare.service.FileUtil;
import com.simplilearn.project.Medicare.service.MedService;

@RestController
@RequestMapping("/medicare")
@CrossOrigin(origins="http://localhost:4200")
public class MedController {
	
	@Autowired
	private MedService service;
	
	@PostMapping(value="/addMedicine",consumes=MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<Object> uploadFiles(@RequestParam("files")MultipartFile files,@RequestParam("name") String name,
												@RequestParam("sellerName") String sellerName,@RequestParam("category") String category,
												@RequestParam("description") String description,@RequestParam("price") String price)
	{
		System.out.println("Inside uploadFiles");
		try {
			this.createDirIfNotExist();
			
			List<String> fileNames = new ArrayList<>();
			//Read and write the file in the local folder
			Arrays.asList(files).stream().forEach(file ->{
				byte[] bytes = new byte[0];
				
				try {
					bytes = file.getBytes();
					Path path = Paths.get(FileUtil.folderPath + name.toLowerCase() + ".png");
					Files.write(path, bytes);
					fileNames.add(path.toString());
				}
				catch(IOException ex)
				{
					ex.printStackTrace();
				}
			});
			System.out.println("price = "+price);
			Medicine med = new Medicine(name,description,sellerName,category,price);
			System.out.println("Adding the new Medicine"+med);
			int pos = fileNames.get(0).lastIndexOf("assets");
			String fileName = ".\\"+fileNames.get(0).substring(pos);
			med.setPhoto(fileName);
			service.addMed(med);
			return new ResponseEntity<Object>(med,HttpStatus.OK);
		}
		catch(Exception e) {
			return new ResponseEntity<Object>("Exception while Uploading files !",HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	//Create directory to SAVE FILE IF NOT EXIST
	private void createDirIfNotExist()
	{
		File directory = new File(FileUtil.folderPath);
		if(!directory.exists())
		{
			directory.mkdir();
		}
	}
	
	@GetMapping("/getMedicinesList")
	public List<Medicine> getAllMed()
	{
		return service.getAllMedicines();
	}
	
	@GetMapping("/getMedicinesById/{id}")
	public ResponseEntity<Object> getMedById(@PathVariable int id)
	{
		if(service.getMedById(id) != null)
		{
			return new ResponseEntity<Object>(service.getMedById(id),HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<Object>("Medicine Not Found !",HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/updateMedicine/{id}")
	public ResponseEntity<Object> updateMedicines(@PathVariable int id, @RequestBody Medicine newMed)
	{
		Medicine medicine = service.getMedById(id);
		if(medicine != null)
		{
			return new ResponseEntity<Object>(service.updateMed(id, newMed),HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<Object>("Not able to update.Please try with correct id!", HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/deleteMedicine/{id}")
	public ResponseEntity<String> deleteMedicine(@PathVariable int id)
	{
		boolean isDeleted = service.deleteMedicine(id);
		if(isDeleted)
		{
			return new ResponseEntity<String>("Medicine deleted successfully !", HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>("No medicine Found !",HttpStatus.NOT_FOUND);
		}
		
	}
}
