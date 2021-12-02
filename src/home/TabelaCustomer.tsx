import { Header } from "../components/HeaderCustomer";
import { GlobalStyle } from "../styles/global";
import { useState } from "react";
import { DashboardCustomer } from "../components/DashboardCustomer";
import { CustomerProvider } from "../hooks/useCustomer";
import { NewCustomerItemModal } from "../components/NewCustomerItemModel";


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
    <CustomerProvider>
        <Header onHandleOpenNewCustomerItemModal={handleOpenNewCustomerItemModal} />

        <NewCustomerItemModal
          isOpen={isNewCustomerItemModalOpen}
          onRequestClose={handleCloseNewCustomerItemModal} />
        <DashboardCustomer />

        <GlobalStyle />
      </CustomerProvider>
      </>
  );
}