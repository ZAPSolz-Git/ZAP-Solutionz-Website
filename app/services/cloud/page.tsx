// app/services/cloud/page.tsx
import CloudClient from "./CloudClient";

export const metadata = {
  title: "Cloud Support Services | ZAP Solutionz",
  description: "Scalable, secure cloud infrastructure with 99.99% uptime SLA.",
};

export default function CloudPage() {
  return <CloudClient />;
}