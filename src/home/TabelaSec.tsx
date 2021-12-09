import { HeaderEmployee } from "../components/HeaderEmployee";
import { GlobalStyle } from "../styles/global";
import { useState } from "react";
import { NewEmployeeItemModal } from "../components/NewEmployeeItemModal";
import { DashboardEmployee } from "../components/DashboardEmployee";
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
        <HeaderEmployee onHandleOpenNewEmployeeItemModal={handleOpenNewSecItemModal} />

        <NewEmployeeItemModal
          isOpen={isNewSecItemModalOpen}
          onRequestClose={handleCloseNewSecItemModal} />
        <DashboardEmployee />

        <GlobalStyle />
      </UserProvider>
      </>
  );
}