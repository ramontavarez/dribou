import Navbar from "@/components/Navbar";
import "./global.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dribou",
  description: "Dribbble clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* @ts-expect-error Server Component */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
