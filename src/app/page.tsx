import type { Metadata } from "next";
import HomePage from '_routes/home';

export const metadata: Metadata = {
  title: "Casabella | Home",
  description: "Weclome to Casabella, London, Nail treatments, Hair salon, Environ Facials, Hair removal, Hydra facials",
  openGraph: {
    images:[
      {
        url: "/logo.png",
        alt: "Casabella"
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
};
