import ThemeSwitcher from "@/components/ThemeSwitcher";
import "./globals.css";
import Nav from "@/components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="font-monserrat">
        <ThemeSwitcher>
          <Nav />
          {children}
        </ThemeSwitcher>
      </body>
    </html>
  );
}
