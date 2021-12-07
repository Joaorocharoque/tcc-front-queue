import { Header } from "../components/HeaderSec";
import { GlobalStyle } from "../styles/global";
import { useState } from "react";
import { NewSecItemModal } from "../components/NewSecItemModal";
import { DashboardSec } from "../components/DashboardSec";
import {UserProvider} from "../hooks/useUsers";


export function TabelaSec() {
  const [isNewSecItemModalOpen, setIsNewSecItemModalOpen] = useState(false);

  function handleOpenNewSecItemModal(){
    setIsNewSecItemModalOpen(true);
  }

  function handleCloseNewSecItemModal(){
    setIsNewSecItemModalOpen(false);
  }

  return (
    <>
    <UserProvider>
        <Header onHandleOpenNewSecItemModal={handleOpenNewSecItemModal} />

        <NewSecItemModal
          isOpen={isNewSecItemModalOpen}
          onRequestClose={handleCloseNewSecItemModal} />
        <DashboardSec />

        <GlobalStyle />
      </UserProvider>
      </>
  );
}