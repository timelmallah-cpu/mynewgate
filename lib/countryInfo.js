// Basic facts and a landmark photo (Wikimedia Commons, free licence) for each country page.
// Photo fields: [image URL, Commons file page, author, licence, licence URL].
export const COUNTRY_INFO = {
  de: {
    capital: { ar: "برلين", en: "Berlin" }, language: { ar: "الألمانية", en: "German" }, currency: { ar: "اليورو", en: "Euro (EUR)" },
    portal: { name: "Study in Germany (DAAD)", url: "https://www.study-in-germany.de/en/" },
    landmark: { ar: "بوابة براندنبورغ في برلين", en: "Brandenburg Gate, Berlin" },
    photo: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1280px-Brandenburger_Tor_abends.jpg", "https://commons.wikimedia.org/wiki/File:Brandenburger_Tor_abends.jpg", "Thomas Wolf, www.foto-tw.de", "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0"],
  },
  nl: {
    capital: { ar: "أمستردام (ومقر الحكومة في لاهاي)", en: "Amsterdam (seat of government: The Hague)" }, language: { ar: "الهولندية", en: "Dutch" }, currency: { ar: "اليورو", en: "Euro (EUR)" },
    portal: { name: "Study in NL (Nuffic)", url: "https://www.studyinnl.org/" },
    landmark: { ar: "قناة كايزرسخراخت في أمستردام", en: "Keizersgracht canal, Amsterdam" },
    photo: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Keizersgracht_Jul_2019.jpg/1280px-Keizersgracht_Jul_2019.jpg", "https://commons.wikimedia.org/wiki/File:Keizersgracht_Jul_2019.jpg", "JayAmber", "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0"],
  },
  es: {
    capital: { ar: "مدريد", en: "Madrid" }, language: { ar: "الإسبانية، ولغات رسمية أخرى في بعض الأقاليم", en: "Spanish, plus co-official languages in some regions" }, currency: { ar: "اليورو", en: "Euro (EUR)" },
    portal: { name: "SEPIE (Study in Spain)", url: "https://www.sepie.es/internacionalizacion.html" },
    landmark: { ar: "كنيسة ساغرادا فاميليا في برشلونة", en: "Sagrada Família, Barcelona" },
    photo: ["https://upload.wikimedia.org/wikipedia/commons/e/ef/SF_maig_2_cropped.jpg", "https://commons.wikimedia.org/wiki/File:SF_maig_2_cropped.jpg", "Canaan", "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0"],
  },
  be: {
    capital: { ar: "بروكسل", en: "Brussels" }, language: { ar: "الهولندية والفرنسية والألمانية", en: "Dutch, French and German" }, currency: { ar: "اليورو", en: "Euro (EUR)" },
    portal: { name: "Study in Flanders", url: "https://www.studyinflanders.be/" },
    landmark: { ar: "الساحة الكبرى (غراند بلاس) في بروكسل", en: "Grand-Place, Brussels" },
    photo: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/2/26/Grand-Place%2C_Brussels_-_panorama%2C_June_2018.jpg/1280px-Grand-Place%2C_Brussels_-_panorama%2C_June_2018.jpg", "https://commons.wikimedia.org/wiki/File:Grand-Place,_Brussels_-_panorama,_June_2018.jpg", "Celuici", "CC BY-SA 4.0", "https://creativecommons.org/licenses/by-sa/4.0"],
  },
  ee: {
    capital: { ar: "تالين", en: "Tallinn" }, language: { ar: "الإستونية", en: "Estonian" }, currency: { ar: "اليورو", en: "Euro (EUR)" },
    portal: { name: "Study in Estonia", url: "https://www.studyinestonia.ee/" },
    landmark: { ar: "البلدة القديمة في تالين", en: "Tallinn Old Town" },
    photo: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/Old_Town_of_Tallinn%2C_Tallinn%2C_Estonia_-_panoramio_%2858%29.jpg/1280px-Old_Town_of_Tallinn%2C_Tallinn%2C_Estonia_-_panoramio_%2858%29.jpg", "https://commons.wikimedia.org/wiki/File:Old_Town_of_Tallinn,_Tallinn,_Estonia_-_panoramio_(58).jpg", "Ben Bender", "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0"],
  },
  pl: {
    capital: { ar: "وارسو", en: "Warsaw" }, language: { ar: "البولندية", en: "Polish" }, currency: { ar: "الزلوتي البولندي", en: "Polish złoty (PLN)" },
    portal: { name: "NAWA (Study in Poland)", url: "https://nawa.gov.pl/en" },
    landmark: { ar: "الساحة الرئيسية وسوق القماش في كراكوف", en: "Main Market Square and Cloth Hall, Kraków" },
    photo: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Sukiennice_and_Main_Market_Square_Krakow_Poland.JPG/1280px-Sukiennice_and_Main_Market_Square_Krakow_Poland.JPG", "https://commons.wikimedia.org/wiki/File:Sukiennice_and_Main_Market_Square_Krakow_Poland.JPG", "Jorge Lascar", "CC BY 2.0", "https://creativecommons.org/licenses/by/2.0"],
  },
  hu: {
    capital: { ar: "بودابست", en: "Budapest" }, language: { ar: "المجرية", en: "Hungarian" }, currency: { ar: "الفورنت المجري", en: "Hungarian forint (HUF)" },
    portal: { name: "Study in Hungary (Tempus)", url: "https://studyinhungary.hu/" },
    landmark: { ar: "مبنى البرلمان المجري على نهر الدانوب في بودابست", en: "Hungarian Parliament on the Danube, Budapest" },
    photo: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Hungarian_Parliament_Building_from_across_the_Danube%2C_2025-01-11.jpg/1280px-Hungarian_Parliament_Building_from_across_the_Danube%2C_2025-01-11.jpg", "https://commons.wikimedia.org/wiki/File:Hungarian_Parliament_Building_from_across_the_Danube,_2025-01-11.jpg", "Kilyann Le Hen", "CC BY 4.0", "https://creativecommons.org/licenses/by/4.0"],
  },
  ro: {
    capital: { ar: "بوخارست", en: "Bucharest" }, language: { ar: "الرومانية", en: "Romanian" }, currency: { ar: "الليو الروماني", en: "Romanian leu (RON)" },
    portal: { name: "Study in Romania", url: "https://studyinromania.gov.ro/" },
    landmark: { ar: "قلعة بران في ترانسيلفانيا", en: "Bran Castle, Transylvania" },
    photo: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Castelul_Bran2.jpg/1280px-Castelul_Bran2.jpg", "https://commons.wikimedia.org/wiki/File:Castelul_Bran2.jpg", "Dobre Cezar", "CC BY-SA 3.0 RO", "https://creativecommons.org/licenses/by-sa/3.0/ro/deed.en"],
  },
  lv: {
    capital: { ar: "ريغا", en: "Riga" }, language: { ar: "اللاتفية", en: "Latvian" }, currency: { ar: "اليورو", en: "Euro (EUR)" },
    portal: { name: "Study in Latvia", url: "https://www.studyinlatvia.lv/" },
    landmark: { ar: "البلدة القديمة في ريغا ونهر داوغافا", en: "Riga Old Town and the Daugava" },
    photo: ["https://upload.wikimedia.org/wikipedia/commons/d/df/Riga_Dom_Bruecke_Daugava.jpg", "https://commons.wikimedia.org/wiki/File:Riga_Dom_Bruecke_Daugava.jpg", "Brunswyk", "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0"],
  },
  lt: {
    capital: { ar: "فيلنيوس", en: "Vilnius" }, language: { ar: "الليتوانية", en: "Lithuanian" }, currency: { ar: "اليورو", en: "Euro (EUR)" },
    portal: { name: "Study in Lithuania", url: "https://studyin.lt/" },
    landmark: { ar: "كاتدرائية فيلنيوس", en: "Vilnius Cathedral" },
    photo: ["https://upload.wikimedia.org/wikipedia/commons/d/d8/Vilnius_-_Cathedral_01.jpg", "https://commons.wikimedia.org/wiki/File:Vilnius_-_Cathedral_01.jpg", "Jan Mehlich", "CC BY-SA 3.0", "https://creativecommons.org/licenses/by-sa/3.0"],
  },
  it: {
    capital: { ar: "روما", en: "Rome" }, language: { ar: "الإيطالية", en: "Italian" }, currency: { ar: "اليورو", en: "Euro (EUR)" },
    portal: { name: "Universitaly (MUR)", url: "https://www.universitaly.it/" },
    landmark: { ar: "الكولوسيوم في روما", en: "The Colosseum, Rome" },
    photo: ["https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg/1280px-Colosseum_in_Rome%2C_Italy_-_April_2007.jpg", "https://commons.wikimedia.org/wiki/File:Colosseum_in_Rome,_Italy_-_April_2007.jpg", "Diliff", "CC BY-SA", "https://commons.wikimedia.org/wiki/File:Colosseum_in_Rome,_Italy_-_April_2007.jpg"],
  },
};
