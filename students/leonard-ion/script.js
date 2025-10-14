const studentData = {
    personalInfo: {
      firstName: "Leonard",
      lastName: "Ion",
      email: "ionalexandru22@stud.ase.ro",
      phone: "+40 751 456 789",
      birthDate: "2003-01-13"
    },
    education: [
        {level:"bachelors", university: "BUES", faculty: "CSIE - EI English", year: "finished", group: "finished"},
        {level:"masters", university: "BUES", faculty: "eBussiness", year: 1, group: 1114}
    ],
    skills: [
      { name: "JavaScript", level: 80, category: "Backend" },
      { name: "NodeJS", level: 90, category: "Backend" },
      { name: "ExpressJS", level: 90, category: "Backend" },
      { name: "React", level: 75, category: "Frontend" },
      { name: "Java", level: 85, category: "Backend" }
    ],
    projects: [
      {
        title: "Dissertation registration",
        description: "A website through which masters students can sign up for their dissertation thesis.",
        technologies: ["JavaScript", "Node", "React"],
        link: "https://github.com/MrMorningstarL13/dissertation-registration"
      },
    ],
    avatar: "https://ui-avatars.com/api/?name=Leonard+Ion&size=200&background=random"
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
    
  }
  
  // 3. Apelează funcția când DOM-ul este gata
  document.addEventListener('DOMContentLoaded', createPersonalPage);