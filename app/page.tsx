import { HeaderSection, HeroSection, BooksSection } from "@/containers";
// import { books } from "@/lib/mock";
import { getBooks } from "./actions/book";
import { Suspense } from "react";

export default async function Home() {
  const books = await getBooks();

  return (
    <div className="space-y-11">
      <HeaderSection />
      <HeroSection />
      <Suspense fallback={<p className="flex justify-center items-center">loading...</p>}>
        <BooksSection books={books} />
      </Suspense>
    </div>
  );
}
