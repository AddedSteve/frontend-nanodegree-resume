var bio = {
	name: "Steve O'Gallagher",
	role: "Developer",
	contacts: {
		mobile: "07725550475",
		email: "ogallaghersteve@gmail.com",
		github: "http://www.github.com/AddedSteve",
		twitter: "http://www.twitter.com/AddedSteve",
		location: "London, UK"
	},
	welcomeMessage: "Hello, and welcome to my resume.",
	skills: ["HTML", "CSS", "JavaScript", "Python", "Swift"],
	biopic: "https://pbs.twimg.com/profile_images/600016970780651520/MMUQ1gu7.jpg",
	display: function () {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);
	}
};

bio.display();


