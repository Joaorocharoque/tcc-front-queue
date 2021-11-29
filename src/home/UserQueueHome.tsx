import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/global";
import { useState } from "react";
import { UserQueueDashboard } from "../components/UserQueueDashboard";

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
      <Header onHandleOpenNewQueueItemModal={handleOpenNewQueueItemModal} showAddToQueueButton={false}/>
      <UserQueueDashboard />

      <GlobalStyle />
    </>
  );
}