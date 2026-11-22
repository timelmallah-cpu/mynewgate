// "My visa was refused, what now?" Official refusal grounds and challenge routes per destination.
// Official sources only, reviewed 22 November 2026. Deadlines: the refusal letter itself is binding; we say so on the page.
const T = (ar, en) => ({ ar, en });

export const REFUSAL_SLUG = "visa-refused";
export const REFUSAL_REVIEWED = "2026-11-22";

export const REFUSAL_STEPS = [
  T("اقرأ خطاب الرفض كله: فيه سبب الرفض، وهل يحق لك الطعن، وأين، وفي أي مهلة. المهلة تبدأ غالباً من يوم استلام الخطاب.", "Read the whole refusal letter: it gives the reason, whether you can challenge it, where, and by when. The deadline usually starts on the day you receive the letter."),
  T("حدد السبب بدقة، وجهّز ورقة أو دليلاً يرد على هذا السبب نفسه، لا على أسباب أخرى.", "Pin down the exact reason and prepare a document or piece of evidence that answers that reason, not others."),
  T("قرر: طعن (إذا كان القرار خطأ بالأوراق التي قدمتها) أو طلب جديد (إذا كانت أوراقك ناقصة أو تغير وضعك).", "Decide: a challenge (if the decision was wrong on the papers you gave) or a new application (if your papers were weak or your situation has changed)."),
  T("في أي طلب جديد اذكر الرفض السابق بصدق؛ إخفاء رفض سابق قد يؤدي إلى رفض أشد أو منع.", "In any new application, declare the earlier refusal honestly; hiding a refusal can lead to a harsher refusal or a ban."),
];

// Article 32(1) of the Schengen Visa Code (Regulation (EC) No 810/2009), in plain words. The refusal form (Annex VI) ticks one or more.
export const SCHENGEN_GROUNDS = [
  T("وثيقة السفر مزورة أو غير صحيحة.", "The travel document is false, counterfeit or forged."),
  T("لم تثبت الغرض من الرحلة وظروفها (الفندق، البرنامج، الدعوة...).", "You did not justify the purpose and conditions of the stay (hotel, itinerary, invitation...)."),
  T("لم تثبت أن معك مالاً كافياً لمدة الإقامة وللعودة.", "You did not prove enough money for the stay and for the return."),
  T("استنفدت 90 يوماً في فترة الـ180 يوماً الحالية في دول شنغن.", "You have already used 90 days in the current 180-day period in the Schengen area."),
  T("يوجد تنبيه باسمك في نظام معلومات شنغن (SIS) لمنع الدخول.", "There is an alert in your name in the Schengen Information System (SIS) to refuse entry."),
  T("تعتبرك دولة أو أكثر خطراً على النظام العام أو الأمن الداخلي أو الصحة العامة.", "One or more states consider you a threat to public policy, internal security or public health."),
  T("لم تقدّم تأميناً طبياً للسفر صالحاً وكافياً عند الحاجة إليه.", "You did not provide valid and adequate travel medical insurance where it is required."),
  T("توجد شكوك معقولة في صحة الأوراق أو صدق ما قلته.", "There are reasonable doubts about the authenticity of your documents or the truth of your statements."),
  T("توجد شكوك معقولة في نيتك مغادرة دول شنغن قبل انتهاء التأشيرة.", "There are reasonable doubts about your intention to leave the Schengen area before the visa expires."),
];
export const SCHENGEN_SRC = "https://www.legislation.gov.uk/eur/2009/810/article/32/data.html";

// Challenge routes. kind: appeal (a formal challenge exists) / none (no appeal; new application or court review only).
export const REFUSAL_ROUTES = [
  {
    id: "fr", slug: "france", kind: "appeal",
    name: T("فرنسا", "France"),
    route: T("طعن إداري إلزامي خلال 30 يوماً من استلام قرار الرفض: لتأشيرة الإقامة القصيرة (شنغن) يُرسل إلى «نائب مدير التأشيرات» (sous-directeur des visas) في وزارة الداخلية في نانت، ولتأشيرة الإقامة الطويلة إلى لجنة الطعون في رفض التأشيرات (CRRV). الطعن يُكتب بالفرنسية ويُرسل بالبريد المسجل.", "A mandatory administrative appeal within 30 days of receiving the refusal: for a short-stay (Schengen) visa it goes to the sous-directeur des visas of the Interior Ministry in Nantes, and for a long-stay visa to the visa refusals appeal board (CRRV). Write it in French and send it by registered post."),
    after: T("إذا رُفض الطعن الإداري يمكن رفع دعوى أمام المحكمة الإدارية في نانت. لا يمكن الذهاب للمحكمة مباشرة دون هذا الطعن.", "If the administrative appeal is rejected, you can go to the administrative court in Nantes. You cannot go to court without this appeal first."),
    src: "https://www.legifrance.gouv.fr/codes/id/LEGISCTA000045998044/",
  },
  {
    id: "de", slug: "germany", kind: "appeal",
    name: T("ألمانيا", "Germany"),
    route: T("ألغت وزارة الخارجية الألمانية «الاعتراض» (Remonstration) على رفض التأشيرة في كل العالم منذ 1 يوليو 2025. بقي طريقان: طلب جديد في أي وقت، أو دعوى أمام المحكمة الإدارية في برلين (Verwaltungsgericht Berlin) خلال شهر من إعلان قرار الرفض.", "The German Foreign Office abolished the remonstration against visa refusals worldwide from 1 July 2025. Two routes remain: a new application at any time, or a lawsuit at the Administrative Court of Berlin (Verwaltungsgericht Berlin) within one month of the refusal being notified."),
    after: T("الدعوى بمقابل رسوم، ويجوز توكيل محامٍ (غير إلزامي). خطاب الرفض فيه بيانات الطعن الملزمة.", "The lawsuit carries fees, and you may hire a lawyer (not mandatory). The refusal letter contains the binding instructions on how to challenge it."),
    src: "https://amman.diplo.de/resource/blob/2770682/55b61411b8cda90109c29d2c50b15386/merkblatt-abschaffung-remo-data.pdf",
  },
  {
    id: "it", slug: "italy", kind: "appeal",
    name: T("إيطاليا", "Italy"),
    route: T("يمكن الطعن في رفض التأشيرة أمام المحكمة الإدارية الإقليمية في لاتسيو (TAR Lazio) خلال 60 يوماً من إعلان القرار.", "A visa refusal can be challenged before the Regional Administrative Court of Lazio (TAR Lazio) within 60 days of notification."),
    after: T("الطعن أمام المحكمة يحتاج عادة محامياً في إيطاليا. ويمكنك دائماً تقديم طلب جديد بأوراق أقوى.", "A court appeal usually needs a lawyer in Italy. You can always make a new application with stronger papers."),
    src: "https://www.esteri.it/it/servizi-consolari-e-visti/ingressosoggiornoinitalia/visto_ingresso/diniego_visto/",
  },
  {
    id: "es", slug: "spain", kind: "appeal",
    name: T("إسبانيا", "Spain"),
    route: T("طعن «إعادة النظر» (recurso de reposición) في القنصلية أو السفارة التي رفضت التأشيرة خلال شهر من الإعلان، باستمارة خاصة بالإسبانية. هذا الطعن اختياري: يمكنك بدلاً منه رفع دعوى إدارية مباشرة أمام المحاكم الإسبانية.", "An appeal for reconsideration (recurso de reposición) at the consulate or embassy that refused the visa, within one month of notification, on a special form in Spanish. It is optional: instead you can go straight to the Spanish administrative courts."),
    after: T("إذا لم يصلك رد على طعن إعادة النظر خلال شهر يُعتبر مرفوضاً، ويمكنك بعدها اللجوء إلى القضاء الإداري. البريد الإلكتروني لا يُقبل وسيلة لتقديم الطعن في بعض القنصليات.", "If you get no answer to the reconsideration appeal within a month, it counts as rejected and you can then go to the administrative courts. Some consulates do not accept the appeal by email."),
    src: "https://www.exteriores.gob.es/Consulados/casablanca/es/Consulado/PublishingImages/Paginas/Visados/PRESENTACI%c3%93N%20RECURSOS%20ADMINISTRATIVOS.pdf",
  },
  {
    id: "gb", slug: "united-kingdom", kind: "none",
    name: T("بريطانيا", "United Kingdom"),
    route: T("لا يوجد حق استئناف ولا «مراجعة إدارية» لرفض تأشيرة الزيارة. الطريق العملي: طلب جديد تعالج فيه سبب الرفض، ويمكن تقديمه بأي عدد من المرات.", "There is no right of appeal and no administrative review for a refused visitor visa. The practical route is a new application that deals with the refusal reason; you can reapply as many times as you like."),
    after: T("في حالات محدودة جداً (قرار مخالف للقانون أو لحقوق الإنسان) يمكن طلب مراجعة قضائية (judicial review)، وهي مكلفة وتحتاج محامياً.", "In very limited cases (an unlawful decision or a human-rights breach) judicial review is possible; it is costly and needs a lawyer."),
    src: "https://www.gov.uk/government/news/right-of-appeal-for-family-visit-visas-abolished",
  },
  {
    id: "us", slug: "united-states", kind: "none",
    name: T("الولايات المتحدة", "United States"),
    route: T("لا يوجد طريق للاستئناف. أشهر سبب هو المادة 214(b): لم تقنع القنصل بأنك ستعود لبلدك بعد الزيارة. للتقديم مرة أخرى تملأ استمارة جديدة وتدفع الرسوم وتحجز مقابلة جديدة.", "There is no appeal process. The most common ground is section 214(b): you did not convince the officer that you will return home after the visit. To reapply you fill in a new form, pay the fee again and book a new interview."),
    after: T("أعد التقديم فقط إذا تغير وضعك أو عندك معلومات جديدة مهمة. إذا كان الرفض بالمادة 221(g) (نقص أوراق) فأمامك سنة لتقديم الأوراق المطلوبة دون طلب جديد.", "Reapply only if your situation has changed or you have important new information. If the refusal was under 221(g) (missing documents), you have one year to send what was asked without a new application."),
    src: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visa-denials.html",
  },
  {
    id: "ca", slug: "canada", kind: "none",
    name: T("كندا", "Canada"),
    route: T("لا يوجد استئناف لرفض تأشيرة الزيارة. يمكنك التقديم من جديد إذا تغير وضعك أو عندك معلومات جديدة، واقرأ ملاحظات الضابط (يمكنك طلبها) لتعرف سبب الرفض بالتفصيل.", "There is no appeal against a visitor visa refusal. You can apply again if your situation changed or you have new information; read the officer's notes (you can request them) to see the reason in detail."),
    after: T("إذا رأيت أن الإجراء كان غير عادل يمكنك طلب مراجعة قضائية أمام المحكمة الفيدرالية الكندية؛ المهلة حسب قانون الهجرة (المادة 72) 60 يوماً للقرارات الصادرة خارج كندا (للتحقق مع محامٍ كندي).", "If you believe the process was unfair, you can ask the Federal Court of Canada for judicial review; under the immigration act (section 72) the deadline is 60 days for decisions made outside Canada (check with a Canadian lawyer)."),
    src: "https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=1485&top=16",
  },
  {
    id: "au", slug: "australia", kind: "none",
    name: T("أستراليا", "Australia"),
    route: T("خطاب الرفض يقول هل لك حق مراجعة أمام محكمة المراجعة الإدارية (ART). طلبات الزيارة المرفوضة وأنت خارج أستراليا لا يكون لها غالباً حق مراجعة، فالطريق العملي طلب جديد.", "The refusal letter says whether you can seek review at the Administrative Review Tribunal (ART). Visitor visas refused while you are outside Australia usually carry no review right, so the practical route is a new application."),
    after: T("إذا كان لك حق المراجعة فرسوم مراجعة معظم قرارات الهجرة 3,727 دولاراً أسترالياً، والمهلة مكتوبة في خطاب الرفض.", "If you do have review rights, the fee for most migration reviews is AUD 3,727, and the deadline is in the refusal letter."),
    src: "https://www.art.gov.au/ar/node/27",
  },
];

export const REFUSAL_TEXT = {
  ar: {
    title: "رفضوا تأشيرتي، ماذا أفعل؟",
    meta: "رفض التأشيرة: الأسباب الرسمية وطرق الطعن في شنغن وبريطانيا وأمريكا وكندا وأستراليا | بوابة السفر",
    lead: "أسباب الرفض الرسمية في تأشيرة شنغن، وهل يمكنك الطعن، وأين، وفي أي مهلة، لكل دولة من مصادرها الرسمية. خطاب الرفض نفسه هو المرجع الملزم دائماً.",
    stepsH: "أول ما تفعله بعد الرفض",
    schengenH: "أسباب رفض تأشيرة شنغن (المادة 32 من قانون التأشيرات الأوروبي)",
    schengenLead: "استمارة الرفض الموحدة تحدد سبباً أو أكثر من هذه الأسباب. من حقك الطعن حسب قانون الدولة التي رفضت، وخطاب الرفض يذكر الطريق والمهلة.",
    routesH: "الطعن أو التقديم من جديد حسب الدولة",
    appeal: "يوجد طعن",
    none: "لا يوجد استئناف",
    after: "بعد ذلك",
    src: "المصدر الرسمي",
    other: "دول شنغن الأخرى: كل دولة لها طريق طعن ومهلة في قانونها، وكلاهما مكتوب في خطاب الرفض. التأشيرة لا تُرفض نهائياً بسبب رفض واحد، ويمكنك التقديم مرة أخرى بأوراق أقوى.",
    scam: "احذر ممن يعدك بضمان قبول التأشيرة أو «إلغاء» الرفض مقابل مال؛ القرار للسفارة وحدها.",
    disclaimer: "هذه معلومات عامة من المصادر الرسمية وليست استشارة قانونية. المهلة والطريق الملزمان هما المكتوبان في خطاب الرفض الذي استلمته.",
    reviewed: (d) => `آخر مراجعة: ${d}`,
    hubCard: "رُفضت تأشيرتك؟ أسباب الرفض الرسمية وطرق الطعن لكل دولة",
  },
  en: {
    title: "My visa was refused. What now?",
    meta: "Visa refused: official grounds and how to challenge it in Schengen, the UK, the US, Canada and Australia | Bawabat AlSafar",
    lead: "The official Schengen refusal grounds, and whether, where and by when you can challenge a refusal, for each country from its official sources. The refusal letter itself is always the binding reference.",
    stepsH: "What to do first",
    schengenH: "Schengen refusal grounds (Article 32 of the EU Visa Code)",
    schengenLead: "The standard refusal form ticks one or more of these grounds. You can appeal under the law of the state that refused, and the letter gives the route and the deadline.",
    routesH: "Appeal or reapply, by country",
    appeal: "Appeal possible",
    none: "No appeal",
    after: "After that",
    src: "Official source",
    other: "Other Schengen states: each has its own appeal route and deadline in national law, and both are written in the refusal letter. One refusal is not final; you can apply again with stronger papers.",
    scam: "Be wary of anyone who promises a guaranteed visa or to \"cancel\" a refusal for money; only the embassy decides.",
    disclaimer: "This is general information from official sources, not legal advice. The binding route and deadline are those written in the refusal letter you received.",
    reviewed: (d) => `Last reviewed: ${d}`,
    hubCard: "Visa refused? Official grounds and how to challenge it, by country",
  },
};
