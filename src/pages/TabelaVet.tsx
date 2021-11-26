import { GlobalStyle } from "../styles/global";
import { useState } from "react";
import { NewVetItemModal } from "../components/NewVetItemModal";
import { VetProvider } from "../hooks/useVet";
import { Header } from "../components/HeaderVet";
import { DashboardVet } from "../components/DashboardVet";


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
    <VetProvider>
        <Header onHandleOpenNewVetItemModal={handleOpenNewVetItemModal} />
     
        <NewVetItemModal
          isOpen={isNewVetItemModalOpen}
          onRequestClose={handleCloseNewVetItemModal} />

         <DashboardVet />

        <GlobalStyle />
      </VetProvider>
      </>
  );
}