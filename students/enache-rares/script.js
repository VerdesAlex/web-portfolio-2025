// script.js - începe cu JSON-ul personal
const studentData = {
  personalInfo: {
    firstName: "Ion",
    lastName: "Popescu",
    email: "ion.popescu@csie.ase.ro",
    phone: "+40 123 456 789",
    birthDate: "2003-05-15"
  },
  education: {
    university: "BUES",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1234A"
  },
  skills: [
    { name: "HTML", level: 80, category: "Frontend" },
    { name: "CSS", level: 75, category: "Frontend" },
    { name: "JavaScript", level: 70, category: "Frontend" },
    { name: "Python", level: 60, category: "Backend" }
  ],
  projects: [
    {
      title: "Primul meu website",
      description: "Un website personal creat cu HTML și CSS",
      technologies: ["HTML", "CSS"],
      link: "https://github.com/username/project1"
    },
    {
      title: "Calculator JavaScript",
      description: "Calculator funcțional cu operații matematice",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/username/project2"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=Ion+Popescu&size=200&background=random"
};
