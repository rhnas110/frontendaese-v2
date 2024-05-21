import { Home as HomeLayouts } from "../../components/Layouts/Home";
import PageWrapper from "../../components/PageWrapper";
import useLenis from "../../hooks/useLenis";

const Home = () => {
  useLenis();
  return (
    <PageWrapper>
      <HomeLayouts />
    </PageWrapper>
  );
};

export default Home;
