// app/services/crm/page.tsx
import CrmClient from "./CrmClient";

export const metadata = {
  title: "CRM Development | ZAP Solutionz",
  description: "Custom CRM that grows with your sales team.",
};

export default function CrmPage() {
  return <CrmClient />;
}