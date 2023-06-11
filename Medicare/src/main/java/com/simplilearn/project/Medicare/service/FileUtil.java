package com.simplilearn.project.Medicare.service;

import java.nio.file.Path;
import java.nio.file.Paths;

public final class FileUtil {
	
	private FileUtil()
	{
		//Restricts Instantiation
	}
	public static final String folderPath = "D:\\Simplilearn\\Angular Projects\\Medicare\\src\\assets\\";
	public static final Path filePath = Paths.get(folderPath);

}
