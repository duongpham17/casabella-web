import type { Metadata } from "next";
import Terms from '_routes/terms';

export const metadata: Metadata = {
  title: "Casabella | Terms & Conditions",
  description: "how we operate, our terms and conditions for all our services and bookings.",
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
      <Terms />
  );
};
