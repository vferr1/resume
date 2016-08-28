var bio = {
  "name": "Vincent Ferrari",
  "role": "Front-End Web Developer",
  "contacts": {
    "mobile": "(310)893-9077",
    "email": "vincent.ferrari12@gmail.com",
    "github": "vferr1",
    "location": "Eugene, OR (relocation available)",
  },
  "welcomeMessage": "Welcome to my humble online resume!",
  "bioPic": "images/little_guy_in_suit_4.png",
  "age": 25,
  "skills": ["awesomeness", "programming", "teaching", "JS"]
};

var work = {
  "jobs": [
    {
      "position": "Temp",
      "employer": "Employer's Overload",
      "dates": "June - August 2016",
      "location": "Portland, OR", // 
      "description": "working various manual labor positions while completeing Udacity nanodegree",
      "start": "June 2016"
    },
    {
      "position": "Construction (Seasonal)",
      "employer": "Warner Technologies, Inc.",
      "dates": "2011-Present",
      "location": "Los Angeles, CA",
      "description": "Experience in demo, grading, concrete work, framing, electrical, plumbing, and finish carpentry",
      "start": 2011
    },
    {
      "position": "Freeform Radio Disc Jockey",
      "employer": "KWVA Eugene",
      "dates": "2009-2011",
      "location": "Eugene, OR",
      "description": "Produced and hosted weekly Rock n' Roll Radio Show",
      "start": "2009"
    },
    {
      "position": "Bagger/Customer Service",
      "employer": "Vicente Foods",
      "dates": "2008-2009",
      "location": "Los Angeles, CA",
      "description": "Daily interaction with variety of people, maintain positive customer experience",
      "start": "Summer 2008"
    }
  ]
}

var education = {
  "schools": [
    {
      "name": "University of Oregon",
      "degree": "B.S. in Philosophy, Minor in Business Administration, several courses completed in advanced mathematics and computer science",
      "dates": "2009-2016",
      "location": "Eugene, OR",
      "Major":"Philosophy"
    },
    {
      "name": "Udacity.com",
      "degree": "Front-End Web Developer Nanodegree",
      "dates": "Jan. 2016-Present",
      "location": "Eugene, OR",
      "Major": "Front-End Web Dev"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer Nanodegree",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }
  ]
}
// validate JSON code @ jsonlint.com
// note: do not inculde "var education ="

var projects = {
  "jobs": [
    {
      "start": "2016",
      "title": "Web Dev Portfolio",
      "dates": "2016",
      "description": "Implementation of responsive portfolio using HTML, CSS, Twitter's Bootstrap Framework, responsive images, and optimizations",
      "image": "https://i.ytimg.com/vi/gNvzLs3IzAo/hqdefault.jpg"
    },
    {
      "start": "2016",
      "title": "Online Resume",
      "dates": "2016",
      "description": "Online resume constructed using JavaScript, JQuery. Displays capacity with basic flow controls, click tracking.",
      "image": "images/little_guy_in_suit_4.png"
    }
  ]
}

var formattedName = HTMLheaderName.replace("%data%", "Vincent Ferrari");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
var formattedImg = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);

$("#main").append(internationalizeButton);

var inName = function(name) {
  var lowerCase = name.trim().toLowerCase();
  var split1 = lowerCase.split(" ");
  split1[0] = split1[0].charAt(0).toUpperCase() + split1[0].slice(1);
  split1[1] = split1[1].toUpperCase();
  var finalName = split1[0] + " " + split1[1];
  return finalName;
}

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedImg);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLoc);

$("#header").append(formattedwelcomeMsg);



if (bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}

var displayWork = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
    var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedWorkLocation);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkDescription);
  }
}
displayWork();

projects.display= function(){
  for (job in projects.jobs){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.jobs[job].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.jobs[job].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription  = HTMLprojectDescription.replace("%data%", projects.jobs[job].description);
    $(".project-entry:last").append(formattedDescription);
    var formattedImage = HTMLprojectImage.replace("%data%", projects.jobs[job].image);
    $(".project-entry:last").append(formattedImage);
  }
}

projects.display();

// also acceptable is this reversed using .prepend()
// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
$("#main").append(work["position"]);
$("#main").append(education.name);


$("#mapDiv").append(googleMap);
