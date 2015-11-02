var bio = {
	'name': "Steve O'Gallagher",
	'role': 'Developer',
	'contacts': {
		'mobile': '07725550475',
		'email': 'ogallaghersteve@gmail.com',
		'github': 'AddedSteve',
		'twitter': 'AddedSteve',
		'location': 'London, UK'
	},
	'welcomeMessage': 'Hello, and welcome to my resume.',
	'skills': ['HTML', 'CSS', 'JavaScript', 'Python', 'Swift'],
	'biopic': 'https://media.licdn.com/media/AAEAAQAAAAAAAAL5AAAAJGUwZTg2MzU1LWJkNmMtNDQ4MC04Y2Y2LTBjOWRmZGViYTZiOQ.jpg',
	'display': function () {
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
		var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
		var formattedSkills = function () { 
			var skillsList = [];
			bio.skills.forEach(function(val) {
    			skillsList.push(HTMLskills.replace('%data%', val));
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
	'jobs': [
		{
			'employer': 'Cohaesus',
			'title': 'Developer',
			'location': 'London, UK',
			'dates': '2015-Present',
			'description': 'Front-end developer of websites and web applications.'
		}
	],
	'display': function () {
		$('#workExperience').append(HTMLworkStart);

		for (job in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer).replace('#', 'http://www.cohaesus.co.uk');
			var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
			var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);


			$('.work-entry').append(formattedEmployer);
			$('.work-entry a').append(formattedTitle);
			$('.work-entry').append(formattedDates);
			$('.work-entry').append(formattedLocation);
			$('.work-entry').append(formattedDescription);
		}
	}
};

var projects = {
	'projects': [
		{
			'title': 'Sample Project 1',
			'dates': 'Jan 2015-Feb 2015',
			'description': 'This is a sample project.',
			'images': ['images/197x148.gif', 'images/197x148.gif']
		}
	],
	'display': function () {
		$('#projects').append(HTMLprojectStart);

		for (project in projects.projects) {
			var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
			var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
			var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
			var formattedImages = function () { 
				var imagesList = [];
				projects.projects[project].images.forEach(function(val) {
	    			imagesList.push(HTMLprojectImage.replace('%data%', val));
				});
				return imagesList;
			}



			$('.project-entry').append(formattedTitle);
			$('.project-entry').append(formattedDates);
			$('.project-entry').append(formattedDescription);
			$('.project-entry').append(formattedImages);
		};
	}
};

var education = {
	'schools': [
		{
			'name': 'University of York',
			'location': 'York, UK',
			'degree': 'BEng',
			'majors': ['Electronic Engineering with Media Technology'],
			'dates': 2007,
			'url': 'http://www.york.ac.uk/'
		}
	],
	'onlineCourses': [
		{
			'title': 'Introduction to Computer Sciene and Programming Using Python',
			'school': 'MIT',
			'date': 2015,
			'url': 'https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-6'
		}
	],
	'display': function () {
		$('#education').append(HTMLschoolStart);

		for (school in education.schools) {
			var formattedSchool = HTMLschoolName.replace('%data%', education.schools[school].name).replace('#', education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
			var formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[school].majors);

			$('.education-entry:last').append(formattedSchool);
			$('.education-entry:last a').append(formattedDegree);
			$('.education-entry:last').append(formattedDates);
			$('.education-entry:last').append(formattedLocation);
			$('.education-entry:last').append(formattedMajors);
		}

		$('#education').append(HTMLonlineClasses);
		$('#education').append(HTMLschoolStart);

		for (course in education.onlineCourses) {
			var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title).replace('#', education.onlineCourses[course].url);
			var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
			var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].date);
			var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url).replace('#', education.onlineCourses[course].url);

			$('.education-entry:last').append(formattedTitle);
			$('.education-entry:last').append(formattedSchool);
			$('.education-entry:last').append(formattedDates);
			$('.education-entry:last').append(formattedURL);
		};
	}
};

bio.display();
work.display();
projects.display();
education.display();

