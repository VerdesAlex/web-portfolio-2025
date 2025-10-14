// 1. JSON-ul studentData (vezi mai sus)

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
}

// 3. Apelează funcția când DOM-ul este gata
document.addEventListener('DOMContentLoaded', createPersonalPage);