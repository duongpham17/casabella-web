import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "_styles/global.scss";
import Navbar from '_layout/navbar';
import Footer from '_layout/footer';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "200"],
});

export const metadata: Metadata = {
  title: "Casabella",
  description: "Nail treatments, Hair salon, Environ Facials, Hair removal, Hydra facials",
  openGraph: {
    images:[
      {
        url: "/logo.png",
        alt: "Casabella"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
