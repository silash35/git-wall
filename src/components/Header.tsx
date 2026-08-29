import { FaGithub as GitHubIcon } from "react-icons/fa";

import Link from "@/src/components/Link";

const Header = () => (
  <header className="w-full bg-transparent">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
      <Link aria-label="Home" href="/">
        <img alt="Logo" className="h-10" src="/logo.svg" />
      </Link>

      <Link
        className="flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5"
        href="https://github.com/silash35/git-wall"
      >
        <GitHubIcon className="h-4 w-4" />
        Ver no GitHub
      </Link>
    </div>
  </header>
);

export default Header;
