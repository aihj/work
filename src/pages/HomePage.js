import Header from "../components/style/Header";
import NavBar from "../components/style/NavBar";
import Home from "../components/home/Home";
import LayoutSection from "../components/style/PageLayout";

export default function HomePage() {

  return (
    <LayoutSection>
      <Header />
      <Home />
      <NavBar />
    </LayoutSection>
  );
}
