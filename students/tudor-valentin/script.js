// script.js - începe cu JSON-ul personal

const studentData = {
    personalInfo: {
      firstName: "Valentin",
      lastName: "Tudor",
      email: "valy@csie.ase.ro",
      phone: "+40 123 456 789",
      birthDate: "2003-07-13"
    },
    education: {
      university: "BUES",
      faculty: "CSIE - eBusiness",
      year: 1,
      group: "15"
    },
    skills: [
      { name: "HTML", level: 80, category: "Frontend" },
      { name: "CSS", level: 75, category: "Frontend" },
      { name: "JavaScript", level: 65, category: "Frontend" },
      { name: "Soft skills", level: 80, category: "Communication"},
      { name: "Critical skills", level: 75, category: "General abilities"}
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
    avatar: "https://ui-avatars.com/api/?name=Valentin+Tudor&size=200&background=random"
  };

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
    
    const avatar = document.createElement('img');
    avatar.src = studentData.avatar;
    avatar.alt = `${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}`;
    avatar.className = 'avatar';
    
    const name = document.createElement('h1');
    name.textContent = `${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}`;
    
    header.appendChild(avatar);
    header.appendChild(name);
    app.appendChild(header);
    
    // ... continuă cu restul secțiunilor
    //personal info
    const body = document.createElement('body');
    body.className = 'body';

    const education = document.createElement('h2');
    education.className = "education"
    education.textContent = `${"Faculty: " + studentData.education.faculty} ${", year: " + studentData.education.year} ${", group: " + studentData.education.group}`;

    //skilluri
    const skills = document.createElement('button');
    skills.className = 'button';
    skills.textContent = `Skills`;
    skills.addEventListener('click', showSkills);

    const skillsList = document.createElement('div');
    skillsList.id = 'skills-list';

    //proiecte
    const projectsTitle = document.createElement('h2');
    projectsTitle.className = 'titlu-proiecte'
    projectsTitle.textContent = 'Proiecte';

    const projectsList = document.createElement('div');
    projectsList.id = 'projects-list';

    studentData.projects.forEach(project => {
      const projectTitle = document.createElement('p');
      projectTitle.textContent = project.title;
      projectsList.appendChild(projectTitle);
    });

    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerText = `That's the footer, here you can find my socials.`

    body.appendChild(education);

    body.appendChild(skills);
    body.appendChild(skillsList);

    body.appendChild(projectsTitle);
    body.appendChild(projectsList);

    app.appendChild(body);
    app.appendChild(footer);

  }

  function showSkills() {
  const skills = document.getElementById('skills-list');
  skills.innerHTML = '';

  studentData.skills.forEach(skill => {
    const skillParagraph = document.createElement('p');
    skillParagraph.textContent = `${skill.name} - Level: ${skill.level}% (${skill.category})`;
    skills.appendChild(skillParagraph);
  });
}
  
  // 3. Apelează funcția când DOM-ul este gata
  document.addEventListener('DOMContentLoaded', createPersonalPage);