// app/services/crm/page.tsx
import CrmClient from "./CrmClient";

export const metadata = {
  title: "CRM Development | Zap Solutions",
  description: "Custom CRM that grows with your sales team.",
};

export default function CrmPage() {
  return <CrmClient />;
}