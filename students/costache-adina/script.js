// 1. JSON-ul studentData (vezi mai sus)
const studentData = [{
  personalInfo: {
    firstName: "Cristiana",
    lastName: "Iordache",
    email: "iordache.cristiana@csie.ase.ro",
    phone: "+40 123 456 789",
    birthDate: "2003-12-10"
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
  avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthevets.ro%2Fcum-sa-ingrijesti-o-pisica-scottish-fold-sfaturi-si-recomandari%2F&psig=AOvVaw3tvbFOidQ6L0ah2yEn7BF2&ust=1760544227055000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNDs3L2IpJADFQAAAAAdAAAAABAE"
},
{
  personalInfo: {
    firstName: "Adina",
    lastName: "Costache",
    email: "adina.costache@csie.ase.ro",
    phone: "+40 123 456 789",
    birthDate: "2003-12-10"
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
}];

// 2. Funcție pentru crearea structurii paginii
function createPersonalPage() {
  const app = document.getElementById('app');
  
  // Creează elementele DOM dinamic:
  // - Header cu avatar și nume
  // - Secțiune informații personale
  // - Secțiune educație
  // - Secțiune skills (cu bare de progres)
  // - Secțiune proiecte (carduri)
  // - Footer cu link-uri sociale
  
  // Exemplu pentru header:
  const header = document.createElement('header');
  header.className = 'hero';
  
 
  app.appendChild(header);
  
  // ... continuă cu restul secțiunilor
  
  for(let student of studentData) {
    const avatar = document.createElement('img');
    avatar.src = student.avatar;
    avatar.alt = `${student.personalInfo.firstName} ${student.personalInfo.lastName}`;
    avatar.className = 'avatar';
    const name = document.createElement('h1');
    name.textContent = `${student.personalInfo.firstName} ${student.personalInfo.lastName}`;
    app.appendChild(avatar);
    app.appendChild(name);

    const personalInfoSection = document.createElement('section');
    personalInfoSection.className = 'personal-info';
    const firstName = document.createElement('p');
    firstName.textContent = `First Name: ${student.personalInfo.firstName}`;
    const lastName = document.createElement('p');
    lastName.textContent = `Last Name: ${student.personalInfo.lastName}`;
    const email = document.createElement('p');
    email.textContent = `Email: ${student.personalInfo.email}`;
    const phone = document.createElement('p');
    phone.textContent = `Phone: ${student.personalInfo.phone}`;
    const birthDate = document.createElement('p');
    birthDate.textContent = `Birth Date: ${student.personalInfo.birthDate}`;
    personalInfoSection.appendChild(firstName);
    personalInfoSection.appendChild(lastName);
    personalInfoSection.appendChild(email);
    personalInfoSection.appendChild(phone);
    personalInfoSection.appendChild(birthDate);
    app.appendChild(personalInfoSection);

    const education = document.createElement('p');
    const educationTitle = document.createElement('h2');
    educationTitle.textContent = 'Education';
    personalInfoSection.appendChild(educationTitle);
    education.textContent = `Education: ${student.education.university}, ${student.education.faculty}, Year ${student.education.year}, Group ${student.education.group}`;
    personalInfoSection.appendChild(education);
    
    const skillsSection = document.createElement('section');
    skillsSection.className = 'skills';
    const skillsTitle = document.createElement('h2');
    skillsTitle.textContent = 'Skills';
    skillsSection.appendChild(skillsTitle);
    student.skills.forEach(skill => {
      const skillContainer = document.createElement('div');
      skillContainer.className = 'skill';
      const skillName = document.createElement('span');
      skillName.textContent = skill.name;
      const skillBar = document.createElement('progress');
      skillBar.className = 'skill-bar';
      skillBar.level = skill.level;
      skillBar.max = 100;
      skillBar.value = skill.level;
      const skillCategory = document.createElement('span');
      skillCategory.textContent = `(${skill.category})`;
      skillName.appendChild(skillCategory);
      skillContainer.appendChild(skillName);
      skillContainer.appendChild(skillBar);
      skillsSection.appendChild(skillContainer);
    });
    app.appendChild(skillsSection);

    const projectsSection = document.createElement('section');
    projectsSection.className = 'projects';
    const projectsTitle = document.createElement('h2');
    projectsTitle.textContent = 'Projects';
    projectsSection.appendChild(projectsTitle);
    student.projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      const projectTitle = document.createElement('h3');
      projectTitle.textContent = project.title;
      const projectDescription = document.createElement('p');
      projectDescription.textContent = project.description;
      const projectTechnologies = document.createElement('p');
      projectTechnologies.textContent = `Technologies: ${project.technologies.join(', ')}`;
      const projectLink = document.createElement('div');
      projectLink.className = 'project-link';
      projectLink.addEventListener('click', () => {
        window.open(project.link, '_blank');
      });
      projectLink.textContent = 'View Project';
      projectCard.appendChild(projectTitle);
      projectCard.appendChild(projectDescription);
      projectCard.appendChild(projectTechnologies);
      projectCard.appendChild(projectLink);
      projectsSection.appendChild(projectCard);
    });
    app.appendChild(projectsSection);

    
  }
    
  
}
const footer = document.createElement('footer');
    footer.className = 'footer';
    const socialLinks = document.createElement('div');
    socialLinks.className = 'social-links';
    const linkedinLink = document.createElement('a');
    linkedinLink.href = 'https://www.linkedin.com/in/cristiana-iordache-b6304b277/';
    linkedinLink.target = '_blank';
    linkedinLink.textContent = 'LinkedIn';
    app.appendChild(footer);
// 3. Apelează funcția când DOM-ul este gata
document.addEventListener('DOMContentLoaded', createPersonalPage);