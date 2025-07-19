
import m1 from '../assets/img/M1.jpg'
import m2 from '../assets/img/M2.jpg'
import m3 from '../assets/img/M3.jpg'
import m4 from '../assets/img/M4.jpg'
import m5 from '../assets/img/M5.jpg'
import m6 from '../assets/img/M6.jpg'
import m7 from '../assets/img/M7.jpg'
import m8 from '../assets/img/M8.jpg'
import m9 from '../assets/img/M9.jpg'
import m10 from '../assets/img/M10.jpg'
import m11 from '../assets/img/M11.jpg'
import m12 from '../assets/img/M12.jpg'

type Proprietaire = {
  type: "agent" | "prospect";
  nom: string;
  tel: string;
  email: string;
  agence?: string;
  avatar?: string;
};

type Annonce = {
  id: number;
  titre: string;
  ville: string;
  prix: number;
  images: string[];
  type: string;
  date: string;
  chambres: number;
  douches: number;
  surface: number;
  proprietaire: Proprietaire;
  description: string
};

// Tes annonces ici ⬇️
export const AnnoncesMock: Annonce[] = [

  {
    id: 1,
    titre: 'Appartement T3 – Yaoundé',
    ville: 'Yaoundé',
    prix: 45000,
    images: [m4, m1, m2],
    type: 'Appartement',
    date: "2023-06-01",
    chambres: 2,
    douches: 1,
    surface: 70,
    description: "Dans une barrière sécurisée. Caractéristiques : cuisine, douche, compteur prépayé, chambre.",
    proprietaire: {
      type: "agent",
      nom: "Jean Mbarga",
      tel: "+237 690000001",
      email: "contact@doualaimmo.com",
      // agence: "Douala Immo", // facultatif pour agent
      // avatar: "/avatars/agent1.jpg", // facultatif
    }
  },

  {
    id: 2,
    titre: 'Villa moderne – Douala',
    ville: 'Douala',
    prix: 120000,
    images: [m5, m6, m7],
    type: 'Villa',
    date: "2023-06-02",
    chambres: 4,
    douches: 3,
    surface: 200,
    description: "Dans une barrière sécurisée. Caractéristiques : cuisine, douche, compteur prépayé, chambre.",
    proprietaire: {
      type: "agent",
      nom: "Alice Kamga",
      tel: "+237 690000002",
      email: "contact@doualaimmo.com",
      // agence: "Douala Immo", // facultatif pour agent
      // avatar: "/avatars/agent1.jpg", // facultatif
    }
  },

  {
    id: 3,
    titre: 'Studio Bonamoussadi',
    ville: 'Douala',
    prix: 30000,
    images: [m6, m3, m4],
    type: 'Studio',
    date: "2023-06-03",
    chambres: 1,
    douches: 1,
    surface: 30,
    description: "Dans une barrière sécurisée. Caractéristiques : cuisine, douche, compteur prépayé, chambre.",
    proprietaire: {
      type: "prospect",
      nom: "Pauline Tchoumi",
      tel: "+237 690000003",
      email: "jeanmvondo@gmail.com",
      // avatar: "/avatars/prospect1.jpg" // facultatif 
    }
  },

  {
    id: 4,
    titre: 'Maison familiale – Kribi',
    ville: 'Kribi',
    prix: 80000,
    images: [m7, m8, m9],
    type: 'Maison',
    date: "2023-06-04",
    chambres: 3,
    douches: 2,
    surface: 120,
    description: "Dans une barrière sécurisée. Caractéristiques : cuisine, douche, compteur prépayé, chambre.",
    proprietaire: {
      type: "prospect",
      nom: "Brice Etoa",
      tel: "+237 690000004",
      email: "jeanmvondo@gmail.com",
      // avatar: "/avatars/prospect1.jpg" // facultatif   
    }
  },

  {
    id: 5,
    titre: 'Appartement 2 pièces – Bafoussam',
    ville: 'Bafoussam',
    prix: 35000,
    images: [m8, m10, m11],
    type: 'Appartement',
    date: "2023-06-05",
    chambres: 2,
    douches: 1,
    surface: 60,
    description: "Dans une barrière sécurisée. Caractéristiques : cuisine, douche, compteur prépayé, chambre.",
    proprietaire: {
      type: "prospect",
      nom: "Diane Njoya",
      tel: "+237 690000005",
      email: "jeanmvondo@gmail.com",
      // avatar: "/avatars/prospect1.jpg" // facultatif   

    }
  },

  {
    id: 6,
    titre: 'Duplex – Bonapriso',
    ville: 'Douala',
    prix: 150000,
    images: [m9, m12, m1],
    type: 'Duplex',
    date: "2023-06-06",
    chambres: 5,
    douches: 3,
    surface: 250,
    description: "Dans une barrière sécurisée. Caractéristiques : cuisine, douche, compteur prépayé, chambre.",
    proprietaire: {
      type: "agent",
      nom: "Eric Nlend",
      tel: "+237 690000006",
      email: "contact@doualaimmo.com",
      // agence: "Douala Immo", // facultatif pour agent
      // avatar: "/avatars/agent1.jpg", // facultatif
    }
  },

  {
    id: 7,
    titre: 'Duplex – Dschang',
    ville: 'Dschang',
    prix: 150000,
    images: [m10, m2, m3],
    type: 'Duplex',
    date: "2023-06-07",
    chambres: 4,
    douches: 3,
    surface: 210,
    description: "Dans une barrière sécurisée. Caractéristiques : cuisine, douche, compteur prépayé, chambre.",
    proprietaire: {
      type: "agent",
      nom: "Laura Ndinga",
      tel: "+237 690000007",
      email: "contact@doualaimmo.com",
      // agence: "Douala Immo", // facultatif pour agent
      // avatar: "/avatars/agent1.jpg", // facultatif
    }
  },

  {
    id: 8,
    titre: 'Duplex – Ange Raphael',
    ville: 'Douala',
    prix: 150000,
    images: [m11, m4, m5],
    type: 'Duplex',
    date: "2023-06-08",
    chambres: 4,
    douches: 2,
    surface: 190,
    description: "Dans une barrière sécurisée. Caractéristiques : cuisine, douche, compteur prépayé, chambre.",
    proprietaire: {
      type: "agent",
      nom: "Gaston Mvondo",
      tel: "+237 690000008",
      email: "contact@doualaimmo.com",
      // agence: "Douala Immo", // facultatif pour agent
      // avatar: "/avatars/agent1.jpg", // facultatif
    }
  },



  {
    id: 9,
    titre: 'Duplex – Bonapriso',
    ville: 'Douala',
    prix: 150000,
    images: [m12, m6, m7],
    type: 'Duplex',
    date: "2023-06-09",
    chambres: 5,
    douches: 3,
    surface: 240,
    description: "Dans une barrière sécurisée. Caractéristiques : cuisine, douche, compteur prépayé, chambre.",
    proprietaire: {
      type: "prospect",
      nom: "Céline Fopa",
      tel: "+237 690000009",
      email: "jeanmvondo@gmail.com",
      // avatar: "/avatars/prospect1.jpg" // facultatif
    }
  },

  {
    id: 10,
    titre: 'Appartement T3 – Yaoundé',
    ville: 'Yaoundé',
    prix: 45000,
    images: [m1, m8, m9],
    type: 'Appartement',
    date: "2023-06-10",
    chambres: 2,
    douches: 1,
    surface: 75,
    description: "Dans une barrière sécurisée. Caractéristiques : cuisine, douche, compteur prépayé, chambre.",
    proprietaire: {
      type: "prospect",
      nom: "Arnaud Nguem",
      tel: "+237 690000010",
      email: "jeanmvondo@gmail.com",
      // avatar: "/avatars/prospect1.jpg" // facultatif
    }
  },

  {
    id: 11,
    titre: 'Villa moderne – Douala',
    ville: 'Douala',
    prix: 120000,
    images: [m2, m10, m11],
    type: 'Villa',
    date: "2023-06-11",
    chambres: 4,
    douches: 3,
    surface: 180,
    description: "Dans une barrière sécurisée. Caractéristiques : cuisine, douche, compteur prépayé, chambre.",
    proprietaire: {
      type: "agent",
      nom: "Nathalie Koumba",
      tel: "+237 690000011",
      email: "contact@doualaimmo.com",
      // agence: "Douala Immo", // facultatif pour agent
      // avatar: "/avatars/agent1.jpg", // facultatif
    }
  },

  {
    id: 12,
    titre: 'Studio cosy – Bonamoussadi',
    ville: 'Douala',
    prix: 30000,
    images: [m3, m5, m12],
    type: 'Studio',
    date: "2023-06-12",
    chambres: 1,
    douches: 1,
    surface: 28,
    description: "Dans une barrière sécurisée. Caractéristiques : cuisine, douche, compteur prépayé, chambre.",
    proprietaire: {
      type: "agent",
      nom: "Yvan Biya",
      tel: "+237 690000012",
      email: "contact@doualaimmo.com",
      // agence: "Douala Immo", // facultatif pour agent
      // avatar: "/avatars/agent1.jpg", // facultatif
    }
  },
]


