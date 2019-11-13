const fs = require('fs');

class Visitor{
	constructor(full_name, age, dateOfVisit, timeOfVisit, comments, visitorAssitantName)
	{
		this.fullName = full_name;
		this.age = age;
		this.dateOfVisit = dateOfVisit;
		this.timeOfVisit = timeOfVisit;
		this.comments = comments;
		this.visitorAssitantName = visitorAssitantName;
	}
	save(){
		var jsonContent = JSON.stringify(this,null, 5);	// The this keyword will reffrence the object created
		
		var fullName = this.fullName.replace(" ","_");
		fs.writeFile(`visitor_${fullName}.json`, jsonContent, 'utf8', function(err){
			if (err)
			{
				console.log("An error occured while writing JSON object to File.");
				return console.log(err);
			}
			console.log("JSON file has been saved.");
		});
	}
}

var visitor = new Visitor("Mlu Glory", 24, "12/11/2019", "14:08", "blessings", "Mesuli");
visitor.save();
