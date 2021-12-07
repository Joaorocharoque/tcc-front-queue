import { GlobalStyle } from "../styles/global";
import { useState } from "react";
import { NewVetItemModal } from "../components/NewVetItemModal";
import { Header } from "../components/HeaderVet";
import { DashboardVet } from "../components/DashboardVet";
import {UserProvider} from "../hooks/useUsers";


export function TabelaVet() {
  const [isNewVetItemModalOpen, setIsNewVetItemModalOpen] = useState(false);

  function handleOpenNewVetItemModal(){
    setIsNewVetItemModalOpen(true);
  }

  function handleCloseNewVetItemModal(){
    setIsNewVetItemModalOpen(false);
  }

  return (
    <>
    <UserProvider>
        <Header onHandleOpenNewVetItemModal={handleOpenNewVetItemModal} />
     
        <NewVetItemModal
          isOpen={isNewVetItemModalOpen}
          onRequestClose={handleCloseNewVetItemModal} />

         <DashboardVet />

        <GlobalStyle />
      </UserProvider>
      </>
  );
}