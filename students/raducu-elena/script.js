const studentData = {
  personalInfo: {
    firstName: "Elena-Nicole",
    lastName: "Raducu",
    email: "raducuelena21@stud.ase.ro",
    phone: "+40 123 456 789",
    birthDate: "2001-12-06"
  },
  education: {
    university: "ASE",
    faculty: "CSIE - E-Business",
    year: 1,
    group: "1115"
  },
  skills: [
    { name: "HTML", level: 50, category: "Frontend" },
    { name: "CSS", level: 50, category: "Frontend" },
    { name: "JavaScript", level: 50, category: "Frontend" },
    { name: "Python", level: 60, category: "Backend" }
  ],
  projects: [
    { title: "My first website", description: "Un site personal creat cu HTML și CSS", link: "#" },
    { title: "Bazele structurilor de date", description: "Seminare si exercitii - Limbaj: C", link: "#" }
  ],
  avatar: "https://ui-avatars.com/api/?name=Elena+Raducu&size=200&background=random"
};

function createPersonalPage() {
  const app = document.getElementById("app");
  app.className = "container";

  const header = document.createElement("header");
  header.className = "hero";

  const avatar = document.createElement("img");
  avatar.src = studentData.avatar;
  avatar.alt = "Avatar student";
  avatar.className = "avatar";

  const name = document.createElement("h1");
  name.textContent = `${studentData.personalInfo.firstName} ${studentData.personalInfo.lastName}`;

  header.appendChild(avatar);
  header.appendChild(name);
  app.appendChild(header);

  const infoSection = document.createElement("section");
  infoSection.className = "info";
  infoSection.innerHTML = `
    <h2>Informații personale</h2>
    <p>Email: ${studentData.personalInfo.email}</p>
    <p>Telefon: ${studentData.personalInfo.phone}</p>
    <p>Data nașterii: ${studentData.personalInfo.birthDate}</p>
  `;
  app.appendChild(infoSection);

  const eduSection = document.createElement("section");
  eduSection.className = "education";
  eduSection.innerHTML = `
    <h2>Educație</h2>
    <p>${studentData.education.university}</p>
    <p>${studentData.education.faculty}</p>
    <p>An: ${studentData.education.year}, Grupa: ${studentData.education.group}</p>
  `;
  app.appendChild(eduSection);

  const skillsSection = document.createElement("section");
  skillsSection.className = "skills";
  const skillTitle = document.createElement("h2");
  skillTitle.textContent = "Competențe";
  skillsSection.appendChild(skillTitle);

  studentData.skills.forEach(skill => {
    const skillDiv = document.createElement("div");
    skillDiv.className = "skill";
    const top = document.createElement("div");
    top.className = "skill-top";
    const label = document.createElement("span");
    label.className = "skill-name";
    label.textContent = skill.name;
    const tag = document.createElement("span");
    tag.className = "cat";
    tag.textContent = skill.category;
    const bar = document.createElement("div");
    bar.className = "bar";
    const fill = document.createElement("div");
    fill.className = "fill";
    fill.style.width = skill.level + "%";
    top.appendChild(label);
    top.appendChild(tag);
    bar.appendChild(fill);
    skillDiv.appendChild(top);
    skillDiv.appendChild(bar);
    skillDiv.addEventListener("mouseenter", () => skillDiv.classList.add("highlight"));
    skillDiv.addEventListener("mouseleave", () => skillDiv.classList.remove("highlight"));
    skillsSection.appendChild(skillDiv);
  });
  app.appendChild(skillsSection);

  const projectSection = document.createElement("section");
  projectSection.className = "projects";
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = "Proiecte";
  projectSection.appendChild(projectTitle);

  studentData.projects.forEach(p => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    const title = document.createElement("h3");
    title.textContent = p.title;
    const desc = document.createElement("p");
    desc.textContent = p.description;
    projectDiv.appendChild(title);
    projectDiv.appendChild(desc);
    projectDiv.addEventListener("click", () => alert(`Link proiect: ${p.link}`));
    projectSection.appendChild(projectDiv);
  });
  app.appendChild(projectSection);
}

document.addEventListener("DOMContentLoaded", createPersonalPage);