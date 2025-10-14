const studentData = {
  personalInfo: {
    firstName: "Andrei",
    lastName: "Ciocan",
    email: "ciocanandrei22@stud.ase.ro",
    phone: "+40 72 727 222",
    birthDate: "2003-09-04"
  },
  education: {
    university: "BUES",
    faculty: "CSIE - eBusiness",
    year: 1,
    group: "1113"
  },
  skills: [
    { name: "Java SpringBoot", level: 99, category: "Backend" },
    { name: "Claude AI", level: 80, category: "Vibecoding" },
    { name: "Kotlin - Jetpack Compose", level: 70, category: "Mobile development" },
    { name: "Grafana", level: 90, category: "Backend/Monitoring" }
  ],
  projects: [
    {
      title: "Travel Companion",
      description: "Mobile Application for Efficient Travel Planning",
      technologies: ["Kotlin with Jetpack Compose UI toolkit", "Ktor", "Cloud Firestore", "Stripe", "Amadeus API"],
      link: "https://github.com/AndreiHammer/bachelor-thesis-travel-companion"
    },
    {
      title: "City Mapping",
      description: "PDF to JSON Converter",
      technologies: ["Python", "OpenAI API", "LangChain", "Pydantic"],
      link: "https://github.com/AndreiHammer/cityMapping"
    }
  ],
  avatar: "https://ui-avatars.com/api/?name=Andrei+Ciocan&size=200&background=random"
};
