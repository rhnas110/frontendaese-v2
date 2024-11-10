import { ReactNode } from "react";
import SEO from "../components/seo";
import Home from "./home";
import { NotFound } from "./404";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// custom title
function Page({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function HomePage() {
  return (
    <Page>
      <SEO />
      <Home />
      <ToastContainer />
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
