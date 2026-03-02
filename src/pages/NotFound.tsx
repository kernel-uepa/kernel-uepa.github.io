import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { community } from "@/config/community";

const NotFound = () => {
  return (
    <div className="grain-overlay flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {community.name}
      </p>
      <h1 className="mb-4 text-8xl font-bold tracking-tight text-foreground">404</h1>
      <p className="mb-2 text-xl font-medium text-foreground">Página não encontrada</p>
      <p className="mb-10 text-muted-foreground">
        O endereço que você tentou acessar não existe.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar ao início
      </Link>
    </div>
  );
};

export default NotFound;
