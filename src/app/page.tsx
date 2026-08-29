import fs from "node:fs";
import path from "node:path";

const peopleDir = path.join(process.cwd(), "src", "people");

const files = fs.readdirSync(peopleDir).filter((f) => f.endsWith(".tsx"));

const Home = async () => {
  const people = await Promise.all(
    files.map(async (file) => {
      const name = path.basename(file, ".tsx");
      const mod = await import(`@/src/people/${name}`);
      return mod.default;
    }),
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Turma do Curso de <span className="text-orange-500">Git</span>
        </h1>
        <div className="flex items-center gap-2">
          <span className="h-1 w-8 rounded-full bg-orange-500" />
          <span className="h-1 w-8 rounded-full bg-blue-500" />
        </div>
      </div>

      <p className="mb-8 w-full border-b border-neutral-500 pb-1 text-left text-sm text-neutral-500 sm:text-base">
        Aqui estão os participantes do Curso de Git e GitHub 2026.1, oferecido na PoliACTA — edição
        Primavera.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((PersonCard, i) => (
          <PersonCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;
