import Link from "@/src/components/Link";

const Footer = () => (
  <footer className="text-muted-foreground w-full bg-transparent px-4 py-6 text-sm">
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 text-center">
      <div className="flex items-center gap-2">
        <img alt="Logo" className="h-6" src="/logo.svg" />
      </div>

      <p>
        Desenvolvido por{" "}
        <Link
          className="hover:text-foreground underline decoration-current underline-offset-4 transition-colors duration-300 hover:decoration-transparent"
          href="https://silas.eng.br/"
        >
          Silas Henrique
        </Link>{" "}
        e inspirado por{" "}
        <Link
          className="hover:text-foreground underline decoration-current underline-offset-4 transition-colors duration-300 hover:decoration-transparent"
          href="https://brorlandi.github.io/GitTrainingWall/"
        >
          GitTrainingWall
        </Link>
        .
      </p>
    </div>
  </footer>
);

export default Footer;
