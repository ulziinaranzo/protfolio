import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Introduction } from "@/components/Introduction";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Introduction />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
