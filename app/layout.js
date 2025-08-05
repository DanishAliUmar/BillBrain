import "./globals.css";

export const metadata = {
  title: "Bill Brain",
  description: "A personal finance app to help you manage your bills and expenses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ visibility: "visible" }} className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
