import { HeaderSection, HeroSection, BooksSection } from "@/containers";
import { books } from "@/lib/mock";

export default function Home() {
  return (
    <div className="pt-24 px-20 pb-10 space-y-11">
      <HeaderSection />
      <HeroSection />
      <BooksSection books={books} />
    </div>
  );
}
