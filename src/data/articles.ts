export const articles = [
  {
    id: 1,
    experienceId: 2,
    background: '/assets/blog/articles/intégration_pres_UCIA/pres.svg',
    title: 'Intégration aux équipe et présentation UCIA',
    date: new Date('2024-04-18'),
    content: {
      sec1: "Dès ma première journée de stage, j’ai été directement intégrée et présentée aux différentes équipes en participant à la réunion hebdomadaire. Cette réunion permet aux différents pôles de faire un point sur les projets en cours, leur avancement, et de discuter des événements ou interventions de la semaine. Les réunions hebdomadaires auxquelles j’ai pu participer ont été des moments clés pour comprendre l’importance de la communication et de la collaboration au sein d’un organisme.",
      sec2: {
        sec2_1: { 
          content: "La Ligue de l’enseignement fonctionnant grâce à un système de pôles (ou secteurs), chacun constitué de membres spécialisés dans la thématique experte du pôle en question, j’ai été affecté(e) au pôle numérique. On m’a présenté plus en détail l’équipe qui le compose cette même première journée. J’ai pu alors découvrir les différents projets sur lesquels ils travaillaient à ce moment-là, mais également en apprendre davantage sur le projet sur lequel j’allais apporter mon travail.", 
          img: "" 
        },
        sec2_2: { 
          content: "Il s’agit du projet UCIA, signifiant Usages et Conscience des Intelligences Artificielles. Ce projet, en partenariat avec Poppy Station et l’INRIA, a pour objectif de sensibiliser les adolescent(e)s aux IA, de leur permettre de mieux comprendre leur fonctionnement, ainsi que leurs enjeux, mais également les dangers et opportunités qu’elles représentent. La robotique, déjà reconnue comme un moyen ludique d’apprentissage du numérique et de la programmation informatique, donne également du sens au code et permet d’interagir directement avec la réalité. Notre projet s’appuie donc sur un robot éducatif open-source, dont la perception est assurée par un système d’intelligence artificielle, manipulable et paramétrable, pour en comprendre les tenants et les aboutissants, afin d’encourager un regard critique sur l’intelligence artificielle.  ", 
          img: "/assets/blog/articles/intégration_pres_UCIA/logo_UCIA.svg" 
        },
        sec2_3: { 
          content: "Ce projet étant en partenariat avec des organisations renommées, j’ai eu l’occasion de discuter et de travailler avec des professionnels tels que des directeurs de recherche et des ingénieurs. Collaborer avec eux a été certes impressionnant, mais aussi extrêmement enrichissant. Ces interactions m’ont permis de voir les projets sous un angle différent et d’apprendre énormément sur les aspects techniques et éthiques de l’intelligence artificielle.", 
          img: "/assets/blog/articles/intégration_pres_UCIA/collab.jpg" 
        },
        sec2_4: { 
          content: "En plus de mon travail au sein du pôle numérique, j’ai également eu l’opportunité de passer du temps avec des membres des autres secteurs. J’ai participé à certaines de leurs interventions, ce qui m’a permis d’échanger avec eux et de mieux comprendre leur travail. Ces moments d’échange ont été très enrichissants et m’ont offert une vision plus globale des activités de la Ligue de l’enseignement.", 
          img: "/assets/blog/articles/intégration_pres_UCIA/other_section.jpg" 
        },
      },
      sec3: 'En résumé, mon intégration au sein de la Ligue de l’enseignement a été une expérience humaine et professionnelle très enrichissante. J’ai non seulement acquis de nouvelles compétences, mais j’ai aussi eu la chance de rencontrer des personnes inspirantes qui m’ont beaucoup apporté sur le plan personnel et professionnel.',
    },
    images: [],
    video: "",
    author: {
      name: 'Manon Arcas',
      avatar: '/assets/blog/me.jpg'
    },
    time: 2,
  },
  {
    id: 2,
    experienceId: 2,
    background: '/assets/blog/articles/maintenance_maj_test/depMAJtest.jpg',
    title: 'Maintenance, déploiement MAJ et tests',
    date: new Date('2024-05-03'),
    content: {
      sec1: "Comme mentionné dans l'un de mes précédents articles, le projet UCIA sur lequel j'ai eu l'opportunité de travailler repose sur un robot open-source et open-hardware : le ROSA. Celui-ci est composé d'un Thymio, un robot éducatif conçu par des chercheurs de l'EPFL en collaboration avec l'ECAL, et produit par l'association Mobsya, ainsi que d'un module Raspberry Pi 3A+ ou 4 avec une caméra Raspberry Pi. L'objectif de ce module est de permettre la reconnaissance d'objets via l'intelligence artificielle, afin d'influencer le comportement du robot.",
      sec2: {
        sec2_1: { 
          content: "Durant mes premières semaines, mon travail consistait en grande partie à gérer les problèmes techniques rencontrés par les ROSA lors de leur utilisation, notamment des problèmes liés au logiciel, comme des blocages lors des mises à jour du firmware. J'étais également chargé de déployer et de tester les dernières versions du code afin de rédiger des comptes-rendus sur les correctifs à apporter, ainsi que de créer des issues sur GitHub pour assurer la conformité avec le cahier des charges. Cette étape a été cruciale pour la bonne progression du projet, mais aussi pour maintenir le lien avec les différents partenaires et suivre leur avancement.", 
          img: "/assets/blog/articles/maintenance_maj_test/logo_maintenance.svg" 
        },
        sec2_2: { 
          content: "Les problèmes récurrents rencontrés lors de ces tests étaient souvent liés à la reconnaissance d'objets. En effet, je me suis rapidement aperçu que l'environnement de test et l'environnement de développement n'étaient pas similaires. La luminosité, la couleur de la surface, ainsi que la taille des éléments à reconnaître étant différentes, le modèle de reconnaissance avait beaucoup de mal à fonctionner. J'ai donc pris l'initiative de réaliser une fiche technique de l'environnement fonctionnel afin de résoudre ce problème et de faciliter une meilleure communication.", 
          img: "/assets/blog/articles/maintenance_maj_test/recognize_setup.jpg" 
        },
        sec2_3: { 
          content: "Pendant le développement, plusieurs robots ont subi d'importantes surchauffes en raison de l'utilisation d'un modèle d'IA nécessitant trop de ressources. L'ingénieur en charge du développement a alors décidé d'héberger le modèle sur un ordinateur externe. Ce changement a nécessité plus de temps et d'efforts pour déployer cette nouvelle version, entraînant des problèmes de compatibilité. En effet, l'IA requiert de nombreuses bibliothèques Python, notamment 'pytorch'. Certains ordinateurs n'arrivaient pas à exécuter le script en raison de modules non trouvés. J'ai tenté d'installer le tout dans un environnement virtuel, mais le problème persistait. Après des recherches, j'ai finalement réalisé que la version de l'OS pouvait être à l'origine de ce problème. En effet, la majorité des ordinateurs à ma disposition fonctionnaient sous des versions de Windows antérieures à Windows 11, avec une incapacité de mise à jour en raison de l'ancienneté des composants.", 
          img: "" 
        },
        sec2_4: { 
          content: "Tout au long de ce stage, j'ai participé à plusieurs copil-techniques avec le directeur de recherche à l'INRIA pour faire régulièrement le point sur l'avancement et les problèmes. Nous nous sommes alors penchés sur la possibilité de créer un environnement de type Flatpak, mais pour Windows (le programme étant uniquement compatible avec Windows), ce qui malheureusement n'a pas abouti.", 
          img: "/assets/blog/articles/maintenance_maj_test/collab.jpg" 
        },
      },
      sec3: "Ce projet a été une expérience particulièrement enrichissante pour moi, non seulement d'un point de vue technique, mais aussi sur le plan humain. Les défis rencontrés m'ont permis de développer ma capacité à résoudre des problèmes complexes et à m'adapter rapidement à des situations imprévues. Bien que certaines solutions n'aient pas abouti, j'ai pu tirer des leçons importantes sur la gestion des projets collaboratifs et la nécessité de maintenir une communication claire avec les différents acteurs impliqués.",
    },
    images: [
      '/assets/blog/articles/maintenance_maj_test/recognize.png',
      '/assets/blog/articles/maintenance_maj_test/schematic_rosa.png',
      '/assets/blog/articles/maintenance_maj_test/bot_obj.jpg'
    ],
    video: "",
    author: {
      name: 'Manon Arcas',
      avatar: '/assets/blog/me.jpg'
    },
    time: 2,
  },
  {
    id: 3,
    experienceId: 2,
    background: '/assets/blog/articles/robocup/robocup.png',
    title: 'Open France Robocup Junior 2024',
    date: new Date('2024-05-26'),
    content: {
      sec1: "Le week-end du 25 au 26 mai 2024 se tenait l'Open France de la RoboCup Junior à Bordeaux, au Parc des Expositions. La RoboCup est l’une des compétitions internationales de robotique les plus complètes et complexes au monde. Elle réunit chaque année des milliers de participants, formant des centaines d'équipes venant d'une cinquantaine de pays. C'est l’un des événements technologiques les plus importants au monde en matière de recherche et d'éducation en robotique.",
      sec2: {
        sec2_1: { 
          content: "Bien que la RoboCup soit une compétition, elle est avant tout une communauté où les participants échangent tout au long de l'événement. De nombreuses technologies développées par les compétiteurs sont ouvertes. Chaque RoboCup est également l’occasion d’un Symposium International, un haut lieu de présentation et de discussion de contributions scientifiques abordant un large éventail de domaines liés à la recherche et à la pédagogie en matière de robotique et d’intelligence artificielle. Afin d’encourager le plus grand partage possible des connaissances, un axe spécifique du Symposium est consacré aux développements « ouverts » (open source).", 
          img: "/assets/blog/articles/robocup/logo_robocup.png" },
        sec2_2: { 
          content: "Si les compétiteurs sont essentiellement issus du monde universitaire ou de la R&D, la RoboCup comporte également un volet éducatif très important. En effet, des centaines d'enfants et d'adolescents de 13 à 19 ans participent à la ligue junior, la RoboCupJunior. Cet événement de grande envergure rassemble de jeunes talents passionnés de robotique et les met au défi à travers plusieurs épreuves mettant en avant des compétences techniques et collaboratives. Parmi les ligues, on retrouve notamment : Soccer, OnStage ,Rescue Maze et Line et @Home Education.", 
          img: "/assets/blog/articles/robocup/robocup_rescueline.jpg" 
        },
        sec2_3: { 
          content: "Pour la deuxième année consécutive, j'ai eu l'honneur de participer en tant que jurée pour l'épreuve Rescue Line, mais également en tant qu'animatrice de stand pour la Ligue de l'Enseignement. Cet événement a été l'occasion de présenter au grand public le projet UCIA, sur lequel j’ai travaillé durant ces trois mois de stage. Sur le stand, nous avons pu faire tester directement certains des ateliers disponibles, comme le Chronocarte, et permettre aux jeunes de manipuler les robots Thymio. Cela a été très constructif de pouvoir recueillir des avis directement auprès du public cible, ce qui nous a permis d’identifier des problèmes ou différents axes d’amélioration.", 
          img: "/assets/blog/articles/robocup/robocup_stand.jpg" 
        },
      },
      sec3: "Ce fut un réel plaisir et un honneur de pouvoir contribuer à la réussite d'un événement d'une telle ampleur.",
    },
    images: [
      '/assets/blog/articles/robocup/robocup_rescuemaze.jpg',
      '/assets/blog/articles/robocup/robocup_soccer.jpg',
      '/assets/blog/articles/robocup/robocup_soccer2.jpg',
      '/assets/blog/articles/robocup/robocup_nao.jpg',
      '/assets/blog/articles/robocup/robocup_jury.JPG'
    ],
    video: "",
    author: {
      name: 'Manon Arcas',
      avatar: '/assets/blog/me.jpg'
    },
    time: 2,
  },
  {
    id: 4,
    experienceId: 2,
    background: '/assets/blog/articles/interface/interface.svg',
    title: 'Projet interface de contrôle',
    date: new Date('2024-06-14'),
    content: {
      sec1: "Dans le cadre de mon stage, j’ai eu l’opportunité de travailler sur un projet innovant visant à simplifier la programmation du robot ROSA. En complément de mon travail de maintenance, j’ai eu pour objectif de rendre la programmation du ROSA facile et accessible à tous en développant une interface de programmation et de téléopération. J’ai été en totale autonomie pour la réalisation de cette tâche.",
      sec2: {
        sec2_1: { 
          content: "Tout d’abord, mon premier travail a été de déterminer quelles fonctionnalités devaient être incluses sur cette interface mais également de définir son design. S’en est alors suivi l’étape de maquettage. Cette étape s’est avérée bien plus complexe qu’il n’y paraissait afin de réaliser une interface intuitive, simple d’utilisation et adaptée au public cible. J’ai décidé de me pencher sur la technologie « Scratch », reconnue pour sa simplicité et son design ludique.", 
          img: "/assets/blog/articles/interface/interrogation.svg" 
        },
        sec2_2: { 
          content: "La deuxième étape a été de trouver comment rendre cette interface accessible sans nécessiter d’importantes manipulations techniques de la part des utilisateurs. Le module Raspberry hébergeait déjà un serveur web donnant accès à plusieurs fonctionnalités, il était donc plus simple de se greffer directement à ce même serveur.", 
          img: "" 
        },
        sec2_3: { 
          content: "Concernant les technologies, après plusieurs recherches, j’ai découvert « Blockly », une bibliothèque web développée par Google permettant d’ajouter un éditeur de code basé sur des blocs à une application. L’éditeur utilise des pièces de puzzle telles que des blocs pour représenter des concepts de code tels que des variables, des expressions logiques, des boucles, etc. Il permet aux utilisateurs de programmer sans avoir à se soucier de la syntaxe ou de l’intimidation de la ligne de commande. L’avantage de cette bibliothèque est qu’elle a la possibilité de fournir une liste de blocs prêts à l’emploi mais également de créer ses propres blocs personnalisés.", 
          img: "/assets/blog/articles/interface/blockly.svg" 
        },
        sec2_4: { 
          content: "L’interface se constitue donc de deux parties. Une première utilisant Blockly qui fournit une « boîte à outils » constituée de plusieurs blocs de différentes catégories : logique, boucles, texte, etc., avec la possibilité de choisir la langue entre français et anglais. Une zone affiche en temps réel le code correspondant à l’algorithme créé par les blocs et enfin une zone affiche la sortie une fois le programme exécuté, tel que les print par exemple.", 
          img: "/assets/blog/articles/interface/partie_prog.png" 
        },
        sec2_5: { 
          content: "La deuxième partie permet de contrôler le robot comme une manette, constituée d’un joystick pour permettre le déplacement du robot, d’un slider pour modifier la vitesse de déplacement et d’une visualisation de la valeur des différents capteurs.", 
          img: "/assets/blog/articles/interface/partie_teleop.png" 
        },
      },
      sec3: 'Ce projet m’a permis de mettre en application mes connaissances en développement web mais également d’améliorer mes compétences en gestion d’API afin de permettre aux différents composants web d’interagir directement avec le robot. J’ai également appris à travailler de manière autonome, à gérer mon temps et à résoudre des problèmes complexes de manière créative. Ce projet a été une expérience extrêmement enrichissante. J’ai particulièrement apprécié la liberté et la responsabilité qui m’ont été accordées. Cela m’a permis de développer ma créativité et ma capacité à résoudre des problèmes de manière autonome. Les défis rencontrés, notamment lors de la phase de maquettage, m’ont appris à persévérer et à trouver des solutions innovantes. En fin de compte, voir l’interface fonctionner et être utilisée avec succès a été une grande source de satisfaction et de fierté.',
    },
    images: [],
    video: "/assets/blog/articles/interface/Demo_interface_accéléré.mp4",
    author: {
      name: 'Manon Arcas',
      avatar: '/assets/blog/me.jpg'
    },
    time: 3,
  },
  {
    id: 5,
    experienceId: 2,
    background: '/assets/blog/articles/restitution_UCIA/micro.jpg',
    title: 'Restitution UCIA',
    date: new Date('2024-06-27'),
    content: {
      sec1: "Le 27 juin, j’ai eu l’opportunité de participer à la restitution du projet UCIA, un événement clé pour présenter l’avancement de ce projet encore en développement et actuellement en phase d’expérimentation. Cet événement a rassemblé une vingtaine de personnes, incluant les acteurs et contributeurs du projet ainsi que les animateurs des ateliers. Cette journée a été l’occasion de faire le point sur les progrès réalisés et de partager les perspectives futures.",
      sec2: {
        sec2_1: { 
          content: "La journée a débuté par une présentation globale du projet UCIA, rappelant ses objectifs et ses étapes clés. Cette introduction a permis de contextualiser les efforts déployés et de souligner l’importance de ce projet pour les adolescents impliqués. Un bureau d’études statistiques a ensuite pris la parole pour présenter un compte rendu détaillé, illustré par des graphiques montrant les taux de réussite et de satisfaction des adolescents. Ces données ont mis en lumière les impacts positifs du projet, tout en identifiant les domaines nécessitant encore des améliorations. Cette analyse statistique a été essentielle pour évaluer l’efficacité des actions menées et pour orienter les prochaines étapes du projet.", 
          img: "/assets/blog/articles/restitution_UCIA/presentation.png" 
        },
        sec2_2: { 
          content: "L’un des moments forts de cette restitution a été la présentation de la nouvelle version des scripts IA et de l’interface que j’ai développée en avant-première. J’ai eu l’occasion de montrer cette interface aux participants et de les accompagner lors de tests en direct. Cette démonstration a été très bien accueillie et a permis de recueillir des retours précieux pour les futures améliorations. Les participants ont pu manipuler l’interface, explorer ses fonctionnalités et donner leur avis sur son ergonomie et son utilité. Ces interactions ont été particulièrement enrichissantes, car elles ont fourni des perspectives nouvelles et des suggestions concrètes pour optimiser l’interface.", 
          img: "/assets/blog/articles/restitution_UCIA/demo_interface.png" 
        },
        sec2_3: { 
          content: "Cependant, tout ne s’est pas déroulé sans accroc. Lors de la présentation, nous avons rencontré des problèmes techniques imprévus. Plusieurs robots devaient être utilisés pour la démonstration, mais la connexion avec l’ordinateur se faisant via Wi-Fi, chaque robot agissait comme point d’accès. Le fait d’avoir plusieurs robots avec la même configuration Wi-Fi a perturbé la communication. Il a fallu identifier rapidement la source du problème et la ressoudre, tout cela devant une vingtaine de personnes attentives. Ces incidents ont nécessité une adaptation rapide et une gestion du stress pour trouver des solutions en temps réel. Cette expérience m’a permis de développer ma capacité à rester calme et efficace sous pression, une compétence essentielle dans le domaine professionnel.", 
          img: "/assets/blog/articles/restitution_UCIA/intervention.png" 
        },
      },
      sec3: 'Cet événement a été une expérience enrichissante et formatrice. J’ai particulièrement apprécié l’opportunité de présenter mon travail et de recevoir des retours directs des utilisateurs. La gestion des imprévus techniques m’a permis de développer ma capacité à rester calme et efficace sous pression. En fin de compte, voir l’interface fonctionner et être testée avec succès a été une grande source de satisfaction et de motivation pour la suite du projet. Cette expérience m’a également permis de renforcer mes compétences en gestion de projet et en communication, des atouts précieux pour ma carrière future.',
    },
    images: [
      '/assets/blog/articles/restitution_UCIA/debat.png',
      '/assets/blog/articles/restitution_UCIA/demo_bot.JPG',
      '/assets/blog/articles/restitution_UCIA/mise_en_place.jpg',
      '/assets/blog/articles/restitution_UCIA/demo_bot_2.png',
      '/assets/blog/articles/restitution_UCIA/demo_interface2.JPG',
      '/assets/blog/articles/restitution_UCIA/presentation_script_IA.png',
      '/assets/blog/articles/restitution_UCIA/presentation_script_IA_2.JPG',
      '/assets/blog/articles/restitution_UCIA/presentation_script_IA_3.png',
      '/assets/blog/articles/restitution_UCIA/reconnaissance.JPG',
    ],
    video: "",
    author: {
      name: 'Manon Arcas',
      avatar: '/assets/blog/me.jpg'
    },
    time: 3,
  },
  {
    id: 6,
    experienceId: 2,
    background: '/assets/blog/articles/reseaux_neurones/ultralytics.png',
    title: 'Découverte et manipulation de réseaux de neurones', 
    date: new Date('2024-07-04'),
    content: {
      sec1: "Dans le cadre du projet UCIA, j’ai eu l’opportunité de travailler sur diverses technologies, mais l'intelligence artificielle (IA) était un domaine que je n'avais pas encore exploré en profondeur. C’était ma première expérience concrète avec un modèle d’IA, ce qui m’a permis d'approfondir un sujet qui m'intéressait depuis longtemps, sans que j'aie eu vraiment l'occasion de m'y plonger. Après avoir finalisé mes autres tâches, j’ai décidé de me concentrer sur l’étude et la manipulation du modèle YOLO v8, utilisé pour la reconnaissance d’objets.",
      sec2: {
        sec2_1: { 
          content: "YOLO (You Only Look Once) est un modèle de détection d’objets en temps réel, réputé pour son efficacité et sa rapidité. En tant que novice dans le domaine de l'IA, ce modèle représentait un défi technique stimulant. J'ai commencé par explorer les modèles disponibles via une API fournie par l’entreprise, avec pour objectif de comprendre leur fonctionnement et leur processus d'entraînement.", 
          img: "/assets/blog/articles/reseaux_neurones/recognize.svg" 
        },
        sec2_2: { 
          content: "Pour cela, j'ai créé plusieurs datasets personnalisés, ce qui m'a aidé à mieux comprendre les exigences spécifiques en matière de données pour un modèle de détection d'objets. Utilisant Jupyter Notebook, j'ai appliqué des connaissances acquises en dataanalyse pour entraîner et valider les modèles YOLO. J'ai ainsi pu observer leurs performances sur des données réelles ", 
          img: "/assets/blog/articles/reseaux_neurones/dataset.png" 
        },
        sec2_3: { 
          content: "Pour partager mes découvertes, j’ai créé un dépôt Git rassemblant mes travaux autour du modèle YOLO v8. Ce dépôt inclut une fiche explicative sur le fonctionnement d'une IA de reconnaissance d’objets, destinée à un public varié, technique ou non. Cette documentation vise à démystifier les concepts clés de l’IA tout en offrant des exemples concrets de mise en œuvre. En complément, j'ai développé plusieurs scripts : un script de détection d’objet qui renvoit une image annotée avec l’objet reconnu, son label et le niveau de confiance ; un script d’entraînement afin de former le modèle sur un dataset personnalisé et enfin un serveur Flask permettant d'uploader une image via une interface web et de recevoir en retour l’image annotée, démontrant l'intégration du modèle d'IA dans une application web.", 
          img: "/assets/blog/articles/reseaux_neurones/git.svg" 
        },
      },
      sec3: "L'accueil de ce travail par l'équipe projet a été très positif, soulignant qu'il constituait une excellente base pour développer de nouveaux ateliers pédagogiques dans le cadre du projet UCIA. Cette reconnaissance a été particulièrement gratifiante pour moi, et l'initiative m'a permis de mettre en pratique diverses compétences, du développement web à la gestion d’API, en passant par la dataanalyse et la documentation technique. Cette exploration de l’IA a été une expérience extrêmement enrichissante et formatrice. Combiner théorie et pratique m’a permis de consolider mes connaissances techniques et de renforcer ma capacité à aborder des sujets complexes. Voir mon travail reconnu par l'équipe projet et envisagé pour des applications futures a été une grande source de satisfaction. Cette expérience m’a offert un aperçu précieux des défis et opportunités liés à l'intelligence artificielle.",
    },
    images: [
      '/assets/blog/articles/reseaux_neurones/compvision_tasks.png',
      '/assets/blog/articles/reseaux_neurones/conv.png',
      '/assets/blog/articles/reseaux_neurones/CNN_schematic.png',
      '/assets/blog/articles/reseaux_neurones/CNN_layout.gif'
    ],
    video: "",
    author: {
      name: 'Manon Arcas',
      avatar: '/assets/blog/me.jpg'
    },
    time: 2,
  },
  {
    id: 7,
    experienceId: 2,
    background: '/assets/blog/articles/bilan_LE/logo_back.svg',
    title: "Bilan - Stage à la Ligue de l'Enseignement Gironde", 
    date: new Date('2024-07-08'),
    content: {
      sec1: "A l’issue de mon stage au sein de la Ligue de l’enseignement, je souhaite partager un bilan de cette expérience, caractérisée par le développement de nombreuses compétences, de défis stimulants et une immersion approfondie dans le monde professionnel.",
      sec2: {
        sec2_1: { 
          content: "Mon stage au sein de la Ligue de l’enseignement a été une expérience profondément enrichissante, tant sur le plan technique que personnel. J'ai particulièrement apprécié l'autonomie qui m'a été accordée tout au long de mes missions. Cette liberté m'a permis de mener à bien des projets complexes, en prenant des décisions de manière indépendante, ce qui m'a fortement aidée à gagner en confiance et en compétence. Travailler sur le projet UCIA a été particulièrement stimulant, car il m’a permis de mettre en pratique et consolider des compétences acquises durant mes études mais également de combiner des domaines variés, tels que l'intelligence artificielle, la robotique, et le développement web. Cette diversité a rendu mon travail d'autant plus intéressant et m'a montré à quel point combiner plusieurs disciplines, bien que différentes, peut donner vie à des projets innovants.", 
          img: "/assets/blog/articles/bilan_LE/reflexion.png" 
        },
        sec2_2: { 
          content: "Cependant, cette autonomie a également présenté certains défis. Bien que j'aie apprécié la liberté de gérer mon travail, j'ai parfois ressenti un manque d'accompagnement, notamment sur des aspects techniques très spécifiques. Ce manque de soutien était compréhensible, étant donné que la spécialité de l'organisme n'était pas purement technique. Néanmoins, cela m'a forcée à développer mes compétences en autodidaxie et à trouver des solutions par moi-même, ce qui s'est avéré formateur et bénéfique à long terme.", 
          img: "" 
        },
        sec2_3: { 
          content: "Ce stage m'a offert l'opportunité d'acquérir une expérience significative dans plusieurs domaines essentiels. Tout d’abord, la gestion de projets techniques a été un aspect central de mon travail. Participer à toutes les étapes du projet UCIA, de la conception initiale à la présentation finale, m'a permis de développer une approche structurée de la planification et de la gestion du temps. J'ai également pu affiner mes compétences en communication, en veillant à ce que les différentes parties prenantes soient informées de l'avancement du projet et en récoltant des retours constructifs.", 
          img: "" 
        },
        sec2_4: { 
          content: "Sur le plan technique, le développement web et l’intelligence artificielle ont été au cœur de mon activité. Le développement de l'interface de programmation pour le robot ROSA, combinant des technologies comme Blockly et Flask, m’a permis de mettre en pratique mes compétences en développement tout en apprenant à gérer des API et à intégrer diverses fonctionnalités dans une application cohérente. De plus, mon travail sur le modèle YOLO v8 m’a offert une première expérience concrète dans l’univers de l'intelligence artificielle. La création de datasets personnalisés, l'entraînement et le déploiement de modèles, ainsi que l'analyse des résultats, ont enrichi ma compréhension de ce domaine en plein essor.", 
          img: "/assets/blog/articles/bilan_LE/competences.png" 
        },
        sec2_5: { 
          content: "En parallèle, j'ai également dû gérer divers aspects liés à la maintenance et au déploiement des systèmes sur lesquels j’ai travaillé. Les défis rencontrés, comme les problèmes techniques imprévus lors des démonstrations, m’ont appris à réagir rapidement et à trouver des solutions efficaces sous pression. Ces expériences m'ont permis de renforcer ma capacité à rester calme et à gérer les imprévus, des compétences essentielles dans un environnement professionnel.", 
          img: "" 
        },
        sec2_6: { 
          content: "Malgré les nombreuses compétences que j’ai pu développer, certaines zones de ce stage pourraient être améliorées. Tout d’abord, j’aurais apprécié un peu plus d'accompagnement. Bien que travailler seule sur ait été formateur, un soutien technique supplémentaire aurait pu rendre certaines tâches plus fluides et moins chronophages.", 
          img: "" 
        },
        sec2_7: { 
          content: "Ensuite, l’accès à une documentation plus complète dès le début aurait facilité la réalisation de certains projets, notamment en ce qui concerne le déploiement de logiciels et la gestion des dépendances. Disposer de ressources plus structurées aurait non seulement simplifié mon travail, mais aurait également permis de mieux comprendre certaines nuances techniques dès les premières étapes du projet.", 
          img: "/assets/blog/articles/bilan_LE/tech.png" 
        },
      },
      sec3: "En conclusion, ce stage a été une expérience extrêmement formatrice qui m’a permis de consolider mes compétences techniques, de découvrir de nouveaux domaines, et de gagner en autonomie. Il m’a aussi montré l’importance de la communication et de la collaboration interdisciplinaire pour mener à bien des projets.",
    },
    images: [],
    video: "",
    author: {
      name: 'Manon Arcas',
      avatar: '/assets/blog/me.jpg'
    },
    time: 4,
  },
];
