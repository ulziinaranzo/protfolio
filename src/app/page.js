import { Header } from "@/components/Header";
import { Introduction } from "@/components/Introduction";
import { Skills } from "@/components/Skills";
import { Skillsbox } from "@/components/Skillsbox";

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
        <Skillsbox />
      </div>
    </div>
  );
}
