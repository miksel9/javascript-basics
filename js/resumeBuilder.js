/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name: "Mikhail Selitrin",
    role: "Web developer",
    contacts: {
        mobile: "415-271-0865",
        email: "miksel9@gmail.com",
        github: "miksel9",
        location: "San Francisco"
    },
    welcomeMessage: "HIRE ME!!",
    skills: ["QA", "HTML", "CSS", "Javascript", "JQuery", "Procrastination"],
    biopic: "images/me.jpg",
    display: function () {}
};

var work = {
    jobs: [
    {
        employer: "Salesforce",
        title: "Mobile QA",
        location: "San Francisco",
        dates: "In progress",
        description: "I'm responsible for testing the S1 mobile app on iOS devices."},
    {
        employer: "MyLikes",
        title: "QA Engineer",
        location: "San Francisco",
        dates: "Mar 2016 - May 2017",
        description: "I was responsible for all funcitonal and regression testing of the MyLikes platform"}
    }],
    display: function () {}
};

var education = {
    schools: [
    {
        name: "SFSU",
        location: "San Francisco",
        degree: "Bachelor of Science",
        majors: "Information Systems",
        dates: "2008-2014"
    }],
    onlineCourses: [
    {
        title: "Front-end Developer Nanodegree",
        school: "Udacity",
        dates: "In progress",
        url: "www.udacity.com"
    }],
    display: function () {}
};

var projects = {
    projects: [
    {
        title: "Simple Minded Beats",
        dates: "In progress",
        description: "A website for a DJ collective based out of the Bay Area"
    }]
}


/*

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs["position"]);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools.name)

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedBiopic);
$("#header").append(formattedWelcomeMessage);
$("#header").append(formattedSkills);
$("#header").append()

*/