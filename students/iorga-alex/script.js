// script.js - începe cu JSON-ul personal
const studentData = {
  personalInfo: {
    firstName: "Iorga",
    lastName: "Alexandru",
    email: "iorga.alex@csie.ase.ro",
    phone: "+40700000000",
    birthDate: "2004-04-11"
  },
  education: {
    university: "ASE",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1114"
  },
  skills: [
    { name: "ASP.NET Core", level: 70, category: "Backend" },
    { name: "CSS", level: 75, category: "Frontend" },
    { name: "JavaScript", level: 70, category: "Frontend" }
  ],
  projects: [
    {
      title: "Snake Game",
      description: "A small snake game made with HTML and CSS",
      technologies: ["HTML", "CSS"],
      link: "https://github.com/username/project1"
    },
    {
      title: "Notes App",
      description: ".Net Core web application for taking notes",
      technologies: ["HTML", "CSS", "JavaScript", "ASP.NET Core"],
      link: "https://github.com/username/project2"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=Iorga+Alex&size=200&background=random"
};