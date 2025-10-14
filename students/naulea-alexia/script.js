const studentData = {
  personalInfo: {
    firstName: "Alexia",
    lastName: "Naulea",
    email: "nauleaalexia22@stud.ase.ro",
    phone: "+40 74 444 444",
    birthDate: "2003-09-23"
  },
  education: {
    university: "Bucharest University of Economic Studies",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1113"
  },
  skills: [
    { name: "HTML", level: 30, category: "Frontend" },
    { name: "R", level: 60, category: "Data Analysis" },
    { name: "Wix", level: 90, category: "Website Builder" },
    { name: "PowerBI", level: 70, category: "Business Intelligence" }
  ],
  projects: [
    {
      title: "Analiza sanatatii la nivel mondial: particularizare asupra pacientilor cu diabet",
      description: "Analiza diabetului la nivel mondial in R",
      technologies: ["R"]
    },
    {
      title: "Site NerveRepack",
      description: "Site przentare proiect NerveRepack",
      technologies: ["HTML", "Wix"],
      link: "https://www.nerverepack.eu/"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=Alexia+Naulea&size=200&background=random"
};