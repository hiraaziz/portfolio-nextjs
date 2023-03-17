import ThemeSwitcher from "@/components/ThemeSwitcher";
import "./globals.css";
import Footer from "@/components/Footer";
import Contextapi from "@/components/Contextapi";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="font-poppins">
        <ThemeSwitcher>
          <Contextapi>{children}</Contextapi>
          <Footer />
        </ThemeSwitcher>
      </body>
    </html>
  );
}
