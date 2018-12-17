function removeElement(elementId) {
	
	var password = "LanceIsBTY";
	var attempt = document.getElementById("helloo").value;
	if(password == attempt){
		alert("Login successful");
		
		var element = document.getElementById("para");
		element.parentNode.removeChild(element);
	
		// Removes an element from the document
		var element = document.getElementById("hello");
		element.parentNode.removeChild(element);
	
		var element = document.getElementById("hello");
		element.parentNode.removeChild(element);
	
		var element = document.getElementById("helloo");
		element.parentNode.removeChild(element);
	
		var element = document.getElementById("code");
		element.parentNode.removeChild(element);
	
		//Divison
		var heading  = document.createElement("p");
		heading.name = "para";
		document.body.appendChild(heading);
		var text = document.createTextNode("Please type who you are praying for and your prayer for them.");
		heading.appendChild(text);
	
		var my_form=document.createElement('form');
		my_form.name='myForm';
		my_form.action= "https://script.google.com/macros/s/AKfycbxkVLbMWGPQtaUruJWmbdnCstk9yy7rJe-LKMhl4AZEz0SSQWr_/exec";
		my_form.method = "get";

		var text = document.createTextNode("Firstname:");
		my_form.appendChild(text);

		var firstname = document.createElement("input");
		firstname.type = "text";
		firstname.name = "Firstname";
		my_form.appendChild(firstname);

		var text = document.createTextNode(" Lastname:");
		my_form.appendChild(text);

		var lastname = document.createElement("input");
		lastname.type = "text";
		lastname.name = "Lastname";
		my_form.appendChild(lastname);

		var space = document.createElement("br");
		my_form.appendChild(space);

		var space = document.createElement("br");
		my_form.appendChild(space);

		var text = document.createTextNode("Type your prayer here:");
		my_form.appendChild(text);

		var my_tb= document.createElement('textarea');	
		my_tb.type='TEXT';
		my_tb.name='Prayer';
		my_tb.rows = "20";
		my_tb.cols = "100";
		my_form.appendChild(my_tb);
		
		var space = document.createElement("br");
		my_form.appendChild(space);

		var space = document.createElement("br");
		my_form.appendChild(space);
		
		var btn = document.createElement('Button');
		btn.type = "submit";	
		btn.id = "submit";
		var t = document.createTextNode("Submit");      
		btn.appendChild(t);
		my_form.appendChild(btn);
		
		document.body.appendChild(my_form);
	}
	else{
		alert("Login failed. Try again.");
	}
}