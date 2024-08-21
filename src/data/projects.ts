export const projects = [
  {
    className: "G",
    proj: "IHM",
    title: "IHM de contrôle GRPC avec simulation",
    description: "Ce projet est une interface utilisateur développée en Qt C++ pour contrôler\
                        un objet 3D \nvisualisé par d'Unity.\n\n L'interface utilisateur Qt permet à l'utilisateur de\
                        manipuler les propriétés\n de l'objet 3D, telles que sa position, sa rotation\
                        et d'instancier des GameObjects, tandis\n qu' Unity est utilisé pour visualiser l'objet 3D et\
                        appliquer les modifications en temps réel.\n",
    imageUrl: "/assets/realisations/projects/Ihm_unity.png",
    languages: "C++, C#",
    software: "Qt, Unity, Figma",
    features: [
      "Interface développée en C++ Qt,",
      "Contrôle de la position et création d'objets,",
      "Système de connexion à un compte utilisateur (SQLite),",
      "Visualisation en temps réel sur Unity,",
      "Communication GRPC,",
      "Possibilité d'utiliser deux ordinateurs distincts (même réseau),",
      "Client compatible Linux/Windows, serveur compatible Windows uniquement."
    ],
    team: "Collaboratif",
    projectLink: "https://github.com/Manon-Arc/projetDev_IHM"
  },
  {
    className: "D",
    proj: "weatherapp",
    title: "WeatherApp",
    description: "Création d'une application météo.",
    imageUrl: "/assets/realisations/projects/weatherapp_home.png",
    languages: "C#, Avalonia",
    software: "",
    features: [
      "Utilisation de l'API OpenWeather,",
      "Barre de recherche,",
      "Possibilité d'enregistrer une ville par défaut,",
      "42 langues disponibles." 
    ],
    team: "Collaboratif",
    projectLink: "https://github.com/Manon-Arc/WeatherApp"
  },
  {
    className: "G",
    proj: "danmashi",
    title: "Danmashi",
    description: "Danmashi est un jeu de combat au tour par tour en ligne de commande\
                        L'utilisateur incarne un joueur appartenant à une classe de son choix\
                        dont le but est de sortir victorieux d'un donjon de 10 étages remplis de\
                        monstres.",
    imageUrl: "/assets/realisations/projects/danmashi_start.png",
    languages: "Python",
    software: "",
    features: [
      "Choix du nom du personnage ('player' par défault),",
      "Choix de la classe du personnage parmi : Mage, Assassin et Guerrier,",
      "Musique de fond durant le jeu et ASCII art pour améliorer l'immertion du joueur,",
      "Génération aléatoire des monstres parmi des listes de difficultés différentes,",
      "Choix des actions à l'aide des touches directionnelles,",
      "Possibilité de débloquer de nouvelles compétences et de récupérer des objets."
    ],
    team: "Individuel",
    projectLink: "https://github.com/Manon-Arc/Python_Project_Danmashi"
  },
  {
    className: "D",
    proj: "IA",
    title: "Détection d'objet par IA",
    description: "Manipulation et entraînement d'un modèle d'apprentissage basé sur un réseau de neurones convolutifs (CNN) afin de réaliser une détection d'objet par IA",
    imageUrl: "/assets/realisations/projects/IA.svg",
    languages: "Jupyter Notebook, Python, Flask",
    software: "Yolo v8",
    features: [
      "Documentation simplifiée sur le fonctionnement des réseaux de neurones",
      "Possibilité d'entraîner son propre modèle d'apprentissage à l'aide de datasets personnalisés",
      "Possibilité de manipuler directement un modèle d'apprentissage pré-entraîné (détection)",
      "Site internet permettant de déposer directement l'image que l'on souhaite analyser."
    ],
    team: "Individuel",
    projectLink: "https://github.com/Manon-Arc/IA-ObjectDetection"
  },
  {
    className: "G",
    proj: "appOsyris",
    title: "Application Osyris",
    description: "Création d'une application de gestion associative.",
    imageUrl: "/assets/realisations/projects/osyris_app.png",
    languages: "React Native",
    software: "Figma",
    features: [
      "Système de connexion à un compte utilisateur (Firebase),",
      "Création d'évènements,",
      "Gestion des présence aux évènements,",
      "Liste et contacts des membres," ,
      "Possibilité d'un compte admin."
    ],
    team: "Individuel",
    projectLink: ""
  },
  {
    className: "D",
    proj: "dashboard",
    title: "Dashboard Netflix",
    description: "Ce projet vise à fournir un tableau de bord web intéractif pour afficher\
                        les films et séries<br> TV disponibles sur Netflix ainsi que leurs caractéristiques.",
    imageUrl: "/assets/realisations/projects/dashboard.png",
    languages: "Python, Django",
    software: "Figma",
    features: [
      "Utilisation du framework Django,",
      "Exploitation de csv,",
      "Filtres caractéristiques,",
      "Diagrammes et graphiques intéractifs."
    ],
    team: "Collaboratif",
    projectLink: "https://github.com/Manon-Arc/Dashboard_Netflix"
  },
  {
    className: "G",
    proj: "flipper",
    title: "Flipper mobile",
    description: "Création d'une application de flipper sur mobile.",
    imageUrl: "/assets/realisations/projects/flipper.png",
    languages: "C#",
    software: "Unity",
    features: [
      "Trois scènes disponibles,",
      "Obstacles variés (points, physiques, non-physiques),",
      "Affichage du score en temps réel,",
      "Visualisation du nombre de vies restantes," ,
      "Effets sonores et musique de fond durant le jeu,",
      "Gestion de l'affichage du bouton de lancement des balles."
    ],
    team: "Individuel",
    projectLink: "https://github.com/Manon-Arc/Flipper_mobile"
  },
  {
    className: "D",
    proj: "escape",
    title: "Escape game en CLI",
    description: "Escape Game dans le terminal, plusieurs options à dispositions pour intéragir avec<br> les différents éléments de l'environnement, afin de résoudre une intrigue.",
    imageUrl: "/assets/realisations/projects/escape.png",
    languages: "Python",
    software: "",
    features: [
      "Système de classes (POO),",
      "Intéractif : gestion entrées utilisateur,",
      "Plusieurs fins disponibles."
    ],
    team: "Individuel",
    projectLink: "https://github.com/Manon-Arc/BB8"
  },
  {
    className: "G",
    proj: "endless",
    title: "Endless runner",
    description: "Création d'un jeu de type 'Endless runner'",
    imageUrl: "/assets/realisations/projects/endless.png",
    languages: "C#",
    software: "Unity",
    features: [
      "Trois scènes disponibles,",
      "Génération d'obstacles aléatoires,",
      "Possibilités de récupérer des bonus (pièces),",
      "Contrôle via la touche 'espace' du clavier," ,
      "Musique de fond durant le jeu,",
      "Affichage du score en temps réel."
    ],
    team: "Individuel",
    projectLink: "https://github.com/Manon-Arc/Endless_runner"
  },
  {
    className: "D",
    proj: "domolabo",
    title: "Domolabo",
    description: "Création d'un système domotique de l'applications jusqu'aux objets connectés incluant le hub.",
    imageUrl: "/assets/realisations/projects/domolabo.png",
    languages: "Python / micropython, C#, Xamarin<, SQL",
    software: "Fusion360 / Kicad / Figma",
    features: [
      "Application développé en C# Xamarin permettant l'enregistrement et la gestion des objets,",
      "Un objet disponibles : ventilateur de bureau,",
      "Base de donnée SQLite pour stocker les objets enregistrés,",
      "Communication BLE et MQTT."
    ],
    team: "Collaboratif",
    projectLink: "https://github.com/Ahliko/DomoLabo"
  },
  {
    className: "G",
    proj: "coffre",
    title: "Coffre connecté",
    description: "Prototype de coffre à authentification multiples.",
    imageUrl: "/assets/realisations/projects/coffre.png",
    languages: "Python / micropython",
    software: "Fusion360 / Kicad",
    features: [
      "Authentification via pavé numérique et RFID,",
      "Vérouillage automatiquement du coffre après fermeture,",
      "Indicateurs sonores et visuels."
    ],
    team: "Collaboratif",
    projectLink: "https://github.com/ChippeyTheo/serrure-connect-"
  },
  {
    className: "D",
    proj: "marcus",
    title: "Marcus",
    description: "Création d'un prototype de robot pompier en 5 jours lors d'un Hackaton.",
    imageUrl: "/assets/realisations/projects/marcus.png",
    languages: "Python / micropython",
    software: "Fusion360 / Kicad",
    features: [
      "Contrôle via une manette connectée en ESP-Now (150m en conditions idéales),",
      "Capacité de se déplacer dans huit directions différentes (roues mécanum),",
      "Gyrophare rotatif pour signaler les interventions d'urgence,",
      "Canon à eau offrant une liberté de mouvement de 45° en hauteur,",
      "Emplacement de fixation pour l'ajout d'accessoires (phare, mégaphone)."
    ],
    team: "Collaboratif",
    projectLink: "https://github.com/Manon-Arc/Marcus_Hackathon"
  },
  {
    className: "G",
    proj: "robolympiades",
    title: "Robolympiades",
    description: "Compétiton de robotique mobile, 4 équipes s'affrontent sur 4 épreuves :\
    - Football : les règle classique du sport\
                        - Clean the factory : récupérer un maximum de billes et les ramener dans notre zone,\
                        - Mazerush : sortir le plus vite possible d'un labyrinthe (autonome),\
                        - Tower défense : récupérer des palets et les ramener dans notre zone (bonus si empilé).\
                        Évenement ouvert au public ayant rassemblé 300 spectateurs.",
    imageUrl: "/assets/realisations/projects/robolympiades.png",
    languages: "Python / micropython, HTML, CSS, Javascript, SQLite",
    software: "Fusion360 / Kicad",
    features: [
      "Contrôle via une interface web (HTTP, socket TCP),",
      "Détachable en deux robots distincts (contrôlable séparément en simultanée),",
      "Équipé d'une pince permettant d'empiler des palets,",
      "Possibilié de transporter deux tours de palets,",
      "Tête qui se lève pour récupérer un cube sur l'avant."
    ],
    team: "Collaboratif",
    projectLink: "https://gitlab.com/baptgdb/robolympiades-2022_2023/"
  }, 
  {
    className: "D",
    proj: "assistant",
    title: "Assistant mobile sur rail",
    description: "Prototype de robot assistant mobile sur rail. Ce robot peut être utilisé comme une troisième main, un support d'outils ou un dispositif de rangement.",
    imageUrl: "/assets/realisations/projects/assistant.png",
    languages: "Python / micropython",
    software: "Fusion360 / Kicad",
    features: [
      "Sélection du poste de travail à l'aide d'un bouton,",
      "Déplacement automatiquement vers le poste sélectionné,",
      "Capteur de proximité inductif pour identifier l'emplacement du poste de travail.",
    ],
    team: "Individuel",
    projectLink: "https://github.com/Manon-Arc/Robot_sur_rail"
  },
  {
    className: "G",
    proj: "mecanum",
    title: "Robot mecanum",
    description: "Prototype de robot mécanum télécommandé.",
    imageUrl: "/assets/realisations/projects/holonome.png",
    languages: "Python / micropython, HTML, CSS, Javascript",
    software: "Fusion360 / Kicad",
    features: [
      "Serveur web directement hébergé sur le robot,",
      "Contrôle via une interface web,",
      "Capacité de se déplacer dans huit directions différentes (roues mécanum).",
    ],
    team: "Individuel",
    projectLink: "https://github.com/Manon-Arc/code_holonome/"
  },
  {
    className: "D",
    proj: "bb8",
    title: "BB8",
    description: "Prototype de sphère roulante inspiré de BB8.",
    imageUrl: "/assets/realisations/projects/BB8.png",
    languages: "Python / micropython",
    software: "Fusion360 / Kicad",
    features: [
      "Serveur web directement hébergé sur le robot",
      "Contrôle via une interface web"
    ],
    team: "Collaboratif",
    projectLink: "https://github.com/Manon-Arc/BB8"
  },
  {
    className: "G",
    proj: "moduleESP",
    title: "Module ESP32",
    description: "Conception sur mesure d'un module ESP32.",
    imageUrl: "/assets/realisations/projects/esp323D.png",
    software: "Circuit Maker / Altium Designer",
    features: [
      "Microcontrôleur : ESP32-WROOM-32U",
      "Puce de mémoire flash NOR : Winbond W25Q128JVSIM",
      "Interface USB vers UART : FTDI FT232RQ",
      "Connecteur Micro-USB 2.0 type B : Molex 105017-0001"
    ],
    team: "Individuel",
    projectLink: ""
  },
  {
    className: "D",
    proj: "bluetooth",
    title: "Module bluetooth",
    description: "Conception sur mesure d'un module bluetooth.",
    imageUrl: "/assets/realisations/projects/bluletooth3D.png",
    languages: "",
    software: "Circuit Maker / Altium Designer",
    features: [
      "STMicroelectronics BLUENRG-232.",
    ],
    team: "Individuel",
    projectLink: ""
  },
];
