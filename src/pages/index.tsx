import { ReactNode } from "react";
import SEO from "../components/SEO";
import Home from "./Home";

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

export { HomePage };
