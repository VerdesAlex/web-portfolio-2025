const studentData = {
  personalInfo: {
    firstName: "Stefan",
    lastName: "Dumitru",
    email: "stefan.dumitru@stud.ase.ro",
    phone: "+40 123 456 789",
    birthdate: "15.03.2003"
  },
  education: {
    university: "BUS",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1234A"
  },
  skills: [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 70 },
    { name: "Python", level: 60 }
  ],
  projects: [
    {
      title: "Primul meu website",
      description: "Un website personal creat cu HTML și CSS",
      technologies: ["HTML", "CSS"],
      link: "https://github.com/stefandumitru/primul-website"
    },
    {
      title: "Calculator JavaScript",
      description: "Calculator funcțional cu operații matematice",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/stefandumitru/calculator-js"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=Stefan+Dumitru&size=200&background=random"
};

function createPersonalPage() {
  createHeader();
  createPersonalInfoSection();
  createEducationSection();
  createSkillsSection();
  createProjectsSection();
  createFooter();
}

function createFooter() {
  const app = document.getElementById('app');
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.textContent = 'Instagram @stefandt21 | GitHub @stefandumitru | LinkedIn @stefandumitru';
  app.appendChild(footer);
}

function createHeader() {
  const app = document.getElementById('app');
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
}

function createPersonalInfoSection() {
  const app = document.getElementById('app');
  const section = document.createElement('section');
  section.className = 'section';
  
  const title = document.createElement('h2');
  title.textContent = 'Informații Personale'; 
  const email = document.createElement('p');
  email.innerHTML = `Email: ${studentData.personalInfo.email}`;
  const phone = document.createElement('p');
  phone.innerHTML = `Telefon: ${studentData.personalInfo.phone}`;
  const birthdate = document.createElement('p');
  birthdate.textContent = `Data nașterii: ${studentData.personalInfo.birthdate}`;
  
  section.appendChild(title);
  section.appendChild(email);
  section.appendChild(phone);
  section.appendChild(birthdate);
  app.appendChild(section);
}

function createEducationSection() {
  const app = document.getElementById('app');
  const section = document.createElement('section');
  section.className = 'section';
  
  const title = document.createElement('h2');
  title.textContent = 'Educație';
  const university = document.createElement('p');
  university.textContent = `Universitate: ${studentData.education.university}`;
  const faculty = document.createElement('p');
  faculty.textContent = `Facultate: ${studentData.education.faculty}`;
  const year = document.createElement('p');
  year.textContent = `Anul: ${studentData.education.year}`;
  const group = document.createElement('p');
  group.textContent = `Grupa: ${studentData.education.group}`;
  
  section.appendChild(title);
  section.appendChild(university);
  section.appendChild(faculty);
  section.appendChild(year);
  section.appendChild(group);
  app.appendChild(section);
}

function createSkillsSection() {
  const app = document.getElementById('app');
  const section = document.createElement('section');
  section.className = 'section';
  
  const title = document.createElement('h2');
  title.textContent = 'Competențe';
  
  const skillsList = document.createElement('ul');
  
  studentData.skills.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.textContent = `${skill.name}: ${skill.level}%`;
    skillsList.appendChild(skillItem);
  });
  
  section.appendChild(title);
  section.appendChild(skillsList);
  app.appendChild(section);
}

function createProjectsSection() {
  const app = document.getElementById('app');
  const section = document.createElement('section');
  section.className = 'section';
  
  const title = document.createElement('h2');
  title.textContent = 'Proiecte';
  
  const projectsList = document.createElement('ul');
  
  studentData.projects.forEach(project => {
    const projectItem = document.createElement('li');
    
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;
    
    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    
    const projectLink = document.createElement('a');
    projectLink.href = project.link;
    projectLink.textContent = 'Vezi pe GitHub';
    projectLink.target = '_blank';
    
    projectItem.appendChild(projectTitle);
    projectItem.appendChild(projectDescription);
    projectItem.appendChild(projectLink);
    projectsList.appendChild(projectItem);
  });
  
  section.appendChild(title);
  section.appendChild(projectsList);
  app.appendChild(section);
}

document.addEventListener('DOMContentLoaded', createPersonalPage);