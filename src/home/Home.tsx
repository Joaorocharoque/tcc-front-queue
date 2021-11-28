import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/global";
import { useState } from "react";
import { NewQueueItemModal } from "../components/NewQueueItemModal";

export function Home() {
  const [isNewQueueItemModalOpen, setIsNewQueueItemModalOpen] = useState(false);

  function handleOpenNewQueueItemModal(){
    setIsNewQueueItemModalOpen(true);
  }

  function handleCloseNewQueueItemModal(){
    setIsNewQueueItemModalOpen(false);
  }

  return (
    <>
      <Header onHandleOpenNewQueueItemModal={handleOpenNewQueueItemModal} />
      <Dashboard />

      <NewQueueItemModal
        isOpen={isNewQueueItemModalOpen}
        onRequestClose={handleCloseNewQueueItemModal} />

      <GlobalStyle />
      </>
  );
}