// script.js - începe cu JSON-ul personal
const studentData = {
  personalInfo: {
    firstName: "Adriana",
    lastName: "Mocanu",
    email: "adriana.mocanu@csie.ase.ro",
    phone: "+40 123 456 789",
    birthDate: "2003-03-08"
  },
  education: {
    university: "EBUS",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1115"
  },
  skills: [
    { name: "HTML", level: 80, category: "Frontend" },
    { name: "CSS", level: 75, category: "Frontend" },
    { name: "JavaScript", level: 70, category: "Frontend" },
    { name: "Python", level: 90, category: "Backend" }
  ],
  projects: [
    {
      title: "Proiect OOP",
      description: "Un proiect personal pentru materia OOP",
      technologies: ["C++"],
      link: "https://github.com/adriana0803/OOP-Project"
    },
    {
      title: "C# Project",
      description: "Proiect cu tematică vânzări realizat în windows forms pentru o cofetărie fictivă",
      technologies: ["C#"],
      link: "https://github.com/adriana0803/C-Sharp-Project"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=Adriana+Mocanu&size=200&background=random"
};

function createPersonalPage() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  //header
  const header = document.createElement('header');
  header.className = 'hero';
  header.innerHTML = `
    <img src="${studentData.avatar}" class="avatar" alt="avatar">
    <h1>${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}</h1>
  `;
  app.appendChild(header);

  const main = document.createElement('div');
  main.className = 'main-content';

  //info personale
  const infoSection = document.createElement('section');
  infoSection.innerHTML = `
    <h2>Informatii personale</h2>
    <ul>
      <li><b>Email:</b> ${studentData.personalInfo.email}</li>
      <li><b>Telefon:</b> ${studentData.personalInfo.phone}</li>
      <li><b>Data nasterii:</b> ${studentData.personalInfo.birthDate}</li>
    </ul>
  `;
  main.appendChild(infoSection);

  //educatie
  const eduSection = document.createElement('section');
  eduSection.innerHTML = `
    <h2>Educatie</h2>
    <p><b>Universitate:</b> ${studentData.education.university}</p>
    <p><b>Facultate:</b> ${studentData.education.faculty}</p>
    <p><b>An studiu:</b> ${studentData.education.year}</p>
    <p><b>Grupa:</b> ${studentData.education.group}</p>
  `;
  main.appendChild(eduSection);

  //skills
  const skillsSection = document.createElement('section');
  skillsSection.innerHTML = `
    <h2>Skill-uri</h2>
    <ul>${studentData.skills.map(s => `<li>${s.name}: ${s.level}%</li>`).join('')}</ul>
  `;
  main.appendChild(skillsSection);

  //proiecte
  const projectsSection = document.createElement('section');
  projectsSection.innerHTML = `
    <h2>Proiecte</h2>
    ${studentData.projects.map(p => `
      <p><b>${p.title}</b>: ${p.description} 
      (<a href="${p.link}" target="_blank">GitHub</a>)</p>
    `).join('')}
  `;
  main.appendChild(projectsSection);

  app.appendChild(main);
}

document.addEventListener('DOMContentLoaded', createPersonalPage);
