import { HeaderQueue } from "../components/HeaderQueue";
import { GlobalStyle } from "../styles/global";
import { useState } from "react";
import { DashboardUserQueue } from "../components/DashboardUserQueue";

export function UserQueueHome() {
  const [isNewQueueItemModalOpen, setIsNewQueueItemModalOpen] = useState(false);

  function handleOpenNewQueueItemModal(){
    setIsNewQueueItemModalOpen(true);
  }

  function handleCloseNewQueueItemModal(){
    setIsNewQueueItemModalOpen(false);
  }

  return (
    <>
      <HeaderQueue onHandleOpenNewQueueItemModal={handleOpenNewQueueItemModal} showAddToQueueButton={false}/>
      <DashboardUserQueue />

      <GlobalStyle />
    </>
  );
}