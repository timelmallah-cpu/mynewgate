// Terms of use. Plain-language terms for the information, the AI tools and optional accounts.
export const TERMS_UPDATED = "2026-11-17";

const S = {
  ar: {
    meta: "شروط الاستخدام",
    title: "شروط الاستخدام",
    updated: "آخر تحديث:",
    sections: [
      ["الخدمة", "هذا الموقع يرتب بالعربية معلومات منشورة في المواقع الرسمية للجامعات والحكومات عن الدراسة في أوروبا، مع رابط المصدر لكل معلومة. نحن لسنا جامعة ولا سفارة ولا جهة حكومية، ولا نقبل طلبات تقديم ولا نتوسط فيها. باستخدامك الموقع أنت توافق على هذه الشروط."],
      ["ليست استشارة", "المعلومات للإرشاد العام فقط، وليست استشارة قانونية أو استشارة هجرة أو تعليمية مخصصة لك. قرارات القبول والمنح والتأشيرات تتخذها الجامعات والجهات المانحة والسفارات وحدها. للاستشارة القانونية في التأشيرات والإقامة، تواصل مع مستشار أو محامٍ مرخص في الدولة المعنية."],
      ["دقة المعلومات", "نراجع البيانات بانتظام مع المصادر الرسمية، لكن الجامعات والحكومات تغيّر الشروط والرسوم والمواعيد في أي وقت. إذا لم تكن المعلومة منشورة نكتب «غير منشور في المصدر»، وإذا لم نتأكد منها نكتب «للتحقق». تأكد دائماً من المصدر الرسمي قبل أن تدفع أي مبلغ أو تتخذ قراراً. إذا وجدت خطأ، أبلغنا من زر «وجدت خطأ؟ أبلغنا» في الصفحة."],
      ["المساعد الذكي ومراجعة الخطاب والسيرة الذاتية", "إجابات المساعد والمراجعات يكتبها نظام ذكاء اصطناعي من بيانات موقعنا، وقد تحتوي أخطاء. لا تعتمد عليها وحدها، وافتح المصدر المذكور مع الإجابة. لكل زائر عدد محدود من الأسئلة والمراجعات في اليوم. لا تكتب بيانات شخصية في أسئلتك أو في النص الذي تلصقه."],
      ["الحساب", "الحساب اختياري، ويجب أن يكون عمرك 16 سنة أو أكثر لإنشائه. أنت مسؤول عن حماية بريدك الإلكتروني الذي تدخل به. تستطيع حذف حسابك في أي وقت من صفحة «حسابي». يحق لنا إيقاف أو حذف حساب يُستخدم في إساءة أو مخالفة لهذه الشروط."],
      ["اشتراك Study Plus", "الاشتراك اختياري وشهري ويتجدد تلقائياً بسعر 4.99 دولار شامل الضريبة، ويحتاج إلى حساب. تستطيع إلغاء التجديد في أي وقت من صفحة حسابك، وتبقى المميزات حتى نهاية الفترة المدفوعة. حدود أدوات الذكاء الاصطناعي تتجدد مع كل فترة اشتراك ولا ينتقل ما لم تستخدمه. الدفع يتم عبر Stripe، وهي البائع الرسمي للاشتراك (Merchant of Record)، وطلبات الاسترداد والاعتراض على الدفع تخضع لشروطها وللقانون المطبق. قد نغيّر السعر أو المميزات في المستقبل، وسنخبر المشتركين قبل أي تغيير في السعر، ويسري التغيير من الفترة التالية فقط. حذف الحساب يلغي الاشتراك فوراً."],
      ["الاستخدام المقبول", "لا تستخدم الموقع أو المساعد بطريقة تضر به أو بغيرك، مثل محاولة الاختراق، أو إرسال طلبات آلية بكميات كبيرة، أو نسخ البيانات آلياً بشكل واسع، أو محاولة جعل المساعد يكتب محتوى مخالفاً."],
      ["الإعلانات والروابط", "الإعلانات المدفوعة مكتوب عليها «إعلان» بوضوح، ولا تغيّر أي معلومة على الموقع. قد تحتوي بعض الصفحات روابط شراكة نحصل منها على عمولة إذا اشتريت خدمة، وتكون مكتوباً عليها ذلك، ولا يتغير السعر عليك. لسنا مسؤولين عن محتوى المواقع الأخرى أو خدماتها."],
      ["الملكية", "النصوص والتصميم والأدوات على هذا الموقع ملك لنا. تستطيع مشاركة روابط الصفحات واقتباس أجزاء قصيرة مع ذكر الموقع كمصدر. لا تنسخ المحتوى أو البيانات لإعادة نشرها في موقع أو خدمة أخرى بدون إذن مكتوب."],
      ["حدود المسؤولية", "نقدم الموقع كما هو، بدون ضمان أن يكون خالياً من الأخطاء أو متاحاً دائماً. في الحدود التي يسمح بها القانون، لسنا مسؤولين عن أي خسارة تنتج عن الاعتماد على المعلومات أو الأدوات، مثل رسوم مدفوعة أو موعد فائت أو رفض طلب. لا شيء في هذه الشروط يحد من حقوقك التي لا يجوز تقييدها قانوناً."],
      ["القانون", "تخضع هذه الشروط لقانون إنجلترا وويلز."],
      ["تغيير الشروط والتواصل", "إذا غيّرنا هذه الشروط سنحدّث التاريخ في أعلى الصفحة، وإذا كان التغيير مهماً سنخبر أصحاب الحسابات بالبريد. لأي سؤال: business@withhatem.com"],
    ],
  },
  en: {
    meta: "Terms of use",
    title: "Terms of use",
    updated: "Last updated:",
    sections: [
      ["The service", "This site organises, in Arabic, information published on the official websites of universities and governments about studying in Europe, with a source link for each item. We are not a university, an embassy or a government body, and we don't accept or broker applications. By using the site you agree to these terms."],
      ["Not advice", "The information is general guidance only, not legal, immigration or personalised educational advice. Admission, scholarship and visa decisions are made only by universities, funders and embassies. For legal advice on visas and residence, contact a licensed adviser or lawyer in the country concerned."],
      ["Accuracy", "We regularly review the data against official sources, but universities and governments can change requirements, fees and deadlines at any time. When something is not published we say \"Not published in the source\", and when we are not sure we say \"to verify\". Always check the official source before you pay anything or make a decision. If you find a mistake, tell us with the \"Found an error? Tell us\" button on the page."],
      ["The assistant and the letter and CV review", "The assistant's answers and the reviews are written by an AI system from our site's data and can contain mistakes. Don't rely on them alone; open the source given with the answer. Each visitor has a limited number of questions and reviews per day. Don't include personal data in your questions or in text you paste."],
      ["Accounts", "Accounts are optional, and you must be 16 or older to create one. You are responsible for keeping the email address you sign in with secure. You can delete your account at any time on the \"My account\" page. We may suspend or delete an account used for abuse or in breach of these terms."],
      ["Study Plus subscription", "The subscription is optional, monthly and renews automatically at US$4.99 including tax, and needs an account. You can cancel renewal any time from your account page; the features stay until the end of the paid period. AI tool limits renew with each billing period and unused uses don't carry over. Payments are handled by Stripe, the official seller of the subscription (merchant of record); refund requests and payment disputes follow its terms and applicable law. We may change the price or features in future; we will tell subscribers before any price change, and it applies from the next period only. Deleting your account cancels the subscription immediately."],
      ["Acceptable use", "Don't use the site or the assistant in a way that harms it or others, such as trying to break in, sending automated requests in bulk, copying the data automatically at scale, or trying to make the assistant produce unlawful content."],
      ["Ads and links", "Paid ads are clearly labelled \"Ad\" and never change any information on the site. Some pages may contain partner links that earn us a commission if you buy a service; they are labelled as such, and your price does not change. We are not responsible for other websites' content or services."],
      ["Ownership", "The text, design and tools on this site are ours. You can share page links and quote short parts with the site named as the source. Don't copy the content or data to republish it on another site or service without written permission."],
      ["Limits of liability", "We provide the site as it is, without a guarantee that it is error-free or always available. To the extent the law allows, we are not liable for any loss from relying on the information or tools, such as fees paid, a missed deadline or a rejected application. Nothing in these terms limits rights you have that cannot be limited by law."],
      ["Law", "These terms are governed by the law of England and Wales."],
      ["Changes and contact", "If we change these terms we will update the date at the top, and if the change is important we will tell account holders by email. For any question: business@withhatem.com"],
    ],
  },
};

export const termsMeta = (lang) => ({ title: S[lang].meta });

export default function Terms({ lang }) {
  const s = S[lang];
  return (
    <article className="privacy">
      <h1>{s.title}</h1>
      <p className="meta">{s.updated} {TERMS_UPDATED}</p>
      {s.sections.map(([h, p]) => (
        <section key={h}>
          <h2>{h}</h2>
          <p>{p}</p>
        </section>
      ))}
    </article>
  );
}
