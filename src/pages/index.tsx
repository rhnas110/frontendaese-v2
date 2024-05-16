import { ReactNode } from "react";
import SEO from "../components/SEO";
import Home from "./Home";
import { NotFound } from "./404";

// custom title
function Page({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function HomePage() {
  return (
    <Page>
      <SEO />
      <Home />
    </Page>
  );
}

function NotFoundPage() {
  return (
    <Page>
      <SEO
        title="Oh no! i thinks its bugs"
        description="Page not found - frontendaese"
      />
      <NotFound />
    </Page>
  );
}

export { HomePage, NotFoundPage };
