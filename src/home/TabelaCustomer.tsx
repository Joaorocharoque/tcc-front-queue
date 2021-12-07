import { Header } from "../components/HeaderCustomer";
import { GlobalStyle } from "../styles/global";
import { useState } from "react";
import { DashboardCustomer } from "../components/DashboardCustomer";
import { NewCustomerItemModal } from "../components/NewCustomerItemModel";
import {UserProvider} from "../hooks/useUsers";

export function TabelaCustomer() {
  const [isNewCustomerItemModalOpen, setIsNewCustomerItemModalOpen] = useState(false);

  function handleOpenNewCustomerItemModal(){
    setIsNewCustomerItemModalOpen(true);
  }

  function handleCloseNewCustomerItemModal(){
    setIsNewCustomerItemModalOpen(false);
  }

  return (
    <>
        <UserProvider>
            <Header onHandleOpenNewCustomerItemModal={handleOpenNewCustomerItemModal} />

            <NewCustomerItemModal
              isOpen={isNewCustomerItemModalOpen}
              onRequestClose={handleCloseNewCustomerItemModal} />
            <DashboardCustomer />

            <GlobalStyle />
          </UserProvider>
      </>
  );
}