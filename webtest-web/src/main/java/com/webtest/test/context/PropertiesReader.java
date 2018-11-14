package com.webtest.test.context;

import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PropertiesLoaderUtils;

//@Component("propertiesReader")
public class PropertiesReader {

	//private List<String> locations;
	
	private static final Map<String,String> maps = new HashMap<>();
	
	@Autowired
	public PropertiesReader(List<String> locations) {
		//System.out.println("aaaa");
		//this.locations = locations;
		if (CollectionUtils.isNotEmpty(locations)) {
			for (String location : locations) {
				Resource resource = new ClassPathResource(location);
				addPropertiesFile(resource);
			}
		}
		
	}
	
	private  void addPropertiesFile(Resource resource){
		try {
			Properties props = PropertiesLoaderUtils.loadProperties(resource);
			if (!props.isEmpty()) {
				Enumeration<?> e = props.propertyNames();
				while (e.hasMoreElements()) {
					String key = (String) e.nextElement();
					String value = props.getProperty(key);
					if (key != null) {
						maps.put(key, value);
					}
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	/**
	public  void addPropertiesFile(Resource[] resource){
		for (int i = 0; i < resource.length; i++) {
			addPropertiesFile(resource[i]);
		}
	}
	**/
	
	public static String getPropertie(String key){
		return maps.get(key);
	}

	
	
}
