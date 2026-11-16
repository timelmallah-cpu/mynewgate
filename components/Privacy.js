import Link from "next/link";

export const PRIVACY_UPDATED = "2026-11-16";

const S = {
  ar: {
    meta: "سياسة الخصوصية | بوابة الدراسة",
    title: "سياسة الخصوصية",
    updated: "آخر تحديث:",
    sections: [
      ["من نحن", "بوابة الدراسة (Bawabat AlDirasa)، قسم الدراسة في بوابة السفر (Bawabat AlSafar)، موقع يرتب المعلومات الرسمية عن الدراسة في أوروبا باللغة العربية، ويتبع لعلامة «مع حاتم». للتواصل في أي شيء يخص بياناتك: business@withhatem.com"],
      ["ما الذي لا نجمعه", "لا تحتاج إلى حساب لاستخدام الموقع، فالحساب اختياري. الأسئلة التي تجيب عنها للبحث عن البرامج لا تُرسل إلى أي خادم. لا نستخدم أدوات تتبع إعلانية، ولا نضع ملفات تعريف الارتباط (الكوكيز) إلا كوكيز الدخول الضرورية إذا سجّلت الدخول بنفسك، وتجد تفاصيلها في فقرة «الحساب»."],
      ["إحصاءات الزيارات", "نستخدم Vercel Web Analytics لنعرف عدد الزيارات والصفحات الأكثر قراءة. لا تضع أي كوكيز ولا تحفظ بيانات تعرّف بك، وتميّز الزائر ببصمة مؤقتة محسوبة من الطلب تتغير كل يوم، فلا يمكن تتبعك بين الأيام أو بين المواقع. نرى أرقاماً مجمعة فقط، مثل عدد الزيارات والدولة ونوع الجهاز."],
      ["قائمتي", "البرامج والمنح التي تحفظها في «قائمتي» محفوظة في متصفحك على جهازك. إذا لم تسجّل الدخول، لا تُرسل القائمة إلينا أبداً. إذا سجّلت الدخول، تُحفظ نسخة منها في حسابك لتظهر على كل أجهزتك. رابط القائمة الذي تنسخه يحمل أرقام البرامج فقط، ولا يُرسل إلينا. تستطيع حذف القائمة بحذف العناصر منها أو بمسح بيانات المتصفح، وتُحذف نسختها من حسابك مع حذف الحساب."],
      ["الحساب (اختياري)", "إذا أنشأت حساباً نحفظ: بريدك الإلكتروني، وتاريخ إنشاء الحساب وتاريخ موافقتك على هذه السياسة، وتاريخ آخر زيارة لك، و«قائمتي»، وما تختاره بنفسك في صفحة «حسابي» (المرحلة الدراسية، والدول التي تهمك، والتخصص، وسنة بدء الدراسة). نستخدم هذه البيانات فقط لتقديم الحساب الذي طلبته، وهذا هو الأساس القانوني. لن نرسل لك تنبيهات أو رسائل تسويقية إلا إذا فعّلتها بنفسك لاحقاً. يجب أن يكون عمرك 16 سنة أو أكثر لإنشاء حساب."],
      ["الدخول إلى الحساب", "لا توجد كلمة مرور، وتستطيع الدخول بطريقتين. الأولى: نرسل إلى بريدك رابطاً يعمل مرة واحدة لمدة 15 دقيقة، عبر خدمة Brevo (brevo.com) وخوادمها في الاتحاد الأوروبي. الثانية: الدخول بحساب جوجل، وفيها نطلب من جوجل بريدك الإلكتروني فقط وتأكيداً أنه بريد صحيح، ولا نحصل على كلمة مرورك ولا على أي بيانات أخرى من حسابك. جوجل تعرف أنك استخدمت حسابها للدخول إلى موقعنا، حسب سياسة الخصوصية الخاصة بها. أثناء الدخول بجوجل نضع ملف كوكيز مؤقتاً (dg_g) لمدة 10 دقائق للتأكد من أن الطلب صادر منك، ويُحذف بعد الدخول. بعد الدخول نضع في متصفحك ملفي كوكيز ضروريين: dg_sid يحمل رقماً عشوائياً يعرّف جلسة الدخول ولا تستطيع صفحات الموقع قراءته، وdg_in يقول فقط إنك مسجل الدخول. مدتهما 90 يوماً، ويُحذفان عند تسجيل الخروج. لأنهما ضروريان لعمل الحساب الذي طلبته، لا نطلب موافقة منفصلة عليهما. نحفظ روابط الدخول وأرقام الجلسات في شكل مشفر (hash) فقط. ولمنع إساءة الاستخدام نحفظ عدّاداً لطلبات الدخول مرتبطاً ببصمة مشفرة من عنوان IP والبريد، ويُحذف بعد ساعة."],
      ["أين تُحفظ بيانات الحساب ومدة حفظها", "تُحفظ بيانات الحساب في خدمة Upstash، وقد تكون خوادمها خارج المملكة المتحدة. إذا لم تزر الموقع وأنت مسجل الدخول لمدة سنتين، يُحذف حسابك تلقائياً. وتستطيع حذفه في أي وقت من صفحة «حسابي»، فيُحذف فوراً مع كل جلسات الدخول على كل الأجهزة. لا نبيع بياناتك، ولا نعطيها لأي جهة أخرى، ولا نستخدمها للإعلانات."],
      ["النشرة الشهرية", "إذا اشتركت في النشرة نحفظ بريدك الإلكتروني فقط لنرسل لك النشرة. الأساس القانوني هو موافقتك، ولا يبدأ الاشتراك إلا بعد أن تضغط رابط التأكيد في رسالة نرسلها لك. نستخدم خدمة Kit (kit.com) لإدارة القائمة وإرسال الرسائل، وقد تُحفظ البيانات على خوادمها خارج المملكة المتحدة. في كل رسالة رابط لإلغاء الاشتراك، وعند الإلغاء نتوقف عن مراسلتك. لا نبيع بريدك ولا نعطيه لأي جهة أخرى."],
      ["المساعد الذكي", "إذا استخدمت صفحة «اسأل المساعد»، يُرسل سؤالك وجزء من المحادثة ومعلومات من موقعنا إلى خدمة Gemini API من جوجل (الخدمة المدفوعة) لكتابة الإجابة. حسب شروط جوجل للخدمة المدفوعة، لا تستخدم جوجل الأسئلة لتطوير منتجاتها، وتحتفظ بها لفترة محدودة لكشف إساءة الاستخدام فقط. نحن لا نحفظ الأسئلة ولا الإجابات. ولكي نحدد عدد الأسئلة لكل زائر في اليوم، نحفظ عدّاداً مرتبطاً ببصمة مشفرة من عنوان IP تتغير كل يوم وتُحذف بعد يوم، في خدمة Upstash. ضغطة 👍 أو 👎 تحت الإجابة تزيد عدّاداً يومياً فقط. وإذا ضغطت 👎 واخترت بنفسك إرسال السؤال والإجابة، نحفظهما 90 يوماً بدون أي بيانات عنك لنصلح الإجابات الضعيفة ثم يُحذفان تلقائياً. لا تكتب بيانات شخصية في أسئلتك."],
      ["مراجعة خطاب الدافع والسيرة الذاتية", "إذا استخدمت مراجعة الخطاب أو مراجعة السيرة الذاتية (CV) في صفحة «خطاب الدافع والسيرة الذاتية»، يُرسل النص الذي تلصقه واسم البرنامج إن كتبته إلى خدمة Gemini API من جوجل (الخدمة المدفوعة) لكتابة المراجعة، بنفس الشروط المذكورة في فقرة المساعد. نحن لا نحفظ النص ولا المراجعة، ونحفظ فقط عدّاداً يومياً لعدد المراجعات بنفس طريقة المساعد. احذف اسمك وبياناتك الشخصية من النص قبل لصقه."],
      ["صياغة إيميل للجامعة", "إذا استخدمت صفحة «اكتب إيميلاً للجامعة»، يُرسل ما تكتبه (اسم الجامعة والبرنامج والجهة ورقم الطلب إن كتبته وملاحظاتك) إلى خدمة Gemini API من جوجل (الخدمة المدفوعة) لكتابة الإيميل، بنفس الشروط المذكورة في فقرة المساعد. اسمك لا يُرسل: يُضاف إلى الإيميل على جهازك، ويُحفظ في متصفحك فقط لتوفير كتابته مرة أخرى. نحن لا نحفظ النص ولا الإيميل، ونحفظ فقط عدّاداً يومياً بنفس طريقة المساعد."],
      ["نموذج التواصل", "إذا راسلتنا عبر صفحة «تواصل معنا» نستلم الاسم والبريد والرسالة التي تكتبها عبر خدمة Web3Forms، ونستخدمها فقط للرد عليك."],
      ["محتوى من مواقع أخرى", "خرائط المدن تُعرض من OpenStreetMap، والصور من Wikimedia Commons. عند فتح صفحة فيها خريطة أو صورة، يتصل متصفحك بهذه المواقع مباشرة، فتصلها بيانات تقنية مثل عنوان IP، حسب سياسات الخصوصية الخاصة بها."],
      ["حقوقك", "يحق لك أن تطلب نسخة من بياناتك أو تصحيحها أو حذفها، وأن تسحب موافقتك في أي وقت. إذا كان لديك حساب، تستطيع من صفحة «حسابي» أن تنزّل نسخة من كل بياناتك، وأن تعدّلها، وأن تحذف الحساب بنفسك. ولأي طلب آخر راسلنا على business@withhatem.com. وإذا لم يعجبك ردنا، يحق لك تقديم شكوى إلى مكتب مفوض المعلومات في المملكة المتحدة (ICO) على ico.org.uk."],
      ["تغيير هذه السياسة", "إذا غيّرنا هذه السياسة سنحدّث التاريخ في أعلى الصفحة. وإذا كان التغيير مهماً ويخص النشرة أو الحسابات، سنخبر المشتركين وأصحاب الحسابات بالبريد."],
    ],
  },
  en: {
    meta: "Privacy policy | Bawabat AlDirasa",
    title: "Privacy policy",
    updated: "Last updated:",
    sections: [
      ["Who we are", "Bawabat AlDirasa (بوابة الدراسة), the study section of Bawabat AlSafar (بوابة السفر), organises official information about studying in Europe in Arabic. It is part of the \"With Hatem\" brand. For anything about your data, contact business@withhatem.com"],
      ["What we don't collect", "You don't need an account to use the site; accounts are optional. The answers you give in the programme finder are not sent to any server. We don't use advertising trackers, and we set no cookies except the essential sign-in cookies if you choose to sign in, described under \"Accounts\"."],
      ["Visit statistics", "We use Vercel Web Analytics to see how many visits we get and which pages are read most. It sets no cookies and stores no data that identifies you; it tells visitors apart with a temporary hash of the request that resets every day, so you cannot be tracked across days or across websites. We only see aggregated figures such as visit counts, country and device type."],
      ["My list", "Programmes and scholarships you save to \"My list\" are stored in your browser on your device. If you are not signed in, the list is never sent to us. If you sign in, a copy is kept in your account so it shows on all your devices. The list link you copy only holds programme numbers and is not sent to us. You can delete the list by removing items or clearing your browser data, and the copy in your account is deleted with the account."],
      ["Accounts (optional)", "If you create an account, we keep: your email address, the date the account was created and the date you agreed to this policy, the date of your last visit, \"My list\", and what you choose yourself on the \"My account\" page (study level, countries you're interested in, subject and start year). We use this data only to provide the account you asked for, which is our legal basis. We will not send you alerts or marketing emails unless you turn them on yourself later. You must be 16 or older to create an account."],
      ["Signing in", "There is no password, and there are two ways to sign in. First: we email you a link that works once for 15 minutes, sent through Brevo (brevo.com), whose servers are in the European Union. Second: signing in with Google, where we ask Google only for your email address and confirmation that it is verified; we never get your password or any other data from your Google account. Google knows you used its account to sign in to our site, under its own privacy policy. During a Google sign-in we set a temporary cookie (dg_g) for 10 minutes to check the request came from you, and it is deleted after you sign in. After you sign in, we set two essential cookies in your browser: dg_sid holds a random number that identifies your signed-in session and cannot be read by the site's pages, and dg_in only says that you are signed in. They last 90 days and are deleted when you sign out. Because they are needed for the account you asked for, we don't ask for separate consent for them. We only store sign-in links and session numbers as hashes. To prevent abuse, we keep a counter of sign-in requests linked to a hash of your IP address and email, deleted after an hour."],
      ["Where account data is kept and for how long", "Account data is stored with Upstash, whose servers may be outside the United Kingdom. If you don't visit the site while signed in for two years, your account is deleted automatically. You can delete it at any time on the \"My account\" page; it is deleted immediately, together with every signed-in session on every device. We never sell your data, give it to anyone else or use it for advertising."],
      ["Monthly newsletter", "If you subscribe, we keep only your email address, to send you the newsletter. The legal basis is your consent, and your subscription only starts after you click the link in the confirmation email we send you. We use Kit (kit.com) to manage the list and send emails, and the data may be stored on its servers outside the United Kingdom. Every email has an unsubscribe link, and we stop emailing you when you unsubscribe. We never sell or give your email to anyone else."],
      ["The assistant", "If you use the \"Ask the assistant\" page, your question, part of the conversation and information from our site are sent to Google's Gemini API (paid service) to write the answer. Under Google's paid-service terms, Google does not use the questions to improve its products and keeps them for a limited time only to detect abuse. We do not store questions or answers. To limit the number of questions per visitor per day, we keep a counter linked to a hashed fingerprint of your IP address that changes every day and is deleted after a day, using Upstash. A 👍 or 👎 under an answer only adds to a daily counter. If you press 👎 and choose to send the question and answer, we keep them for 90 days, with no data about you, to fix weak answers, and then they are deleted automatically. Please don't include personal data in your questions."],
      ["Motivation letter and CV review", "If you use the letter review or the CV review on the \"Motivation letter and CV\" page, the text you paste and the programme name (if you enter one) are sent to Google's Gemini API (paid service) to write the review, under the same terms described in the assistant section. We do not store the text or the review; we only keep a daily counter of reviews, in the same way as for the assistant. Remove your name and personal details from the text before pasting it."],
      ["University email drafts", "If you use the \"Write an email to a university\" page, what you write (the university, programme, recipient, application number if given, and your notes) is sent to Google's Gemini API (paid service) to draft the email, under the same terms described in the assistant section. Your name is not sent: it is added to the email on your device and kept only in your browser so you don't have to type it again. We do not store the text or the email; we only keep a daily counter, in the same way as for the assistant."],
      ["Contact form", "If you write to us through the Contact page, we receive the name, email and message you enter through the Web3Forms service, and use them only to reply to you."],
      ["Content from other sites", "City maps come from OpenStreetMap and photos from Wikimedia Commons. When you open a page with a map or photo, your browser connects to those sites directly, so they receive technical data such as your IP address, under their own privacy policies."],
      ["Your rights", "You can ask for a copy of your data, to correct it or to delete it, and you can withdraw consent at any time. If you have an account, you can download a copy of all your data, change it and delete the account yourself on the \"My account\" page. For anything else, email business@withhatem.com. If you are not happy with our answer, you can complain to the UK Information Commissioner's Office (ICO) at ico.org.uk."],
      ["Changes", "If we change this policy we will update the date at the top. If an important change affects the newsletter or accounts, we will tell subscribers and account holders by email."],
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

export const SUBSCRIBED = { ar: ["تم تأكيد اشتراكك", "شكراً! ستصلك النشرة الشهرية على بريدك. ويمكنك إلغاء الاشتراك من أي رسالة بضغطة واحدة."], en: ["Your subscription is confirmed", "Thanks! The monthly newsletter will arrive in your inbox, and every email has a one-click unsubscribe link."] };

