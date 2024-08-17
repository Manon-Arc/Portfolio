export const articles = [
  {
    id: 1,
    experienceId: 2,
    background: '/src/assets/blog/articles/intégration_pres_UCIA/pres.svg',
    title: 'Intégration aux équipe et présentation UCIA',
    date: new Date('2024-04-18'),
    content: {
      sec1: "Introduction de l'article",
      sec2: {
        sec2_1: { content: "Description de l'image 1", img: "/src/assets/blog/articles/interface1.svg" },
        sec2_2: { content: "Description de l'image 2", img: "/src/assets/blog/articles/interface2.svg" },
        sec2_3: { content: "Description de l'image 3", img: "/src/assets/blog/articles/interface3.svg" },
      },
      sec3: 'Conclusion de l\'article',
    },
    images: [
      '/src/assets/blog/articles/qlqc',
      '/src/assets/blog/articles/qlqc'
    ],
    author: {
      name: 'Manon Arcas',
      avatar: '/src/assets/blog/me.jpg'
    },
    time: 1,
  },
  {
    id: 2,
    experienceId: 2,
    background: '/src/assets/blog/articles/depMAJtest.jpg',
    title: 'Maintenance, déploiement MAJ et tests',
    date: new Date('2024-05-03'),
    content: {
      sec1: "Introduction de l'article",
      sec2: {
        sec2_1: { content: "Description de l'image 1", img: "/src/assets/blog/articles/interface1.svg" },
        sec2_2: { content: "Description de l'image 2", img: "/src/assets/blog/articles/interface2.svg" },
        sec2_3: { content: "Description de l'image 3", img: "/src/assets/blog/articles/interface3.svg" },
      },
      sec3: 'Conclusion de l\'article',
    },
    images: [
      '/src/assets/blog/articles/qlqc',
      '/src/assets/blog/articles/qlqc'
    ],
    author: {
      name: 'Manon Arcas',
      avatar: '/src/assets/blog/me.jpg'
    },
    time: 1,
  },
  {
    id: 3,
    experienceId: 2,
    background: '/src/assets/blog/articles/robocup/robocup.png',
    title: 'Open France Robocup Junior 2024',
    date: new Date('2024-05-26'),
    content: {
      sec1: "Introduction de l'article",
      sec2: {
        sec2_1: { content: "Description de l'image 1", img: "/src/assets/blog/articles/interface1.svg" },
        sec2_2: { content: "Description de l'image 2", img: "/src/assets/blog/articles/interface2.svg" },
        sec2_3: { content: "Description de l'image 3", img: "/src/assets/blog/articles/interface3.svg" },
      },
      sec3: 'Conclusion de l\'article',
    },
    images: [
      '/src/assets/blog/articles/robocup/robocup_stand.jpg',
      '/src/assets/blog/articles/robocup/robocup_rescueline.jpg',
      '/src/assets/blog/articles/robocup/robocup_rescuemaze.jpg',
      '/src/assets/blog/articles/robocup/robocup_soccer.jpg',
      '/src/assets/blog/articles/robocup/robocup_soccer2.jpg',
      '/src/assets/blog/articles/robocup/robocup_nao.jpg',
      '/src/assets/blog/articles/robocup/robocup_jury.JPG'
    ],
    author: {
      name: 'Manon Arcas',
      avatar: '/src/assets/blog/me.jpg'
    },
    time: 1,
  },
  {
    id: 4,
    experienceId: 2,
    background: '/src/assets/blog/articles/interface.svg',
    title: 'Projet interface de contrôle',
    date: new Date('2024-06-14'),
    content: {
      sec1: "Introduction de l'article",
      sec2: {
        sec2_1: { content: "Description de l'image 1", img: "/src/assets/blog/articles/interface1.svg" },
        sec2_2: { content: "Description de l'image 2", img: "/src/assets/blog/articles/interface2.svg" },
        sec2_3: { content: "Description de l'image 3", img: "/src/assets/blog/articles/interface3.svg" },
      },
      sec3: 'Conclusion de l\'article',
    },
    images: [
      '/src/assets/blog/articles/qlqc',
      '/src/assets/blog/articles/qlqc'
    ],
    author: {
      name: 'Manon Arcas',
      avatar: '/src/assets/blog/me.jpg'
    },
    time: 1,
  },
  {
    id: 5,
    experienceId: 2,
    background: '/src/assets/blog/articles/restitution_UCIA/micro.jpg',
    title: 'Restitution UCIA',
    date: new Date('2024-06-27'),
    content: {
      sec1: "Le 27 juin, j’ai eu l’opportunité de participer à la restitution du projet UCIA, un événement clé pour présenter l’avancement de ce projet encore en développement et actuellement en phase d’expérimentation. Cet événement a rassemblé une vingtaine de personnes, incluant les acteurs et contributeurs du projet ainsi que les animateurs des ateliers. Cette journée a été l’occasion de faire le point sur les progrès réalisés et de partager les perspectives futures.",
      sec2: {
        sec2_1: { 
          content: "La journée a débuté par une présentation globale du projet UCIA, rappelant ses objectifs et ses étapes clés. Cette introduction a permis de contextualiser les efforts déployés et de souligner l’importance de ce projet pour les adolescents impliqués. Un bureau d’études statistiques a ensuite pris la parole pour présenter un compte rendu détaillé, illustré par des graphiques montrant les taux de réussite et de satisfaction des adolescents. Ces données ont mis en lumière les impacts positifs du projet, tout en identifiant les domaines nécessitant encore des améliorations. Cette analyse statistique a été essentielle pour évaluer l’efficacité des actions menées et pour orienter les prochaines étapes du projet.", 
          img: "/src/assets/blog/articles/restitution_UCIA/presentation.png" 
        },
        sec2_2: { 
          content: "L’un des moments forts de cette restitution a été la présentation de la nouvelle version des scripts IA et de l’interface que j’ai développée en avant-première. J’ai eu l’occasion de montrer cette interface aux participants et de les accompagner lors de tests en direct. Cette démonstration a été très bien accueillie et a permis de recueillir des retours précieux pour les futures améliorations. Les participants ont pu manipuler l’interface, explorer ses fonctionnalités et donner leur avis sur son ergonomie et son utilité. Ces interactions ont été particulièrement enrichissantes, car elles ont fourni des perspectives nouvelles et des suggestions concrètes pour optimiser l’interface.", 
          img: "/src/assets/blog/articles/restitution_UCIA/demo_interface.png" 
        },
        sec2_3: { 
          content: "Cependant, tout ne s’est pas déroulé sans accroc. Lors de la présentation, nous avons rencontré des problèmes techniques imprévus. Plusieurs robots devaient être utilisés pour la démonstration, mais la connexion avec l’ordinateur se faisant via Wi-Fi, chaque robot agissait comme point d’accès. Le fait d’avoir plusieurs robots avec la même configuration Wi-Fi a perturbé la communication. Il a fallu identifier rapidement la source du problème et la ressoudre, tout cela devant une vingtaine de personnes attentives. Ces incidents ont nécessité une adaptation rapide et une gestion du stress pour trouver des solutions en temps réel. Cette expérience m’a permis de développer ma capacité à rester calme et efficace sous pression, une compétence essentielle dans le domaine professionnel.", 
          img: "/src/assets/blog/articles/restitution_UCIA/intervention.png" 
        },
      },
      sec3: 'Cet événement a été une expérience enrichissante et formatrice. J’ai particulièrement apprécié l’opportunité de présenter mon travail et de recevoir des retours directs des utilisateurs. La gestion des imprévus techniques m’a permis de développer ma capacité à rester calme et efficace sous pression. En fin de compte, voir l’interface fonctionner et être testée avec succès a été une grande source de satisfaction et de motivation pour la suite du projet. Cette expérience m’a également permis de renforcer mes compétences en gestion de projet et en communication, des atouts précieux pour ma carrière future.',
    },
    images: [
      '/src/assets/blog/articles/restitution_UCIA/debat.png',
      '/src/assets/blog/articles/restitution_UCIA/demo_bot.JPG',
      '/src/assets/blog/articles/restitution_UCIA/demo_bot_2.png',
      '/src/assets/blog/articles/restitution_UCIA/demo_interface2.JPG',
      '/src/assets/blog/articles/restitution_UCIA/presentation_script_IA.png',
      '/src/assets/blog/articles/restitution_UCIA/presentation_script_IA_2.JPG',
      '/src/assets/blog/articles/restitution_UCIA/presentation_script_IA_3.png',
      '/src/assets/blog/articles/restitution_UCIA/reconnaissance.JPG'
    ],
    author: {
      name: 'Manon Arcas',
      avatar: '/src/assets/blog/me.jpg'
    },
    time: 2,
  },
  {
    id: 6,
    experienceId: 2,
    background: '/src/assets/blog/articles/YOLOv8_YouTube_Thumbnail-p-50.png',
    title: 'Découverte et manipulation de réseaux de neurones', date: new Date('2024-07-04'),
    content: {
      sec1: "Introduction de l'article",
      sec2: {
        sec2_1: { content: "Description de l'image 1", img: "/src/assets/blog/articles/interface1.svg" },
        sec2_2: { content: "Description de l'image 2", img: "/src/assets/blog/articles/interface2.svg" },
        sec2_3: { content: "Description de l'image 3", img: "/src/assets/blog/articles/interface3.svg" },
      },
      sec3: 'Conclusion de l\'article',
    },
    images: [
      '/src/assets/blog/articles/qlqc',
      '/src/assets/blog/articles/qlqc'
    ],
    author: {
      name: 'Manon Arcas',
      avatar: '/src/assets/blog/me.jpg'
    },
    time: 1,
  },
];
