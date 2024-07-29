import { HeroSection, BooksSection } from "@/containers";
// import { books } from "@/lib/mock";
import { getBooks } from "./actions/book";

export default async function Home() {
  const books = await getBooks();

  return (
    <div className="space-y-11">
      <HeroSection />
      <BooksSection books={books?.data} />
    </div>
  );
}
