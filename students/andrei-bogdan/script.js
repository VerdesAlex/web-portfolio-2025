const studentData = {
  personalInfo: {
    firstName: "Bogdan",
    lastName: "Andrei",
    email: "bogdan.andrei@student.ase.ro"
  },
  education: {
    university: "ASE București",
    faculty: "CSIE",
    year: 1,
    group: "1234A"
  },
  skills: [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 70 }
  ],
  projects: [
    {
      title: "Primul meu website",
      description: "Website personal cu HTML și CSS",
      link: "https://github.com/BogdanAndrei12/project1"
    },
    {
      title: "Calculator JavaScript",
      description: "Calculator simplu cu JS",
      link: "https://github.com/BogdanAndrei12/project2"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=Bogdan+Andrei&size=150&background=3498db&color=fff"
};

function createPersonalPage() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  // Header
  const header = document.createElement('header');
  header.className = 'hero';

  const avatar = document.createElement('img');
  avatar.src = studentData.avatar;
  avatar.className = 'avatar';

  const name = document.createElement('h1');
  name.textContent = studentData.personalInfo.firstName + ' ' + studentData.personalInfo.lastName;

  const email = document.createElement('p');
  email.textContent = studentData.personalInfo.email;

  header.appendChild(avatar);
  header.appendChild(name);
  header.appendChild(email);
  app.appendChild(header);

  // Educație
  const eduSection = document.createElement('section');
  
  const eduTitle = document.createElement('h2');
  eduTitle.textContent = 'Educație';

  const eduInfo = document.createElement('p');
  eduInfo.innerHTML = '<strong>' + studentData.education.university + '</strong><br>' +
    studentData.education.faculty + ' - An ' + studentData.education.year + ', Grupa ' + studentData.education.group;

  eduSection.appendChild(eduTitle);
  eduSection.appendChild(eduInfo);
  app.appendChild(eduSection);

  // Skills
  const skillsSection = document.createElement('section');
  
  const skillsTitle = document.createElement('h2');
  skillsTitle.textContent = 'Competențe';

  const skillsContainer = document.createElement('div');
  skillsContainer.className = 'skills-container';

  studentData.skills.forEach(function(skill) {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill-item';

    const skillName = document.createElement('p');
    skillName.textContent = skill.name;

    const skillBar = document.createElement('div');
    skillBar.className = 'skill-bar';
    skillBar.innerHTML = '<div class="skill-progress" style="width: ' + skill.level + '%"></div>';

    skillDiv.appendChild(skillName);
    skillDiv.appendChild(skillBar);
    skillsContainer.appendChild(skillDiv);
  });

  skillsSection.appendChild(skillsTitle);
  skillsSection.appendChild(skillsContainer);
  app.appendChild(skillsSection);

  // Proiecte
  const projectsSection = document.createElement('section');
  
  const projectsTitle = document.createElement('h2');
  projectsTitle.textContent = 'Proiecte';

  studentData.projects.forEach(function(project) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-item';

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;

    const projectDesc = document.createElement('p');
    projectDesc.textContent = project.description;

    const projectLink = document.createElement('a');
    projectLink.href = project.link;
    projectLink.textContent = 'Vezi pe GitHub';
    projectLink.target = '_blank';

    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectDesc);
    projectDiv.appendChild(projectLink);
    projectsSection.appendChild(projectDiv);
  });

  app.appendChild(projectsSection);

  // Footer
  const footer = document.createElement('footer');
  footer.textContent = '© 2025 ' + studentData.personalInfo.firstName + ' ' + studentData.personalInfo.lastName;
  app.appendChild(footer);
}

document.addEventListener('DOMContentLoaded', createPersonalPage);