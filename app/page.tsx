import EmailForm from "@/components/EmailForm";
import ProductContent from "@/components/ProductContent";
import ProductImage from "@/components/ProductImage";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-around items-center py-20 px-10">
      <ProductImage />
      <section className="w-[70%] ml-20">
        <ProductContent />
        <EmailForm />
      </section>
    </main>
  );
}
