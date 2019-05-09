package com.glen.cotroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
	
	@GetMapping(path= {"","/"})
	public String getHomePage() {
		
		return "index.html";
	}

}
