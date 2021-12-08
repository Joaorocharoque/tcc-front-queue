import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'

Modal.setAppElement('#root')

interface QrcodeModalPropos{
    isOpen: boolean;
    queueItemId: number;
    onRequestClose: () => void;
}
 const h1Style = {  
    height: '100%',
    width: '40%',
    margin: 'auto ',
    padding: '15px'
  };
  
  const divModal={
    height: '100%',
    width: '30%',
    margin: 'auto '
  };

export function QrcodeModal({isOpen, onRequestClose, queueItemId} : QrcodeModalPropos) {
    var QRCode = require('qrcode.react');
    const url = "https://tcc-queue-front.herokuapp.com/user/queue?queueItemId=" + queueItemId

    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fecha"/>
            </button>
             
             <h1 style={h1Style}>Scannear QR Code</h1>
             <div style={divModal}>
            <QRCode value={url} />
            </div>
        </Modal>
    )
}