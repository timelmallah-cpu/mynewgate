import Link from "next/link";

export const PRIVACY_UPDATED = "2026-11-15";

const S = {
  ar: {
    meta: "سياسة الخصوصية | بوابتي الجديدة",
    title: "سياسة الخصوصية",
    updated: "آخر تحديث:",
    sections: [
      ["من نحن", "بوابتي الجديدة (MyNewGate) موقع يرتب المعلومات الرسمية عن الدراسة في أوروبا باللغة العربية، ويتبع لعلامة «مع حاتم». للتواصل في أي شيء يخص بياناتك: business@withhatem.com"],
      ["ما الذي لا نجمعه", "لا تحتاج إلى حساب لاستخدام الموقع. الأسئلة التي تجيب عنها للبحث عن البرامج لا تُرسل إلى أي خادم، ولا نستخدم أدوات تتبع إعلانية ولا ملفات تعريف الارتباط (الكوكيز)."],
      ["إحصاءات الزيارات", "نستخدم Vercel Web Analytics لنعرف عدد الزيارات والصفحات الأكثر قراءة. لا تضع أي كوكيز ولا تحفظ بيانات تعرّف بك، وتميّز الزائر ببصمة مؤقتة محسوبة من الطلب تتغير كل يوم، فلا يمكن تتبعك بين الأيام أو بين المواقع. نرى أرقاماً مجمعة فقط، مثل عدد الزيارات والدولة ونوع الجهاز."],
      ["قائمتي", "البرامج والمنح التي تحفظها في «قائمتي» محفوظة في متصفحك فقط على جهازك. رابط القائمة الذي تنسخه يحمل أرقام البرامج فقط، ولا يُرسل إلينا. تستطيع حذفها بحذف العناصر من القائمة أو بمسح بيانات المتصفح."],
      ["النشرة الشهرية", "إذا اشتركت في النشرة نحفظ بريدك الإلكتروني فقط لنرسل لك النشرة. الأساس القانوني هو موافقتك، ولا يبدأ الاشتراك إلا بعد أن تضغط رابط التأكيد في رسالة نرسلها لك. نستخدم خدمة Kit (kit.com) لإدارة القائمة وإرسال الرسائل، وقد تُحفظ البيانات على خوادمها خارج المملكة المتحدة. في كل رسالة رابط لإلغاء الاشتراك، وعند الإلغاء نتوقف عن مراسلتك. لا نبيع بريدك ولا نعطيه لأي جهة أخرى."],
      ["المساعد الذكي", "إذا استخدمت صفحة «اسأل المساعد»، يُرسل سؤالك وجزء من المحادثة ومعلومات من موقعنا إلى خدمة Gemini API من جوجل (الخدمة المدفوعة) لكتابة الإجابة. حسب شروط جوجل للخدمة المدفوعة، لا تستخدم جوجل الأسئلة لتطوير منتجاتها، وتحتفظ بها لفترة محدودة لكشف إساءة الاستخدام فقط. نحن لا نحفظ الأسئلة ولا الإجابات. ولكي نحدد عدد الأسئلة لكل زائر في اليوم، نحفظ عدّاداً مرتبطاً ببصمة مشفرة من عنوان IP تتغير كل يوم وتُحذف بعد يوم، في خدمة Upstash. ضغطة 👍 أو 👎 تحت الإجابة تزيد عدّاداً يومياً فقط. وإذا ضغطت 👎 واخترت بنفسك إرسال السؤال والإجابة، نحفظهما 90 يوماً بدون أي بيانات عنك لنصلح الإجابات الضعيفة ثم يُحذفان تلقائياً. لا تكتب بيانات شخصية في أسئلتك."],
      ["مراجعة خطاب الدافع", "إذا استخدمت مراجعة الخطاب في صفحة «خطاب الدافع والسيرة الذاتية»، يُرسل نص خطابك واسم البرنامج إن كتبته إلى خدمة Gemini API من جوجل (الخدمة المدفوعة) لكتابة المراجعة، بنفس الشروط المذكورة في فقرة المساعد. نحن لا نحفظ الخطاب ولا المراجعة، ونحفظ فقط عدّاداً يومياً لعدد المراجعات بنفس طريقة المساعد. احذف اسمك وبياناتك الشخصية من الخطاب قبل لصقه."],
      ["نموذج التواصل", "إذا راسلتنا عبر صفحة «تواصل معنا» نستلم الاسم والبريد والرسالة التي تكتبها عبر خدمة Web3Forms، ونستخدمها فقط للرد عليك."],
      ["محتوى من مواقع أخرى", "خرائط المدن تُعرض من OpenStreetMap، والصور من Wikimedia Commons. عند فتح صفحة فيها خريطة أو صورة، يتصل متصفحك بهذه المواقع مباشرة، فتصلها بيانات تقنية مثل عنوان IP، حسب سياسات الخصوصية الخاصة بها."],
      ["حقوقك", "يحق لك أن تطلب نسخة من بياناتك أو تصحيحها أو حذفها، وأن تسحب موافقتك في أي وقت. راسلنا على business@withhatem.com. وإذا لم يعجبك ردنا، يحق لك تقديم شكوى إلى مكتب مفوض المعلومات في المملكة المتحدة (ICO) على ico.org.uk."],
      ["تغيير هذه السياسة", "إذا غيّرنا هذه السياسة سنحدّث التاريخ في أعلى الصفحة، وإذا كان التغيير يخص النشرة سنخبر المشتركين بالبريد."],
    ],
  },
  en: {
    meta: "Privacy policy | MyNewGate",
    title: "Privacy policy",
    updated: "Last updated:",
    sections: [
      ["Who we are", "MyNewGate (بوابتي الجديدة) organises official information about studying in Europe in Arabic. It is part of the \"With Hatem\" brand. For anything about your data, contact business@withhatem.com"],
      ["What we don't collect", "You don't need an account to use the site. The answers you give in the programme finder are not sent to any server, and we don't use advertising trackers or cookies."],
      ["Visit statistics", "We use Vercel Web Analytics to see how many visits we get and which pages are read most. It sets no cookies and stores no data that identifies you; it tells visitors apart with a temporary hash of the request that resets every day, so you cannot be tracked across days or across websites. We only see aggregated figures such as visit counts, country and device type."],
      ["My list", "Programmes and scholarships you save to \"My list\" are stored only in your browser on your device. The list link you copy only holds programme numbers and is not sent to us. You can delete it by removing items or clearing your browser data."],
      ["Monthly newsletter", "If you subscribe, we keep only your email address, to send you the newsletter. The legal basis is your consent, and your subscription only starts after you click the link in the confirmation email we send you. We use Kit (kit.com) to manage the list and send emails, and the data may be stored on its servers outside the United Kingdom. Every email has an unsubscribe link, and we stop emailing you when you unsubscribe. We never sell or give your email to anyone else."],
      ["The assistant", "If you use the \"Ask the assistant\" page, your question, part of the conversation and information from our site are sent to Google's Gemini API (paid service) to write the answer. Under Google's paid-service terms, Google does not use the questions to improve its products and keeps them for a limited time only to detect abuse. We do not store questions or answers. To limit the number of questions per visitor per day, we keep a counter linked to a hashed fingerprint of your IP address that changes every day and is deleted after a day, using Upstash. A 👍 or 👎 under an answer only adds to a daily counter. If you press 👎 and choose to send the question and answer, we keep them for 90 days, with no data about you, to fix weak answers, and then they are deleted automatically. Please don't include personal data in your questions."],
      ["Motivation letter review", "If you use the letter review on the \"Motivation letter and CV\" page, your letter text and the programme name (if you enter one) are sent to Google's Gemini API (paid service) to write the review, under the same terms described in the assistant section. We do not store the letter or the review; we only keep a daily counter of reviews, in the same way as for the assistant. Remove your name and personal details from the letter before pasting it."],
      ["Contact form", "If you write to us through the Contact page, we receive the name, email and message you enter through the Web3Forms service, and use them only to reply to you."],
      ["Content from other sites", "City maps come from OpenStreetMap and photos from Wikimedia Commons. When you open a page with a map or photo, your browser connects to those sites directly, so they receive technical data such as your IP address, under their own privacy policies."],
      ["Your rights", "You can ask for a copy of your data, to correct it or to delete it, and you can withdraw consent at any time. Email business@withhatem.com. If you are not happy with our answer, you can complain to the UK Information Commissioner's Office (ICO) at ico.org.uk."],
      ["Changes", "If we change this policy we will update the date at the top, and if the change affects the newsletter we will tell subscribers by email."],
    ],
  },
};

export const privacyMeta = (lang) => ({ title: S[lang].meta });

export default function Privacy({ lang }) {
  const s = S[lang];
  return (
    <article className="privacy">
      <h1>{s.title}</h1>
      <p className="meta">{s.updated} {PRIVACY_UPDATED}</p>
      {s.sections.map(([h, p]) => (
        <section key={h}>
          <h2>{h}</h2>
          <p>{p}</p>
        </section>
      ))}
    </article>
  );
}

export const SUBSCRIBED = { ar: ["تم تأكيد اشتراكك", "شكراً! ستصلك النشرة الشهرية على بريدك. وفي أي رسالة تقدر تلغي الاشتراك بضغطة واحدة."], en: ["Your subscription is confirmed", "Thanks! The monthly newsletter will arrive in your inbox, and every email has a one-click unsubscribe link."] };

