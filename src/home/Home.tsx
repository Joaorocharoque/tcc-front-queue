import { DashboardQueue } from "../components/DashboardQueue";
import { HeaderQueue } from "../components/HeaderQueue";
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
      <HeaderQueue onHandleOpenNewQueueItemModal={handleOpenNewQueueItemModal} showAddToQueueButton={true} />
      <DashboardQueue />

      <NewQueueItemModal
        isOpen={isNewQueueItemModalOpen}
        onRequestClose={handleCloseNewQueueItemModal} />

      <GlobalStyle />
      </>
  );
}