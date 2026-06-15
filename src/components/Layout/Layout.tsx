import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { AuthModal } from "../Auth/AuthModal";
import { selectAuthModal } from "../../features/authModal/authModalSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Layout = () => {
  
  const isOpenLoginModal = useSelector(selectAuthModal); 

  return (
    <div className={`app-layout ${isOpenLoginModal ? 'app-layout--color-dark': ''}`}>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <AuthModal />
    </div>
  );
};