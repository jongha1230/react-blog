import { Outlet } from "react-router-dom";
import ModalContainer from "../../components/Modal/ModalContainer";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import { LayoutContainer } from "./MainLayout.styled";

function MainLayout() {
  return (
    <LayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ModalContainer />
    </LayoutContainer>
  );
}

export default MainLayout;
