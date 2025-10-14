// script.js - începe cu JSON-ul personal
const studentData = {
  personalInfo: {
    firstName: "Marielena",
    lastName: "Moraru",
    email: "marielena.moraru@csie.ase.ro",
    phone: "+40 123 456 789",
    birthDate: "2003-05-15"
  },
  education: {
    university: "BUES",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1115"
  },
  skills: [
    { name: "HTML", level: 80, category: "Frontend" },
    { name: "CSS", level: 75, category: "Frontend" },
    { name: "JavaScript", level: 75, category: "Frontend" },
    { name: "Python", level: 70, category: "Backend" }
  ],
  projects: [
    {
      title: "Primul meu website: SkinGlow",
      description: "Un website personal pentru pasionații de skincare creat cu diverse tehnologii web",
      technologies: ["TYPESCRIPT", "NEXT.JS", "TAILWIND CSS"],
      link: "https://github.com/mormarielena/skinglowbabe"
    },
    {
      title: "Aplicație web pentru planificarea task-urilor",
      description: "Aplicație web de tip Single Page Application (SPA) destinată gestionării eficiente a task-urilor și utilizatorilor",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://github.com/mormarielena/PixelForce_Project"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=Marielena+Moraru&size=200&background=random"
};

function createPersonalPage() {
  const app = document.getElementById('app');
  

  // === HEADER ===
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
  
  // === INFORMAȚII PERSONALE ===
  const info = document.createElement('section');
  info.className = 'personal-info';
  info.innerHTML = `
    <h2>Informații personale</h2>
    <p><strong>Email:</strong> ${studentData.personalInfo.email}</p>
    <p><strong>Telefon:</strong> ${studentData.personalInfo.phone}</p>
    <p><strong>Data nașterii:</strong> ${studentData.personalInfo.birthDate}</p>
  `;
  app.appendChild(info);

  // === EDUCAȚIE ===
  const education = document.createElement('section');
  education.className = 'education';
  education.innerHTML = `
    <h2>Educație</h2>
    <p><strong>Universitate:</strong> ${studentData.education.university}</p>
    <p><strong>Facultate:</strong> ${studentData.education.faculty}</p>
    <p><strong>An:</strong> ${studentData.education.year}</p>
    <p><strong>Grupă:</strong> ${studentData.education.group}</p>
  `;
  app.appendChild(education);

  // === SKILL-URI ===
  const skillsSection = document.createElement('section');
  skillsSection.className = 'skills';
  
  const skillsTitle = document.createElement('h2');
  skillsTitle.textContent = 'Skill-uri';
  skillsSection.appendChild(skillsTitle);

  studentData.skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill';

    const skillLabel = document.createElement('span');
    skillLabel.textContent = `${skill.name} (${skill.category})`;

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';

    const progress = document.createElement('div');
    progress.className = 'progress';
    progress.style.width = `${skill.level}%`;
    progress.textContent = `${skill.level}%`;



    progressBar.appendChild(progress);
    skillDiv.appendChild(skillLabel);
    skillDiv.appendChild(progressBar);
    skillsSection.appendChild(skillDiv);
  });

  app.appendChild(skillsSection);

  // === PROIECTE ===
  const projectsSection = document.createElement('section');
  projectsSection.className = 'projects';
  const projectsTitle = document.createElement('h2');
  projectsTitle.textContent = 'Proiecte';
  projectsSection.appendChild(projectsTitle);

  studentData.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';

    const title = document.createElement('h3');
    title.textContent = project.title;

    const desc = document.createElement('p');
    desc.textContent = project.description;

    const tech = document.createElement('p');
    tech.innerHTML = `<strong>Tehnologii:</strong> ${project.technologies.join(', ')}`;


    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(tech);
    card.appendChild(link);
    projectsSection.appendChild(card);
  });

  // === FOOTER ===
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  footer.innerHTML = `
    <p>© ${new Date().getFullYear()} ${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName} | Toate drepturile rezervate</p>
  `;
  app.appendChild(footer);
}

// === Event principal: când DOM-ul este gata ===
document.addEventListener('DOMContentLoaded', createPersonalPage);