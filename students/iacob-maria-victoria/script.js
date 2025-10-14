// 1. JSON-ul studentData 
const studentData = {
  personalInfo: {
    firstName: "Maria Victoria",
    lastName: "Iacob",
    email: "iacobmaria22@csie.ase.ro",
    phone: "+40 345 345 234",
    birthDate: "2003-08-12",
    address: {
      country: "Romania",
      city: "Bucuresti",
      street: {
        name: "Aleea Florilor",
        codPostal: 567890,
      },
    },
  },
  hobbies: [
    {
      type: "Pilates",
      description: "Ore de pilates de relaxare.",
    },
    {
      type: "Sala",
      description: "Sala pentru forta!",
    },
  ],
  languages: [
    { name: "Engleza", level: "C1" },
    { name: "Franceza", level: "B2" },
  ],
  avatar: "https://api.dicebear.com/7.x/initials/svg?seed=IacobMariaVictoria",
};