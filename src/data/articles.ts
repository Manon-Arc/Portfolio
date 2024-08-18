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
    video: "",
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
    video: "",
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
      sec1: "Le week-end du 25 au 26 mai 2024 se tenait l'Open France de la RoboCup Junior à Bordeaux, au Parc des Expositions. La RoboCup est l’une des compétitions internationales de robotique les plus complètes et complexes au monde. Elle réunit chaque année des milliers de participants, formant des centaines d'équipes venant d'une cinquantaine de pays. C'est l’un des événements technologiques les plus importants au monde en matière de recherche et d'éducation en robotique.",
      sec2: {
        sec2_1: { 
          content: "Bien que la RoboCup soit une compétition, elle est avant tout une communauté où les participants échangent tout au long de l'événement. De nombreuses technologies développées par les compétiteurs sont ouvertes. Chaque RoboCup est également l’occasion d’un Symposium International, un haut lieu de présentation et de discussion de contributions scientifiques abordant un large éventail de domaines liés à la recherche et à la pédagogie en matière de robotique et d’intelligence artificielle. Afin d’encourager le plus grand partage possible des connaissances, un axe spécifique du Symposium est consacré aux développements « ouverts » (open source).", 
          img: "/src/assets/blog/articles/robocup/logo_robocup.png" },
        sec2_2: { 
          content: "Si les compétiteurs sont essentiellement issus du monde universitaire ou de la R&D, la RoboCup comporte également un volet éducatif très important. En effet, des centaines d'enfants et d'adolescents de 13 à 19 ans participent à la ligue junior, la RoboCupJunior. Cet événement de grande envergure rassemble de jeunes talents passionnés de robotique et les met au défi à travers plusieurs épreuves mettant en avant des compétences techniques et collaboratives. Parmi les ligues, on retrouve notamment : Soccer, OnStage ,Rescue Maze et Line et @Home Education.", 
          img: "/src/assets/blog/articles/robocup/robocup_rescueline.jpg" 
        },
        sec2_3: { 
          content: "Pour la deuxième année consécutive, j'ai eu l'honneur de participer en tant que jurée pour l'épreuve Rescue Line, mais également en tant qu'animatrice de stand pour la Ligue de l'Enseignement - Fédération Gironde. Cet événement a été l'occasion de présenter au grand public le projet UCIA, sur lequel j’ai travaillé durant ces trois mois de stage. Sur le stand, nous avons pu faire tester directement certains des ateliers disponibles, comme le Chronocarte, et permettre aux jeunes de manipuler les robots Thymio. Cela a été très constructif de pouvoir recueillir des avis directement auprès du public cible, ce qui nous a permis d’identifier des problèmes ou différents axes d’amélioration.", 
          img: "/src/assets/blog/articles/robocup/robocup_stand.jpg" 
        },
      },
      sec3: "Ce fut un réel plaisir et un honneur de pouvoir contribuer à la réussite d'un événement d'une telle ampleur.",
    },
    images: [
      '/src/assets/blog/articles/robocup/robocup_rescuemaze.jpg',
      '/src/assets/blog/articles/robocup/robocup_soccer.jpg',
      '/src/assets/blog/articles/robocup/robocup_soccer2.jpg',
      '/src/assets/blog/articles/robocup/robocup_nao.jpg',
      '/src/assets/blog/articles/robocup/robocup_jury.JPG'
    ],
    video: "",
    author: {
      name: 'Manon Arcas',
      avatar: '/src/assets/blog/me.jpg'
    },
    time: 1,
  },
  {
    id: 4,
    experienceId: 2,
    background: '/src/assets/blog/articles/interface/interface.svg',
    title: 'Projet interface de contrôle',
    date: new Date('2024-06-14'),
    content: {
      sec1: "Dans le cadre de mon stage, j’ai eu l’opportunité de travailler sur un projet innovant visant à simplifier la programmation du robot ROSA. En complément de mon travail de maintenance, j’ai eu pour objectif de rendre la programmation du ROSA facile et accessible à tous en développant une interface de programmation et de téléopération. J’ai été en totale autonomie pour la réalisation de cette tâche.",
      sec2: {
        sec2_1: { 
          content: "Tout d’abord, mon premier travail a été de déterminer quelles fonctionnalités devaient être incluses sur cette interface mais également de définir son design. S’en est alors suivi l’étape de maquettage. Cette étape s’est avérée bien plus complexe qu’il n’y paraissait afin de réaliser une interface intuitive, simple d’utilisation et adaptée au public cible. J’ai décidé de me pencher sur la technologie « Scratch », reconnue pour sa simplicité et son design ludique.", 
          img: "/src/assets/blog/articles/interface/interrogation.svg" 
        },
        sec2_2: { 
          content: "La deuxième étape a été de trouver comment rendre cette interface accessible sans nécessiter d’importantes manipulations techniques de la part des utilisateurs. Le module Raspberry hébergeait déjà un serveur web donnant accès à plusieurs fonctionnalités, il était donc plus simple de se greffer directement à ce même serveur.", 
          img: "" 
        },
        sec2_3: { 
          content: "Concernant les technologies, après plusieurs recherches, j’ai découvert « Blockly », une bibliothèque web développée par Google permettant d’ajouter un éditeur de code basé sur des blocs à une application. L’éditeur utilise des pièces de puzzle telles que des blocs pour représenter des concepts de code tels que des variables, des expressions logiques, des boucles, etc. Il permet aux utilisateurs de programmer sans avoir à se soucier de la syntaxe ou de l’intimidation de la ligne de commande. L’avantage de cette bibliothèque est qu’elle a la possibilité de fournir une liste de blocs prêts à l’emploi mais également de créer ses propres blocs personnalisés.", 
          img: "/src/assets/blog/articles/interface/blockly.svg" 
        },
        sec2_4: { 
          content: "L’interface se constitue donc de deux parties. Une première utilisant Blockly qui fournit une « boîte à outils » constituée de plusieurs blocs de différentes catégories : logique, boucles, texte, etc., avec la possibilité de choisir la langue entre français et anglais. Une zone affiche en temps réel le code correspondant à l’algorithme créé par les blocs et enfin une zone affiche la sortie une fois le programme exécuté, tel que les print par exemple.", 
          img: "/src/assets/blog/articles/interface/partie_prog.png" 
        },
        sec2_5: { 
          content: "La deuxième partie permet de contrôler le robot comme une manette, constituée d’un joystick pour permettre le déplacement du robot, d’un slider pour modifier la vitesse de déplacement et d’une visualisation de la valeur des différents capteurs.", 
          img: "/src/assets/blog/articles/interface/partie_teleop.png" 
        },
      },
      sec3: 'Ce projet m’a permis de mettre en application mes connaissances en développement web mais également d’améliorer mes compétences en gestion d’API afin de permettre aux différents composants web d’interagir directement avec le robot. J’ai également appris à travailler de manière autonome, à gérer mon temps et à résoudre des problèmes complexes de manière créative. Ce projet a été une expérience extrêmement enrichissante. J’ai particulièrement apprécié la liberté et la responsabilité qui m’ont été accordées. Cela m’a permis de développer ma créativité et ma capacité à résoudre des problèmes de manière autonome. Les défis rencontrés, notamment lors de la phase de maquettage, m’ont appris à persévérer et à trouver des solutions innovantes. En fin de compte, voir l’interface fonctionner et être utilisée avec succès a été une grande source de satisfaction et de fierté.',
    },
    images: [],
    video: "/src/assets/blog/articles/interface/Demo_interface_accéléré.mp4",
    author: {
      name: 'Manon Arcas',
      avatar: '/src/assets/blog/me.jpg'
    },
    time: 3,
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
    video: "",
    author: {
      name: 'Manon Arcas',
      avatar: '/src/assets/blog/me.jpg'
    },
    time: 2,
  },
  {
    id: 6,
    experienceId: 2,
    background: '/src/assets/blog/articles/reseaux_neurones/ultralytics.png',
    title: 'Découverte et manipulation de réseaux de neurones', date: new Date('2024-07-04'),
    content: {
      sec1: "Dans le cadre du projet UCIA, j’ai eu l’opportunité de travailler sur diverses technologies, mais l'intelligence artificielle (IA) était un domaine que je n'avais pas encore exploré en profondeur. C’était ma première expérience concrète avec un modèle d’IA, ce qui m’a permis d'approfondir un sujet qui m'intéressait depuis longtemps, sans que j'aie eu vraiment l'occasion de m'y plonger. Après avoir finalisé mes autres tâches, j’ai décidé de me concentrer sur l’étude et la manipulation du modèle YOLO v8, utilisé pour la reconnaissance d’objets.",
      sec2: {
        sec2_1: { 
          content: "YOLO (You Only Look Once) est un modèle de détection d’objets en temps réel, réputé pour son efficacité et sa rapidité. En tant que novice dans le domaine de l'IA, ce modèle représentait un défi technique stimulant. J'ai commencé par explorer les modèles disponibles via une API fournie par l’entreprise, avec pour objectif de comprendre leur fonctionnement et leur processus d'entraînement.", 
          img: "/src/assets/blog/articles/reseaux_neurones/recognize.svg" },
        sec2_2: { 
          content: "Pour cela, j'ai créé plusieurs datasets personnalisés, ce qui m'a aidé à mieux comprendre les exigences spécifiques en matière de données pour un modèle de détection d'objets. Utilisant Jupyter Notebook, j'ai appliqué des connaissances acquises en dataanalyse pour entraîner et valider les modèles YOLO. J'ai ainsi pu observer leurs performances sur des données réelles ", 
          img: "/src/assets/blog/articles/reseaux_neurones/dataset.png" },
        sec2_3: { 
          content: "Pour partager mes découvertes, j’ai créé un dépôt Git rassemblant mes travaux autour du modèle YOLO v8. Ce dépôt inclut une fiche explicative sur le fonctionnement d'une IA de reconnaissance d’objets, destinée à un public varié, technique ou non. Cette documentation vise à démystifier les concepts clés de l’IA tout en offrant des exemples concrets de mise en œuvre. En complément, j'ai développé plusieurs scripts : un script de détection d’objet qui renvoit une image annotée avec l’objet reconnu, son label et le niveau de confiance ; un script d’entraînement afin de former le modèle sur un dataset personnalisé et enfin un serveur Flask permettant d'uploader une image via une interface web et de recevoir en retour l’image annotée, démontrant l'intégration du modèle d'IA dans une application web.", 
          img: "/src/assets/blog/articles/reseaux_neurones/git.svg" },
      },
      sec3: "L'accueil de ce travail par l'équipe projet a été très positif, soulignant qu'il constituait une excellente base pour développer de nouveaux ateliers pédagogiques dans le cadre du projet UCIA. Cette reconnaissance a été particulièrement gratifiante pour moi, et l'initiative m'a permis de mettre en pratique diverses compétences, du développement web à la gestion d’API, en passant par la dataanalyse et la documentation technique. Cette exploration de l’IA a été une expérience extrêmement enrichissante et formatrice. Combiner théorie et pratique m’a permis de consolider mes connaissances techniques et de renforcer ma capacité à aborder des sujets complexes. Voir mon travail reconnu par l'équipe projet et envisagé pour des applications futures a été une grande source de satisfaction. Cette expérience m’a offert un aperçu précieux des défis et opportunités liés à l'intelligence artificielle.",
    },
    images: [
      '/src/assets/blog/articles/reseaux_neurones/compvision_tasks.png',
      '/src/assets/blog/articles/reseaux_neurones/conv.png',
      '/src/assets/blog/articles/reseaux_neurones/CNN_schematic.png',
      '/src/assets/blog/articles/reseaux_neurones/CNN_layout.gif'
    ],
    video: "",
    author: {
      name: 'Manon Arcas',
      avatar: '/src/assets/blog/me.jpg'
    },
    time: 1,
  },
];
