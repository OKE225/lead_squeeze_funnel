import EmailForm from "@/components/EmailForm";
import ProductContent from "@/components/ProductContent";
import ProductImage from "@/components/ProductImage";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col lg:flex-row justify-center lg:justify-around items-center py-10 px-4 sm:px-10 lg:py-20 lg:px-10 gap-8 lg:gap-0">
      <ProductImage />
      <section className="w-full lg:w-[70%] lg:ml-20 max-lg:mt-5">
        <ProductContent />
        <EmailForm />
      </section>
    </main>
  );
}
