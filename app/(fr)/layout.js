export const viewport = { themeColor: "#13234b" };
export default function Layout({ children }) {
  return (
    <html lang="fr" dir="ltr">
      <body className="portal">{children}</body>
    </html>
  );
}
