import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Introduction } from "@/components/Introduction";
import { Skills } from "@/components/Skills";

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
    </div>
  );
}
