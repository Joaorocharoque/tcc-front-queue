import { GlobalStyle } from "../styles/global";
import { useState } from "react";
import { NewVetItemModal } from "../components/NewVetItemModal";
import { HeaderVeterinary } from "../components/HeaderVeterinary";
import { DashboardVeterinary } from "../components/DashboardVeterinary";
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
        <HeaderVeterinary onHandleOpenNewVetItemModal={handleOpenNewVetItemModal} />
     
        <NewVetItemModal
          isOpen={isNewVetItemModalOpen}
          onRequestClose={handleCloseNewVetItemModal} />

         <DashboardVeterinary />

        <GlobalStyle />
      </UserProvider>
      </>
  );
}