import type { Metadata } from "next";
import Contact from '_routes/contact';

export const metadata: Metadata = {
  title: "Casabella | Contact",
  description: "Prices for nails, facials, manicure, pedicure, treatments and more, get in contact now.",
  openGraph: {
    images:[
      {
        url: "/logo.png",
        alt: "Casabella"
      }
    ]
  }
};

export default function ContactPage() {
  return (
      <Contact />
  );
};
