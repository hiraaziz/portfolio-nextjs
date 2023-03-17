import ThemeSwitcher from "@/components/ThemeSwitcher";
import "./globals.css";
import Footer from "@/components/Footer";
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
          {children}
          <Footer />
        </ThemeSwitcher>
      </body>
    </html>
  );
}
