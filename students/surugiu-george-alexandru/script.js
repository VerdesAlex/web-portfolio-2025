const studentData = {
  personalInfo: {
    firstName: "George-Alexandru",
    lastName: "Surugiu",
    email: "alexandru@gmail.com",
    phone: "+40 123 456 789",
    birthDate: "2004-03-10"
  },
  education: {
    university: "BUES",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1234A"
  },
  skills: [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Python", category: "Backend" }
  ],
  projects: [
    {
      title: "Portofoliu web",
      description: "Un website personal creat cu HTML si CSS",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/alexandrusurugiu/web-portfolio-2025"
    },
    {
      title: "Calculator matematic",
      description: "Calculator functional cu operatii matematice",
      technologies: ["C++"],
      link: "https://github.com/alexandrusurugiu/OOP-Calculator"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=George+Surugiua&size=200&background=random"
};

function createPersonalPage() {
  const app = document.getElementById('app');

  // Header cu avatar și nume
  const header = document.createElement('header');
  header.className = 'hero';
  const avatar = document.createElement('img');
  avatar.src = studentData.avatar;
  avatar.alt = `${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}`;
  avatar.className = 'avatar';
  const name = document.createElement('h1');
  name.textContent = `${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}`;
  header.appendChild(avatar);
  header.appendChild(name);
  app.appendChild(header);

  // Secțiune informații personale
  const personalSection = document.createElement('section');
  personalSection.className = 'personal-section';
  personalSection.innerHTML = `
    <h2>Informații personale</h2>
    <p>Email: <a href="mailto:${studentData.personalInfo.email}">${studentData.personalInfo.email}</a></p>
    <p>Telefon: ${studentData.personalInfo.phone}</p>
    <p>Data nașterii: ${studentData.personalInfo.birthDate}</p>
  `;
  app.appendChild(personalSection);

  // Secțiune educație
  const eduSection = document.createElement('section');
  eduSection.className = 'education-section';
  eduSection.innerHTML = `
    <h3>Educație</h3>
    <p>${studentData.education.university} - ${studentData.education.faculty}</p>
    <p>An: ${studentData.education.year}, Grupă: ${studentData.education.group}</p>
  `;
  app.appendChild(eduSection);

  // Secțiune skills
  const skillsSection = document.createElement('section');
  skillsSection.className = 'skills-section';
  skillsSection.innerHTML = `<h3>Competențe</h3>`;
  studentData.skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill';
    skillDiv.innerHTML = `
      <span>${skill.name} (${skill.category})</span>
    `;
    skillsSection.appendChild(skillDiv);
  });
  app.appendChild(skillsSection);

  // Secțiune proiecte (carduri)
  const projectsSection = document.createElement('section');
  projectsSection.className = 'projects-section';
  projectsSection.innerHTML = `<h3>Proiecte</h3>`;
  const cardsContainer = document.createElement('div');
  cardsContainer.className = 'projects-cards';
  studentData.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <h4>${project.title}</h4>
      <p>${project.description}</p>
      <p><strong>Tehnologii:</strong> ${project.technologies.join(', ')}</p>
      <a href="${project.link}" target="_blank">Vezi proiect</a>
    `;
    cardsContainer.appendChild(card);
  });
  projectsSection.appendChild(cardsContainer);
  app.appendChild(projectsSection);

  // Footer cu link-uri sociale
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="social-links">
      <a href="https://github.com/alexandrusurugiu" target="_blank">GitHub</a>
      <a href="https://linkedin.com/in/surugiugalexandru" target="_blank">LinkedIn</a>
    </div>
    <p>&copy; ${new Date().getFullYear()} BUES - eBusiness</p>
  `;
  app.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', createPersonalPage);