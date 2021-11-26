import { Header } from "../components/HeaderSec";
import { GlobalStyle } from "../styles/global";
import { useState } from "react";
import { SecProvider } from "../hooks/useTableSec";
import { NewSecItemModal } from "../components/NewSecItemModal";
import { DashboardSec } from "../components/DashboardSec";


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
    <SecProvider>
        <Header onHandleOpenNewSecItemModal={handleOpenNewSecItemModal} />

        <NewSecItemModal
          isOpen={isNewSecItemModalOpen}
          onRequestClose={handleCloseNewSecItemModal} />
        <DashboardSec />

        <GlobalStyle />
      </SecProvider>
      </>
  );
}