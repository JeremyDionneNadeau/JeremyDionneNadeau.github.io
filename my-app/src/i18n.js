import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Full Stack Developer": "Full Stack Developer",
      "English": "English",
      "French": "French",
    }
  },
  fr: {
    translation: {

      // Header
      "Full Stack Developer": "Développeur Full Stack",
      "About": "À propos",
      "About me": "À propos de moi",
      "English": "Anglais",
      "French": "Français",
      "Resume": "Résumé",
      "Contact": "Contactez-moi",
      "Contact me!": "Contactez-moi !",

      // About
      "Scrum certified full stack developer, with more than 3 years of experience. Computer enthusiast, I know several computer languages (Python, Java, C, C++, Javascript, PHP, AngularJS...) and create several personal and school projects. Versatile, I master the different technical stages of creating a website or a web application; from understanding user needs to front-end and back-end development and maintenance. Learning new technologies fascinates me.": "Développeur full stack certifié Scrum, avec plus de 3 ans d'expérience. Mordu d'informatique, je connais plusieurs langages informatiques (Python, Java, C, C++, Javascript, PHP, AngularJS...) et crée plusieurs projets personnels et scolaires. Polyvalent, je maîtrise les différentes étapes techniques de création d'un site internet ou d'une application web ; de la compréhension des besoins des utilisateurs au développement et à la maintenance front-end et back-end. Apprendre de nouvelles technologies me passionne.",
      "Ready to work !": "Prêt à travailler !",
      "Improving my skills, skiing and reading": "Améliorer mes compétences, le ski et la lecture",
      "This is an amazing product that has transformed my business. I highly recommend it to anyone looking for a solution to their problems.": "C'est un produit incroyable qui a transformé mon entreprise. Je le recommande vivement à tous ceux qui cherchent une solution à leurs problèmes.",
      "This product has greatly improved my life! It has made my life so much easier.": "Ce produit a grandement amélioré ma vie ! Cela m'a rendu la vie tellement plus facile.",
      "This website is efficient and well-designed. I highly recommend this developper to anyone.": "Ce site est efficace et bien conçu. Je recommande fortement ce développeur à tout le monde.",
      
      // Contact us
      "Name": "Nom",
      "Email": "Courriel",
      "Message": "Message",
      "Send": "Envoyer",
      "Angrignon Park": "Parc Angrignon",

      // Resume
      "Resume": "Résumé",
      "Highly motivated and skilled software developer with 3 years of experience in building and maintaining web applications.": "Développeur de logiciels grandement motivé et qualifié avec 3 ans d'expérience dans la création et la maintenance d'applications Web.",
      "Summary": "Sommaire",
      "Education": "Éducation",
      "Bachelor in Computer Science and Software Engineering": "Baccalauréat en informatique et génie logiciel",
      "Graduated": "Diplomé",
      "This program aims to train computer scientists capable of contributing to computer applications in various fields. The common core, a balanced set of theoretical, methodological and technical courses, leads to solid knowledge in computer science and software engineering. It is mainly based on basic concepts in software engineering, mathematics, programming, hardware and software systems.": "Ce programme vise à former des informaticiens aptes à contribuer à des applications de l'informatique à divers domaines. Le tronc commun, ensemble équilibré de cours théoriques, méthodologiques et techniques, conduit à de solides connaissances en informatique et génie logiciel. Il s'appuie principalement sur des notions de base en génie logiciel, mathématiques, programmation, systèmes matériels et logiciels.",
      "Experience": "Expérience",
      "Python/Django Developer": "Développeur Python/Django",
      "Developed and maintained web applications using Django, Python, Wagtail FASTAPI, Celery, SQLite, Redis, JSON, Javascript, HTML, CSS and Bootstrap": "Développer et maintenir des applications Web en utilisant Django, Python, Wagtail FASTAPI, Celery, SQLite, Redis, JSON, Javascript, HTML, CSS et Bootstrap",
      "Write code that is reusable, testable, and efficient.": "Écrire du code réutilisable, testable et efficace.",
      "Implemented new features and functionality to improve user experience.": "Implémentation de nouvelles fonctionnalités pour améliorer l'expérience utilisateur.",
      "Create and maintain the application's architecture.": "Créer et maintenir l'architecture de l'application.",
      "Create and implement applications that are low-latency, high-availability, and performant.": "Créez et implémentez des applications à faible latence, hautement disponibles et performantes.",
      "Data storage solution integration.": "Intégration de solutions de stockage de données.",
      "Agile development as well as the use of CI/CD (Jenkins and GitLab).": "Développement agile ainsi que l'utilisation de CI/CD (Jenkins et GitLab).",
      "Download Resume": "Télécharger le CV",
      "Programming Languages": "Langages de programmation",
      "Databases": "Bases de données",
      "Other technologies": "Autres technologies",
      "Development Methodology": "Méthodologie de développement",

      // Portfolio
      "Project": "Projet",
      "A brief description of the project": "Une brève description du projet",
      "View Project": "Voir le projet",

      // Footer
      "Sign up for our newsletter": "Inscrivez-vous à notre newsletter",
      "Subscribe": "S'abonner",
      "Links": "Liens",
      "Link": "Lien",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;