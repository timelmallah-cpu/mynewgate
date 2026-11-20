// French text of the student visa routes for residents of Algeria and Morocco. Written by hand from the English
// text of lib/visa/dz.js and lib/visa/ma.js (same facts, same sources, same "to verify" flags, which come from those
// files). When a route changes there, change it here too. Tunisia has no researched route yet: general route only.

const RES_DZ = "Si vous n'êtes pas de nationalité algérienne, joignez un titre de séjour valable en Algérie.";
const RES_MA = "Si vous n'êtes pas de nationalité marocaine, joignez votre carte de séjour marocaine.";

// Steps shared by both origins (online systems, same text in the English files).
const S = {
  no: (vfs) => [
    "Créez la demande de permis de séjour pour études sur le portail de l'UDI (Application Portal Norway), payez les frais en ligne et imprimez la lettre de couverture (cover letter).",
    "Préparez les documents de la liste de l'UDI pour les études : lettre d'admission, preuve de financement, preuve de logement et passeport.",
    `Prenez rendez-vous et présentez-vous en personne ${vfs} pour remettre les documents et donner vos empreintes.`,
    "Le dossier est envoyé par voie électronique à l'UDI, qui décide en Norvège.",
  ],
  gr: [
    "Préparez la lettre d'admission de l'université grecque, le formulaire de visa national (D) signé, des photos et un passeport valide.",
    "Ajoutez la preuve de ressources, une assurance maladie et un extrait de casier judiciaire, en général légalisés et traduits (vérifiez la liste actuelle auprès de l'ambassade).",
    "Déposez la demande en personne sur rendez-vous ; un entretien peut être demandé.",
    "Après l'arrivée, demandez le titre de séjour étudiant en Grèce avant l'expiration du visa.",
  ],
  is: [
    "Déposez la demande de permis de séjour pour études auprès de la Direction de l'immigration (Útlendingastofnun) avec tous les documents, avant le 1er juillet pour le semestre d'automne ou le 1er novembre pour le printemps.",
    "Les originaux papier sont envoyés par la poste à la Direction, Dalvegur 18, Kópavogur.",
    "Une fois le permis accordé, comme vous avez besoin d'un visa pour entrer en Islande, la Direction transmet la demande de visa d'entrée à l'ambassade compétente.",
    "Après l'arrivée, prenez rendez-vous pour la photo de la carte de séjour à la Direction ou dans un bureau de commissaire de district.",
  ],
  tr: (second) => [
    "Obtenez la lettre d'admission de l'université turque.",
    second,
    "Après l'arrivée et l'inscription à l'université, demandez le permis de séjour étudiant en ligne sur e-ikamet.goc.gov.tr et remettez les documents au bureau des étudiants internationaux de l'université dans le délai qu'il fixe.",
  ],
  my: [
    "Obtenez la lettre d'admission de l'université malaisienne.",
    "Déposez vos documents dans le système de l'université, qui envoie la demande de Student Pass à EMGS, et payez les frais.",
    "Attendez la lettre d'approbation eVAL du Département de l'immigration ; vous devez entrer en Malaisie dans les 6 mois.",
    "Vérifiez si votre nationalité a besoin d'un visa pour la Malaisie ; si oui, demandez le visa d'entrée unique (Single Entry Visa) sur le portail eVISA avec la lettre eVAL.",
    "Après l'arrivée, passez la visite médicale dans une clinique agréée par EMGS dans les 7 jours ; la vignette du Student Pass est ensuite apposée dans votre passeport.",
  ],
  ca: [
    "Obtenez une lettre d'acceptation d'un établissement d'enseignement désigné (EED/DLI) au Canada.",
    "Préparez la preuve de ressources : frais de scolarité de la première année + 23 448 dollars canadiens pour la vie + le voyage, avec l'origine de l'argent.",
    "Déposez la demande de permis d'études en ligne et payez les frais (150 + 85 dollars canadiens pour les données biométriques).",
    "Donnez vos données biométriques au centre de visas après la lettre de biométrie, et passez l'examen médical s'il est demandé.",
    "Après l'approbation, vous recevez la lettre d'introduction et un visa d'entrée si votre nationalité en a besoin ; le permis est délivré à l'arrivée.",
  ],
  au: [
    "Acceptez l'offre et payez l'acompte pour recevoir la confirmation d'inscription (CoE).",
    "Souscrivez l'assurance OSHC et préparez la preuve de ressources (une année de frais de scolarité + 29 710 dollars australiens pour la vie + le voyage) et votre certificat d'anglais.",
    "Déposez la demande de visa étudiant (sous-classe 500) en ligne et payez les frais (2 500 dollars australiens depuis juillet 2026).",
    "Donnez vos données biométriques ou passez l'examen médical s'ils sont demandés, et attendez la décision avant de partir.",
  ],
  nz: [
    "Obtenez l'offre de place (offer of place) de l'université néo-zélandaise.",
    "Préparez la preuve de ressources (20 000 dollars néo-zélandais par an), l'assurance, et l'examen médical s'il est demandé.",
    "Déposez la demande de visa étudiant en ligne.",
    "Après l'accord de principe, payez les frais de la première année et envoyez le reçu pour que le visa soit délivré.",
  ],
  gb: (country) => [
    "Obtenez une offre inconditionnelle et un numéro CAS de l'université britannique.",
    "Préparez la preuve de ressources (frais de première année non payés + 1 203 livres par mois hors de Londres ou 1 570 à Londres, jusqu'à 9 mois) et gardez-la sur votre compte 28 jours consécutifs.",
    "Passez le test de tuberculose (TB) dans une clinique agréée par le Home Office dans votre pays, car votre pays figure sur la liste du test.",
    "Déposez la demande de visa étudiant en ligne sur gov.uk au plus tôt 6 mois avant le début des cours, et payez les frais de demande et l'IHS (frais de santé).",
    `Prenez rendez-vous pour les données biométriques au centre de demande de visa britannique ${country} que vous choisissez dans la demande (villes et prestataire sur la page « Find a visa application centre » de gov.uk, à vérifier).`,
  ],
};

export const VISA_FR = {
  dz: {
    fr: { where: "Campus France Algérie (la procédure Études en France est obligatoire), puis le centre Capago de votre zone : Alger, Oran, ou Annaba et Constantine. Le consulat de France compétent (Alger, Oran ou Annaba) décide.", steps: ["Créez votre dossier sur Études en France et suivez la procédure Campus France Algérie dans les dates de la campagne (vérifiez frais et dates sur le site de Campus France Algérie).", "Après le message de fin de procédure de Campus France, remplissez la demande de visa sur France-Visas.", "Prenez rendez-vous pour le dépôt du dossier et la biométrie au centre Capago de votre zone.", "Prévoyez au moins un mois entre le dépôt et votre date de départ."], note: RES_DZ },
    es: { where: "Selon votre consulat d'Espagne : dans la circonscription d'Oran, les demandes de visa d'études se déposent au centre BLS d'Oran sur rendez-vous pris sur le site de BLS. Dans la circonscription d'Alger, suivez les instructions du consulat général (à vérifier).", steps: ["Prenez rendez-vous sur le site BLS Algérie (circonscription d'Oran).", "Préparez la liste BLS pour étudiants : formulaire signé, photo récente, lettre d'admission et preuve de ressources.", "Les documents d'état civil algériens sont légalisés au ministère algérien des Affaires étrangères et traduits (l'Algérie a rejoint la Convention Apostille le 9 juillet 2026 : demandez si l'apostille est acceptée à la place, à vérifier)."], note: RES_DZ },
    it: { where: "L'ambassade d'Italie à Alger, après la demande de pré-inscription sur Universitaly (mode de prise de rendez-vous à vérifier sur le site de l'ambassade).", steps: ["Déposez la demande de pré-inscription sur Universitaly et choisissez l'ambassade à Alger.", "Préparez la liste « Études – admission à l'université » de l'ambassade, dont le certificat de pré-inscription envoyé uniquement par Universitaly, une preuve de logement en Italie et les moyens du retour (par exemple un billet retour)."] },
    be: { where: "Le centre TLScontact d'Alger, puis un questionnaire en personne à l'ambassade de Belgique juste après le dépôt.", steps: ["Complétez la liste TLScontact pour les études (article 58).", "Équivalence de votre diplôme algérien par la Fédération Wallonie-Bruxelles (ou preuve de la demande), sauf pour une année préparatoire et certains cas.", "Preuve de financement : une bourse, ou un engagement de prise en charge (annexe 32) signé par un seul garant.", "Les documents algériens sont légalisés par le ministère algérien des Affaires étrangères, puis par l'ambassade de Belgique (l'Algérie a rejoint la Convention Apostille le 9 juillet 2026 : demandez si l'apostille est acceptée à la place, à vérifier). Extrait de casier judiciaire si vous avez plus de 21 ans.", "Après le dépôt chez TLScontact, rendez-vous directement à l'ambassade pour remplir le questionnaire."] },
    de: { where: "L'ambassade d'Allemagne à Alger, avec une demande sur le portail des services consulaires (digital.diplo.de) (étapes du rendez-vous à Alger à vérifier).", steps: ["Demandez le visa d'études sur digital.diplo.de et téléversez vos documents.", "Présentez-vous au rendez-vous avec tous les originaux."], note: RES_DZ },
    no: { where: "Le centre VFS Global pour la Norvège à Alger (Ben Aknoun) ; l'UDI décide, et depuis le 22 juillet 2026 l'ambassade de Norvège à Abou Dabi traite les demandes déposées en Algérie.", steps: S.no("au centre VFS de Ben Aknoun, à Alger,") },
    gr: { where: "L'ambassade de Grèce à Alger (mode de dépôt du visa national D à vérifier auprès de l'ambassade).", steps: S.gr },
    is: { where: "La Direction de l'immigration islandaise, en ligne et par la poste ; le centre VFS pour la Norvège à Alger reçoit aussi les demandes de visa pour l'Islande.", steps: S.is },
    tr: { where: "Les Algériens titulaires d'un passeport ordinaire âgés de 15 à 50 ans ont besoin d'un visa ; le visa d'études est délivré par l'ambassade ou un consulat de Turquie en Algérie (mode de rendez-vous à vérifier).", steps: S.tr("Demandez le visa étudiant à l'ambassade ou au consulat de Turquie ; le visa électronique (e-Visa) ne permet pas d'étudier."), note: RES_DZ },
    my: { where: "La demande se fait en ligne par l'université et EMGS ; le visa d'entrée (si votre nationalité en a besoin) par le portail eVISA de la Malaisie ou l'ambassade de Malaisie à Alger.", steps: S.my, note: RES_DZ },
    ca: { where: "Demande en ligne dans un compte IRCC ; biométrie au centre de réception des demandes de visa du Canada (VFS Global) en Algérie indiqué dans la lettre de biométrie (vérifiez la ville).", steps: S.ca, note: RES_DZ },
    au: { where: "Demande en ligne dans ImmiAccount ; si la biométrie est demandée, au centre que le ministère indique en Algérie (à vérifier).", steps: S.au, note: RES_DZ },
    nz: { where: "Demande en ligne sur Immigration Online d'Immigration New Zealand ; en général sans passage à une ambassade (à vérifier).", steps: S.nz, note: RES_DZ },
    gb: { where: "Le centre de demande de visa britannique en Algérie que vous choisissez dans la demande (villes et prestataire sur la page « Find a visa application centre » de gov.uk, à vérifier).", steps: S.gb("en Algérie"), note: "Les Algériens ont besoin d'un visa pour le Royaume-Uni. L'Algérie figure sur la liste du test de tuberculose de gov.uk : le certificat est exigé pour un séjour de plus de 6 mois." },
  },
  ma: {
    fr: { where: "Campus France Maroc (la procédure Études en France est obligatoire, le Maroc étant un pays à procédure), puis un centre TLScontact pour déposer le dossier de visa.", steps: ["Créez votre dossier sur Études en France, ajoutez vos choix et validez-le dans les dates de la campagne.", "Payez les frais de dossier Campus France : 1 900 dirhams en ligne, ou en espèces dans les agences du Crédit du Maroc avec les frais bancaires.", "Passez l'entretien ; une fois admis, faites l'étape pré-consulaire « Je suis accepté ».", "Quand le dossier est complet, Campus France vous autorise à prendre rendez-vous chez TLScontact pour le dossier de visa.", "Après l'arrivée, validez le visa en ligne dans les 3 mois."], note: "Le niveau B2 en français est recommandé pour étudier en France. Les frais ne sont pas remboursés même en cas de refus." },
    es: { where: "Le consulat d'Espagne de votre circonscription (le Maroc en compte plusieurs). Dans la circonscription de Rabat : dépôt en personne au centre BLS de Rabat (Agdal), et demande de rendez-vous en personne au consulat.", steps: ["À Rabat : demandez le rendez-vous en personne au consulat général le vendredi, de 10 h à 12 h.", "Lettre d'admission, preuve du paiement des frais de scolarité et preuve de logement en Espagne.", "Ressources égales à 100 % de l'IPREM : 600 euros par mois (7 200 euros par an), en plus des frais de scolarité.", "Assurance maladie sans franchise, sans participation et sans plafond de couverture.", "Pour un séjour de plus de 180 jours : un certificat médical récent d'un médecin de la liste du consulat.", "Les frais de visa sont de 874 dirhams. Retirez le visa en personne dans les deux mois après la notification."], note: "Ce sont les règles du consulat de Rabat. Si un autre consulat vous couvre (Casablanca, Tanger, Tétouan, Nador, Agadir ou Larache), vérifiez sa propre liste." },
    de: { where: "L'ambassade d'Allemagne à Rabat, avec une demande en ligne sur le portail des services consulaires (digital.diplo.de) (étapes du rendez-vous à Rabat à vérifier).", steps: ["Demandez le visa d'études sur digital.diplo.de/studium et téléversez vos documents.", "Présentez-vous au rendez-vous avec tous les originaux.", "Les frais de visa sont de 75 euros, payés directement à la représentation allemande."], note: RES_MA },
    nl: { where: "Votre université dépose la demande auprès de l'IND ; après l'accord, vous retirez la vignette MVV à l'ambassade des Pays-Bas à Rabat si la lettre de l'IND mentionne le Maroc.", steps: ["Après la lettre d'accord de l'IND, vous avez 3 mois pour demander la vignette.", "Demandez tôt le rendez-vous à l'ambassade à Rabat par e-mail ; elle est très sollicitée au printemps et en été.", "Remettez votre passeport au rendez-vous ; la vignette prend jusqu'à 10 jours ouvrables, puis retirez-la avec votre reçu."] },
    be: { where: "TLScontact ; les demandes d'études se déposent à Rabat, avec un questionnaire à l'ambassade de Belgique à Rabat le même jour (à vérifier).", steps: ["Complétez le dossier de visa D pour études selon la liste de TLScontact.", "Si vous avez un garant, il signe l'engagement de prise en charge (annexe 32) en personne à l'ambassade de Belgique à Rabat, sur rendez-vous en ligne ; l'ambassade évalue ses moyens.", "Déposez le dossier chez TLScontact à Rabat."], note: "Sans l'accord de l'ambassade sur les moyens du garant, le visa est en général refusé." },
    it: { where: "VFS Global : les résidents de la circonscription consulaire de Casablanca prennent rendez-vous chez VFS Casablanca ; les autres passent par l'ambassade d'Italie à Rabat via VFS Rabat.", steps: ["Déposez la pré-inscription sur Universitaly et attendez la validation de l'université.", "Obtenez une attestation CIMEA ou une déclaration de valeur pour votre diplôme, avec une traduction certifiée.", "Montrez au moins 10 179,85 euros par an par un blocage bancaire ; les espèces ne sont pas acceptées. Si une bourse est inférieure, montrez le reste.", "Prenez rendez-vous chez VFS et déposez le dossier."], note: RES_MA },
    pl: { where: "La section consulaire de l'ambassade de Pologne à Rabat, avec rendez-vous uniquement par e-Konsulat.", steps: ["Enregistrez la demande de visa national et prenez rendez-vous sur e-Konsulat. L'ambassade ne donne pas de rendez-vous par téléphone ni par e-mail.", "Déposez la demande en personne avec les documents supplémentaires pour les études."], note: RES_MA },
    cz: { where: "L'ambassade de la République tchèque à Rabat ; le ministère tchèque de l'Intérieur décide en principe dans les 60 jours.", steps: ["Prenez rendez-vous comme indiqué sur la page des rendez-vous de l'ambassade.", "Déposez tôt : le traitement peut prendre jusqu'à 60 jours après la demande."] },
    se: { where: "Demande en ligne auprès de l'Office suédois des migrations ; la carte de séjour est envoyée à l'ambassade de Suède à Rabat.", steps: ["Après l'admission, demandez en ligne le permis de séjour pour études deux à trois mois avant le début des cours.", "Si l'Office demande la biométrie ou un contrôle du passeport, allez à l'ambassade le mardi ou le jeudi de 14 h à 15 h, sans rendez-vous.", "Après l'accord, la carte arrive à l'ambassade en 3 à 4 semaines ; retirez-la aux mêmes horaires."] },
    dk: { where: "Demande en ligne auprès des autorités danoises, puis dépôt des documents, du passeport et de la biométrie dans un centre VFS Global au Maroc ; le dossier est transmis à l'ambassade du Danemark à Rabat (centres VFS pour les permis de séjour à vérifier).", steps: ["Demandez le permis de séjour pour études, payez les frais et obtenez le Case Order ID.", "Payez les frais de l'ambassade en ligne.", "Déposez les documents, la pièce d'identité, le passeport et la biométrie chez VFS."] },
    hu: { where: "La section consulaire de l'ambassade de Hongrie à Rabat (compétente pour le Maroc et la Mauritanie) ; le permis de séjour pour études se dépose en personne (mode de rendez-vous à vérifier).", steps: ["Préparez le formulaire de permis de séjour pour études et son annexe sur le site de l'immigration hongroise.", "Contactez l'ambassade pour un rendez-vous et déposez la demande en personne. Les boursiers Stipendium Hungaricum suivent les instructions de la bourse."] },
    at: { where: "L'ambassade d'Autriche à Rabat, où vous déposez en personne le permis de séjour étudiant (Aufenthaltsbewilligung Student) (mode de rendez-vous à vérifier).", steps: ["Après l'admission conditionnelle ou définitive, préparez les documents de la liste de l'OeAD.", "Contactez tôt l'ambassade pour un rendez-vous et déposez la demande en personne.", "Après l'accord, l'ambassade délivre votre visa d'entrée."] },
    no: { where: "Les centres VFS Global de Rabat, Casablanca et Tanger (depuis janvier 2026).", steps: S.no("au centre VFS choisi lors de la réservation (Rabat, Casablanca ou Tanger)") },
    gr: { where: "Le bureau consulaire de l'ambassade de Grèce à Rabat (18, rue Aït Hdidou, Souissi) ; le bureau de Casablanca a fermé en 2018.", steps: S.gr },
    is: { where: "La Direction de l'immigration islandaise, en ligne et par la poste, puis une ambassade désignée par la Direction pour le visa d'entrée (à vérifier pour les résidents du Maroc).", steps: S.is },
    tr: { where: "Les Marocains titulaires d'un passeport ordinaire sont exemptés de visa jusqu'à 90 jours ; un visa d'études, si l'université le demande, est délivré par l'ambassade de Turquie à Rabat.", steps: S.tr("Demandez à l'université si l'entrée sans visa suivie du permis de séjour suffit, ou si elle exige un visa étudiant de l'ambassade."), note: RES_MA },
    my: { where: "La demande se fait en ligne par l'université et EMGS ; le visa d'entrée (si votre nationalité en a besoin) par le portail eVISA de la Malaisie ou l'ambassade de Malaisie à Rabat.", steps: S.my, note: RES_MA },
    ca: { where: "Demande en ligne dans un compte IRCC ; biométrie au centre de réception des demandes de visa du Canada (VFS Global) au Maroc indiqué dans la lettre de biométrie (vérifiez la ville).", steps: S.ca, note: RES_MA },
    au: { where: "Demande en ligne dans ImmiAccount ; si la biométrie est demandée, au centre que le ministère indique au Maroc (à vérifier).", steps: S.au, note: RES_MA },
    nz: { where: "Demande en ligne sur Immigration Online d'Immigration New Zealand ; en général sans passage à une ambassade (à vérifier).", steps: S.nz, note: RES_MA },
    gb: { where: "Le centre de demande de visa britannique au Maroc que vous choisissez dans la demande (villes et prestataire sur la page « Find a visa application centre » de gov.uk, à vérifier).", steps: S.gb("au Maroc"), note: "Les Marocains ont besoin d'un visa pour le Royaume-Uni. Le Maroc figure sur la liste du test de tuberculose de gov.uk : le certificat est exigé pour un séjour de plus de 6 mois." },
  },
};

export const FR_ORIGINS = {
  algerie: { o: "dz", name: "Algérie", from: "d'Algérie", people: "Algériens", cur: "DZD" },
  maroc: { o: "ma", name: "Maroc", from: "du Maroc", people: "Marocains", cur: "MAD" },
  tunisie: { o: "tn", name: "Tunisie", from: "de Tunisie", people: "Tunisiens", cur: "TND" },
};
