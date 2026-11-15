// The site's tools, shown on the tools page, on the landing page and in the header menu.
// home: true = shown on the landing page.

export const TOOL_ICONS = {
  quiz: <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm9 16-4-4" />,
  english: <path d="M4 5h16v11H9l-5 4zM8 9h8M8 12h5" />,
  planner: <path d="M4 6h16v14H4zM4 10h16M8 3v5M16 3v5M8 14h3M8 17h6" />,
  countries: <path d="M4 5h16v14H4zM4 10h16M10 5v14" />,
  compare: <path d="M5 4h5v16H5zM14 4h5v16h-5zM7.5 8h0M16.5 8h0" />,
  cost: <path d="M12 3v18M16 7h-5.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H8" />,
  docs: <path d="M7 3h7l4 4v14H7zM14 3v4h4M10 12l1.5 1.5L15 10M10 17h6" />,
  list: <path d="M7 3h10v18l-5-4-5 4z" />,
  cert: <path d="M4 5h16v11H4zM8 9h8M8 12h5M15 16l1 5 2-2 2 2 1-5" />,
  visa: <path d="M5 3h14v18H5zM9 8h6M12 11a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z" />,
};

export const TOOLS = {
  ar: [
    { id: "english", href: "/english-check", home: true, title: "هل درجتك في الإنجليزية تكفي؟", text: "اكتب درجة IELTS أو TOEFL وشوف البرامج اللي تقبلها." },
    { id: "planner", href: "/planner", home: true, title: "خطط مواعيد التقديم", text: "خطة من الاختبار للسفر، وتضيفها لتقويم موبايلك." },
    { id: "cert", href: "/school-certificate", title: "ثانويتك تدخلك الجامعة على طول؟", text: "لطلاب البكالوريوس: هل شهادتك تكفي في كل دولة، أم تحتاج معادلة أو سنة إضافية." },
    { id: "visa", href: "/visa", home: true, title: "تأشيرة الدراسة من بلدك", text: "تقدم فين وإزاي من مصر، مع رابط الحجز الرسمي لكل دولة." },
    { id: "countries", href: "/countries", home: true, title: "قارن الدول", text: "الرسوم والمعيشة وساعات الشغل والإقامة بعد التخرج في جدول واحد." },
    { id: "compare", href: "/compare", title: "قارن البرامج", text: "حط لحد 3 برامج جنب بعض وشوف الفرق." },
    { id: "quiz", href: "/quiz", title: "ابحث عن برنامج", text: "5 أسئلة وتطلع لك البرامج المناسبة لميزانيتك وتخصصك." },
    { id: "cost", href: "/quiz", title: "حاسبة التكلفة", text: "موجودة في صفحة كل برنامج: الرسوم والمعيشة وإثبات المال للتأشيرة." },
    { id: "docs", href: "/guide#documents", title: "قائمة الأوراق", text: "الأوراق المطلوبة لكل دولة، وتعلّم على اللي جهزته." },
    { id: "list", href: "/my-list", title: "قائمتي", text: "احفظ البرامج والمنح، ونزّل مواعيدها على التقويم." },
  ],
  en: [
    { id: "english", href: "/english-check", home: true, title: "Is your English score enough?", text: "Enter an IELTS or TOEFL score and see which programmes accept it." },
    { id: "planner", href: "/planner", home: true, title: "Plan your application dates", text: "A plan from the language test to travel, ready for your phone's calendar." },
    { id: "cert", href: "/school-certificate", title: "Does your school certificate get you in?", text: "For bachelor's applicants: is your certificate enough in each country, or do you need recognition or an extra year." },
    { id: "visa", href: "/visa", home: true, title: "Student visa from your country", text: "Where and how to apply from Egypt, with the official booking link for each country." },
    { id: "countries", href: "/countries", home: true, title: "Compare countries", text: "Fees, living costs, work hours and post-study stay in one table." },
    { id: "compare", href: "/compare", title: "Compare programmes", text: "Put up to 3 programmes side by side." },
    { id: "quiz", href: "/quiz", title: "Find a programme", text: "5 questions and you get programmes that fit your budget and field." },
    { id: "cost", href: "/quiz", title: "Cost calculator", text: "On every programme page: fees, living costs and visa proof of funds." },
    { id: "docs", href: "/guide#documents", title: "Document checklist", text: "The documents each country asks for; tick off what you have ready." },
    { id: "list", href: "/my-list", title: "My list", text: "Save programmes and scholarships and add their deadlines to your calendar." },
  ],
};

export const TOOLS_TEXT = {
  ar: { menu: "الأدوات", title: "أدوات تساعدك تقدم", lead: "كل أدوات بوابتي الجديدة في مكان واحد. كلها مجانية ومن غير حساب.", homeTitle: "أدوات تساعدك", all: "كل الأدوات" },
  en: { menu: "Tools", title: "Tools to help you apply", lead: "All of MyNewGate's tools in one place. Free, no account needed.", homeTitle: "Tools that help", all: "All tools" },
};
