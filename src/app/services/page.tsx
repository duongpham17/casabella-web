import type { Metadata } from "next";
import Services from '_routes/services';

export const metadata: Metadata = {
  title: "Casabella | Services",
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

export default function ServicesPage() {
  return (
      <Services />
  );
};
