// dados pessoais
var bio = {
    "name": "Enio Nicael Martins Sanches",
    "role": "Desenvolvedor Web",
    "welcomeMessage": "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis. (José de Alencar)",
    "image": "images/me.jpg",
    "contacts": {
        "mobile": "6799641-7394",
        "email": "enionicael@gmail.com",
        "github": "EnioNicael",
        "twitter": "@enionicael",
        "location": "Dourados - MS"
    },
    "skills": ["PHP", "HTML", "CSS", "JavaScript", "Python"]
};
// formação academica e cursos
var education = {
    "schools": [{
        "name": "UNIGRAN",
        "location": "Dourados, MS",
        "degree": "Bacharel",
        "majors": ["Ciência da Computação"],
        "dates": 2015,
        "url": "https://www.unigran.br"
    }, {
        "name": "Udacity",
        "location": "São Paulo, SP",
        "degree": "Nanodegree",
        "majors": ["Front end-Developer", "Fundamentos em Data Cience I"],
        "dates": 2017,
        "url": "https://www.udacity.com"
    }],
    "onlineCourses": [{
        "title": "Git and Github",
        "school": "Udacity",
        "date": 2016,
        "url": "https://www.udacity.com"
    }, {
        "title": "PHP Orientado a Objeto",
        "school": "UpInside",
        "date": 2016,
        "url": "https://www.upinside.com"
    }]
};
// experiencia de trabalho
var work = {
    "jobs": [{
        "employer": "E.M. Francisco Meireles",
        "title": "Professor",
        "location": "Campo Grande, MS",
        "dates": 2017,
        "description": "Elaboração de projetos educacionais e apoio técnico aos professores regentes"
    }, {
        "employer": "NicTec",
        "title": "Desenvolvedor Web",
        "location": "Bela Vista, MS",
        "dates": 2017,
        "description": "Desenvolvimento de projetos Web e Mobile"
    }]
};
// projetos realizados
var projects = {
    "projects": [{
        "title": "Mockup ao Artigo",
        "dates": 2016,
        "description": "Interpreta um determinado mockup dado e codifica ele.",
        "images": ["images/mockup.jpg"]
    }, {
        "title": "Cartão de Animais",
        "dates": 2016,
        "description": "Implementa uma página estática de  cartão de Animais.",
        "images": ["images/fig-animais.jpg"]
    }, {
        "title": "Portifólio",
        "dates": 2017,
        "description": "Implementa uma página de portifólio, usando HTML e CSS.",
        "images": ["images/portifolio.jpg"]
    }]
};

bio.display = function() {

    var formattedHeader = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedImage = HTMLbioPic.replace("%data%", bio.image);

    $("#header").prepend(formattedHeader);
    $("#header").append(formattedRole, formattedImage, formattedWelcomeMsg);
    //dados pessoais
    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        for (var skill in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
    }

    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub);

};

education.display = function() {

    $("#education").append(HTMLschoolStart);

    for (var school in education.schools) {

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;

        $(".education-entry").append(formattedNameDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor);
    }

    $(".education-entry").append(HTMLonlineClasses);

    for (var course in education.onlineCourses) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

        $(".education-entry").append(formattedTitleSchool, formattedOnlineDates, formattedOnlineURL);
    }
};

work.display = function() {

    $("#workExperience").append(HTMLworkStart);

    for (job in work.jobs) {

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formatteDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry").append(formattedEmployerTitle, formattedLocation, formattedDates, formatteDescription);

    }
};

projects.display = function() {

    $("#projects").append(HTMLprojectStart);

    for (project in projects.projects) {

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry").append(formattedTitle, formattedDates, formattedDescription);

        if (projects.projects[project].images.length > 0) {

            for (image in projects.projects[project].images) {

                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

                $(".project-entry").append(formattedImage);

            }
        }
    }
};
// chamada das funcoes
bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
