export default function Layout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className="portal">{children}</body>
    </html>
  );
}
