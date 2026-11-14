import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "بوابتي الجديدة | الدراسة في أوروبا بالعربي",
  description: "نرتب لك المعلومات الرسمية عن دراسة الماجستير في أوروبا باللغة العربية.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="top">
          <Link href="/" className="brand">بوابتي الجديدة</Link>
          <span className="tag">نسخة تجريبية</span>
        </header>
        <main>{children}</main>
        <footer className="foot">
          <p>
            هذه الخدمة لا تبيع المعلومات ولا تقدم استشارة قانونية أو هجرة. نحن نرتب المعلومات المنشورة
            على المواقع الرسمية للجامعات والجهات الحكومية باللغة العربية، مع رابط المصدر لكل معلومة.
            تأكد دائماً من المصدر الرسمي قبل اتخاذ أي قرار.
          </p>
        </footer>
      </body>
    </html>
  );
}
