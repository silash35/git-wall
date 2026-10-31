import { FaGithub, FaLinkedin } from "react-icons/fa";

import Link from "@/src/components/Link";
import type { PersonData } from "@/src/utils/types";

const data: PersonData = {
  name: "Seu nome",
  role: "Aluno", // Opcionalmente, você pode ajustar o papel para "Aluna", ou outro título que preferir.
  GitHub: "seu-user-do-github", // Substitua pelo seu usuário do GitHub, sem o @
  LinkedIn: "seu-user-do-linkedin", // Substitua pelo seu usuário do LinkedIn, sem o @. Você pode remover esta linha se não tiver LinkedIn.
};

const PersonCard = () => (
  <article className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/2 p-5 transition-colors hover:border-white/20">
    <div className="flex items-center gap-4">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-blue-500/60">
        <img
          alt={"Foto de " + data.name}
          className="object-cover"
          src={"https://github.com/" + data.GitHub + ".png"}
        />
      </div>

      <div className="min-w-0">
        <h3 className="truncate text-base font-semibold text-white">{data.name}</h3>
        <p className="text-sm font-medium text-blue-400">{data.role}</p>

        <div className="mt-2 flex flex-col gap-1">
          <Link
            className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm transition-colors"
            href={"https://github.com/" + data.GitHub}
          >
            <FaGithub className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">github.com/{data.GitHub}</span>
          </Link>

          {data.LinkedIn && (
            <Link
              className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm transition-colors"
              href={"https://linkedin.com/in/" + data.LinkedIn}
            >
              <FaLinkedin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">linkedin.com/in/{data.LinkedIn}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  </article>
);

export default PersonCard;
