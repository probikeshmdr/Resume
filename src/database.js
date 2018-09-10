var icons = {
  code: "code",
  experience: "work_outline",
  project: "work",
  info: "info"
};

var menuItems = [
  {
    name: "skills",
    icon: icons.code
  },
  {
    name: "experiences",
    icon: icons.experience
  },
  {
    name: "projects",
    icon: icons.project
  },
  {
    name: "about",
    icon: icons.info
  }
];

var education = {
  header: "EDUCATION",
  content: [
    {
      type: "bold",
      text: "University of Massachusetts Boston"
    },
    {
      text: "Boston, MA"
    },
    {
      text: "\n"
    },
    {
      text: "2018"
    }
  ]
};

var about = {
  header: "ABOUT",
  content: [
    {
      text:
        "I used React framework to develop this app. The routing facility is provided by React router."
    }
  ]
};

var broadSkillSet = {
  header: "skills",
  skillsSet: [
    {
      category: "languages",
      skills: [
        { name: "Java", prof: 5 },
        { name: "JavaScript", prof: 4 },
        { name: "SQL", prof: 3 },
        { name: "PHP", prof: 3 }
      ]
    },
    {
      category: "Front-end",
      skills: [
        { name: "React", prof: 4 },
        { name: "HTML", prof: 4 },
        { name: "CSS", prof: 4 },
        { name: "Bootstrap", prof: 4 }
      ]
    },
    {
      category: "Environment",
      skills: [
        { name: "Linux", prof: 3 },
        { name: "Windows", prof: 4 },
        { name: "MacOS", prof: 4 },
        { name: "Android", prof: 4 }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MySql", prof: 4 },
        { name: "Oracle", prof: 4 },
        { name: "SQLite", prof: 4 }
      ]
    }
  ]
};
var mbtaAppExperience = {
  position: "MBTA subway real-time tracker app (Collab)",
  company: "University of Massachusetts Boston",
  time: "September 2016 - December 2016",
  responsibilities: [
    "Designed an elegant UI/UX of the app considering typography, colors, layout and styles.",
    "Worked closely with a team member for proper planning, coding and database implementation",
    "Developed a support for geo location tracking using the Google APIs."
  ],
  technologies: ["Java", "XML", "SQLite", "UI Design", "Android-Studio"]
};

var weatherAppExperience = {
  position: "WeatherMate web application (Collab)",
  company: "University of Massachusetts Boston",
  time: "September 2017 - January 2018",
  responsibilities: [
    "Formed a team and delegated the software development in a collaborative team environment.",
    "Implemented REST-API call using PHP in back-end to access third-party weather services.",
    "Primarily worked in the backend and provided support to the front-end of the web application."
  ],
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "Ajax",
    "PHP",
    "BootStrap",
    "API calls"
  ],
  href: "https://weatherapp-bikesh.herokuapp.com/"
};

var dgtalSansarComp = {
  position: "Web developer / Tech Associate",
  company: "Digital Sansar Computers",
  time: "October 2010 - November 2013",
  responsibilities: [
    "Responsible for designing, developing, and maintaining of user-friendly websites.",
    "Implemented W3C validation that significantly improved web functionality, accessibility and fixed bugs from existing websites.",
    "Provided solution to the technological issues within the company as well as customer end.",
    "Assisted in computer sales and provided customer service and support."
  ],

  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "JOOMLA",
    "Adobe-Flash",
    "Adobe-Dreamweaver",
    "Adobe-Photoshop"
  ]
};

var resumeProject = {
  position: "Resume Site",
  responsibilities: [
    "Designed the User Interface to attract the resume viewers.",
    "Implemented components such as Experiences, Education, Projects and maintained their own state and styles.",
    "Carefully handled the responsive design implementation based on CSS3 to make it compatible with small devices."
  ],
  technologies: ["React", "HTML", "CSS", "CSS3", "JavaScript", "JSON"],
  href: "/Resume"
};
var experiences = {
  header: "experiences",
  showingExperienceOf: "All",
  experiencesContent: [mbtaAppExperience, weatherAppExperience, dgtalSansarComp]
};

var dssProject = {
  position: "Company website",
  company: "Dgtal Sansar Solutions (DSS)",
  time: "January 2017 - July 2017",
  responsibilities: [
    "Designed a website from scratch per the requirement of the company.",
    "Developed dynamic and mobile friendly website that ensures high traffic, page views and user experience.",
    "Took care of all the web development processes, maintained and updated the website."
  ],
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "BootStrap",
    "Adobe-Dreamweaver",
    "FileZilla",
    "cPanel"
  ],
  href: "https://dgtalsansarsolutions.com"
};

var dsPasalProject = {
  position: "DSPasal Tutorial Website",
  time: "May 2018 - Present",
  responsibilities: [
    "Made a modification to the wordpress template per the requirement of the project using HTML, CSS and PHP",
    "Integrated different social platforms for easy sharing by using the API calls from the providers.",
    "Responsible for content writing for the tutorials."
  ],
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "cPanel",
    "Wordpress",
    "Wordpress-plugins"
  ],
  href: "https://dspasal.com"
};

var projects = {
  header: "projects",
  showingExperienceOf: "All",
  experiencesContent: [resumeProject, dssProject, dsPasalProject]
};

var experienceForFilter = [
  mbtaAppExperience,
  resumeProject,
  dssProject,
  weatherAppExperience,
  dgtalSansarComp,
  dsPasalProject
];

var filterer = skills => {
  let thisExperience = [...db.experiencesProjects];

  console.log("expereinces ", thisExperience);

  var stuff = 0;
  if (skills.length == 0) {
    stuff = thisExperience;
  } else {
    stuff = thisExperience.filter(e => e != undefined).filter(experience => {
      for (var i = 0; i < experience.technologies.length; i++) {
        if (
          experience.technologies[i] == undefined ||
          experience.technologies[i] == null
        ) {
          continue;
        }
        for (var j = 0; j < skills.length; j++) {
          let lowerCase = skills[j].toLowerCase();
          if (experience.technologies[i].toLowerCase().indexOf(lowerCase) != -1)
            return true;
        }
      }
      return false;
    });
  }

  return {
    header: "EXPERIENCES/PROJECTS",
    experiencesContent: stuff
  };
};

var items = {
  experiences: experiences,
  skills: broadSkillSet,
  projects: projects,
  about: about
};

function mergeArrays(array1, array2) {
  var db = [];
  array1.forEach(e => {
    db.push(e);
  });
  array2.forEach(e => {
    db.push(e);
  });
  return db;
}

var db = {
  experiencesProjects: mergeArrays(
    experiences.experiencesContent,
    projects.experiencesContent
  )
};

export { items, menuItems, icons, db, filterer };
