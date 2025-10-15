const studentData = {
  personalInfo: {
    firstName: "Maria",
    lastName: "Matei",
    email: "matei.maria@csie.ase.ro",
    phone: "+40 123 456 789",
    birthDate: "2003-02-24"
  },
  education: {
    university: "BUES",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1234A"
  },
  skills: [
    { name: "HTML", level: 20, category: "Frontend" },
    { name: "CSS", level: 45, category: "Frontend" },
    { name: "JavaScript", level: 30, category: "Full-Stack" },
    { name: "Python", level: 45, category: "Data Science" },
    { name: "Python", level: 65, category: "OOP" },
    { name: "Java", level: 75, category: "OOP" },
    { name: "C++", level: 50, category: "OOP" },
    { name: "C", level: 60, category: "Data-Structures" }
  ],
  projects: [
    {
      title: "Movie-app",
      description: "That's all folks",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/MateiBiancaM/movie-app"
    },
    {
      title: "Metoda pivotarii",
      description: "Pivotarea matricilor algebra liniara",
      technologies: ["C/C++"],
      link: "https://github.com/VerdesAlex/Metoda-Pivotarii"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=Maria+Matei&size=200&background=e795e3&color=ffffff"
};



function createPersonalPage() {
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
  

  const personalInfoSection = document.createElement('section');
  personalInfoSection.className = 'card';
  
  const email = document.createElement('p');
  email.textContent = `Email: ${studentData.personalInfo.email}`;
  email.className = 'card';
  
  const phone = document.createElement('p');
  phone.textContent = `Telefon: ${studentData.personalInfo.phone}`;
  phone.className = 'card';
  
  const birthDate = document.createElement('p');
  birthDate.textContent = `Data Nașterii: ${studentData.personalInfo.birthDate}`;
  birthDate.className = 'card';
  
  personalInfoSection.appendChild(email);
  personalInfoSection.appendChild(phone);
  personalInfoSection.appendChild(birthDate);
  app.appendChild(personalInfoSection);

  const educationSection = document.createElement('section');
  educationSection.className = 'card';
  
  const university = document.createElement('p');
  university.textContent = `Universitatea: ${studentData.education.university}`;
  
  const faculty = document.createElement('p');
  faculty.textContent = `Facultatea: ${studentData.education.faculty}`;
  
  const year = document.createElement('p');
  year.textContent = `Anul: ${studentData.education.year}`;
  
  const group = document.createElement('p');
  group.textContent = `Grupa: ${studentData.education.group}`;
  
  educationSection.appendChild(university);
  educationSection.appendChild(faculty);
  educationSection.appendChild(year);
  educationSection.appendChild(group);
  app.appendChild(educationSection);
  
  const skillsSection = document.createElement('section');
  skillsSection.className = 'card';
  
  studentData.skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-card';
    
    const skillName = document.createElement('h3');
    skillName.textContent = skill.name;
    
    const progressBarContainer = document.createElement('div');
    progressBarContainer.className = 'progress-bar-container';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.width = `${skill.level}%`;
    
    progressBarContainer.appendChild(progressBar);
    skillItem.appendChild(skillName);
    skillItem.appendChild(progressBarContainer);
    
    skillsSection.appendChild(skillItem);
  });
  
  app.appendChild(skillsSection);
  
  const projectsSection = document.createElement('section');
  projectsSection.className = 'card';
  
  studentData.projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'card';
    
    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;
    
    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    
    const projectLink = document.createElement('a');
    projectLink.href = project.link;
    projectLink.textContent = 'Vezi pe GitHub';
    projectLink.target = '_blank';
    
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(projectLink);
    
    projectsSection.appendChild(projectCard);
  });
  
  app.appendChild(projectsSection);
  
  const footer = document.createElement('footer');
  footer.className = 'card';
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/username' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/username' },
    { name: 'Twitter', url: 'https://twitter.com/username' }
  ];
  
  socialLinks.forEach(link => {
    const socialLink = document.createElement('a');
    socialLink.href = link.url;
    socialLink.textContent = link.name;
    socialLink.target = '_blank';
    
    footer.appendChild(socialLink);
  });
  
  app.appendChild(footer);

  const cards = document.querySelectorAll('.card');

const wrapper = document.createElement('div');
wrapper.classList.add('center-wrapper');

if (cards.length > 0) {
  const firstBox = cards[0];
  firstBox.parentNode.insertBefore(wrapper, firstBox);
}

cards.forEach(card => {
  wrapper.appendChild(card);
});
}

// 3. Apelează funcția când DOM-ul este gata
document.addEventListener('DOMContentLoaded', createPersonalPage);

async function loadStudents() {
  try {
    const response = await fetch('students.json');
    const data = await response.json();
    renderStudentCards(data.students);
  } catch (error) {
    console.error('Eroare la încărcarea studenților:', error);
  }
}

function renderStudentCards(students) {
  const grid = document.getElementById('students-grid');
  
  students.forEach(student => {
    const card = document.createElement('div');
    card.className = 'student-card';
    
    const avatar = document.createElement('img');
    avatar.src = student.avatar;
    avatar.alt = `${student.firstName} ${student.lastName}`;
    
    const name = document.createElement('h3');
    name.textContent = `${student.firstName} ${student.lastName}`;
    
    const group = document.createElement('p');
    group.textContent = `Grupa: ${student.group}`;
    
    const link = document.createElement('a');
    link.href = `students/${student.folder}/index.html`;
    link.textContent = 'Vezi portofoliu →';
    link.className = 'portfolio-link';
    
    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(group);
    card.appendChild(link);
    
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', loadStudents);