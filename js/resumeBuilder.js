var bio = {
	name: "Steve O'Gallagher",
	role: "Developer",
	contacts: {
		mobile: "07725550475",
		email: "ogallaghersteve@gmail.com",
		github: "AddedSteve",
		twitter: "AddedSteve",
		location: "London, UK"
	},
	welcomeMessage: "Hello, and welcome to my resume.",
	skills: ["HTML", "CSS", "JavaScript", "Python", "Swift"],
	biopic: "https://media.licdn.com/media/AAEAAQAAAAAAAAL5AAAAJGUwZTg2MzU1LWJkNmMtNDQ4MC04Y2Y2LTBjOWRmZGViYTZiOQ.jpg",
	display: function () {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedSkills = function () { 
			var skillsList = [];
			bio.skills.forEach(function(val) {
    			skillsList.push(HTMLskills.replace("%data%", val));
			});
			return skillsList;
		};

		$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);
		$('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
		$('#header').append(formattedBioPic);
		$('#header').append(formattedWelcome);
		$('#header').append(HTMLskillsStart);
		$('#skills').append(formattedSkills);
	}
};

var work = {
	jobs: {
		employer: "Cohaesus",
		title: "Developer",
		location: "London, UK",
		dates: "2015-Present",
		description: "Front-end developer of websites and web applications."
	},
	display: function () {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs.employer).replace("#", "http://www.cohaesus.co.uk");
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs.title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs.dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs.location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs.description);

		$('#workExperience').append(HTMLworkStart);
		$('.work-entry').append(formattedEmployer);
		$('.work-entry a').append(formattedTitle);
		$('.work-entry').append(formattedDates);
		$('.work-entry').append(formattedLocation);
		$('.work-entry').append(formattedDescription);
	}
};

var education = {
	schools: {
		name: "University of York",
		location: "York, UK",
		degree: "BEng",
		majors: ["Electronic Engineering with Media Technology"],
		dates: 2007,
		url: "http://www.york.ac.uk/"
	},
	onlineCourses: {
		title: "Introduction to Computer Sciene and Programming Using Python",
		school: "MIT",
		date: 2015,
		url: "https://courses.edx.org/courses/course-v1:MITx+6.00.2x_3+1T2015/info"
	},
	display: function () {
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools.name).replace("#", education.schools.url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools.dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools.location);
		var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools.majors);

		$('#education').append(HTMLschoolStart);
		$('.education-entry').append(formattedSchool);
		$('.education-entry a').append(formattedDegree);
		$('.education-entry').append(formattedDates);
		$('.education-entry').append(formattedLocation);
		$('.education-entry').append(formattedMajors);
	}
};

bio.display();
work.display();
education.display();

