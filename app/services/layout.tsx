// app/services/layout.tsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}