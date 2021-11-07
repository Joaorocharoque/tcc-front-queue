import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewQueueItemModal } from "./components/NewQueueItemModal";
import { QueueProvider } from "./hooks/useQueue";

export function App() {
  const [isNewQueueItemModalOpen, setIsNewQueueItemModalOpen] = useState(false);

  function handleOpenNewQueueItemModal(){
    setIsNewQueueItemModalOpen(true);
  }

  function handleCloseNewQueueItemModal(){
    setIsNewQueueItemModalOpen(false);
  }

  return (
    <QueueProvider>
      <Header onHandleOpenNewQueueItemModal={handleOpenNewQueueItemModal}/>
      <Dashboard/>

      <NewQueueItemModal
        isOpen={isNewQueueItemModalOpen}
        onRequestClose={handleCloseNewQueueItemModal}
      />

      <GlobalStyle/>
    </QueueProvider>
  );
}