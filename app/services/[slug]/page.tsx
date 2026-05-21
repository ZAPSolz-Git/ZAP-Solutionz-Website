import { redirect } from "next/navigation";

const validSlugs = ["cloud", "mobile", "web", "crm", "design"];

export default function CatchAllService({ params }: { params: { slug: string } }) {
  if (validSlugs.includes(params.slug)) {
    redirect(`/services/${params.slug}`);
  }
  return <div className="text-white p-20">Service not found</div>;
}